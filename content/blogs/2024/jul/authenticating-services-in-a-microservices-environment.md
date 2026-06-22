---
title: "Authenticating Services in a Microservices Environment"
date: 2024-07-17T14:31:54+05:30
draft: false
author: "Mohit Kanwar"
tags:
  - Authentication
  - Microservices
  - OAuth2
  - OpenID Connect
  - Spring Security
  - Keycloak
  - API Gateway
imageBasePath: "/images/blogs/2024/jul/authenticating-services-in-a-microservices-environment"
image: /images/blogs/2024/jul/authenticating-services-in-a-microservices-environment/banner.png
description: "A practical guide to authenticating users and services in a microservices environment using an identity provider, API gateway, token validation, service-level authorization, and safe identity propagation."
summary: "A production-minded approach to microservice authentication: where the gateway helps, where each service must still protect itself, and how to use OAuth2, OIDC, Keycloak, and Spring Security without turning the gateway into the only security boundary."
toc: true
---

## Why this problem is easy to underestimate

When we start building microservices, the first security question usually sounds simple:

> "Can we protect this API?"

The first answer is also usually simple. Put a gateway in front of the services. Add Keycloak or another identity provider. Validate the token at the gateway. Route the request to the downstream service.

That setup is useful, but it is not the complete answer.

The real question is:

> "Can every service trust the request it has received, understand who or what is calling it, and decide whether that caller should be allowed to perform this action?"

That question changes the architecture.

I originally treated this topic like a setup tutorial: create Eureka, create a gateway, add Keycloak, create one public API and one protected API, then test with curl. It proved that authentication worked, but it did not explain the design decisions properly. This rewrite is closer to how I would discuss the same topic in a real implementation review.

## The reference architecture

The basic building blocks are still familiar:

1. **Identity provider** - Keycloak, Okta, Azure AD, Auth0, Cognito, or another OpenID Connect provider.
1. **API gateway** - the public entry point for routing, coarse authorization, throttling, and request normalization.
1. **Discovery or service registry** - useful for routing and resilience, but not a security boundary.
1. **Downstream services** - accounts, payments, customer profile, limits, notifications, calculators, and other business services.
1. **Observability layer** - audit logs, traces, correlation IDs, metrics, and alerts.

<figure>
  <img src="/images/blogs/2024/jul/authenticating-services-in-a-microservices-environment/service-authentication-architecture.svg" alt="Service authentication architecture for microservices" class="responsive-image-bounded">
  <figcaption>Gateway authentication is useful, but services should still enforce the authorization decisions that belong to their business domain.</figcaption>
</figure>

The important point is this:

> The gateway is an enforcement point. It should not become the only enforcement point.

In a small internal system, gateway-only authorization may look acceptable for a while. In a banking, fintech, or enterprise environment, it becomes risky quickly. Services get reused. New channels appear. Batch jobs and schedulers start calling APIs. Partner integrations arrive. Someone exposes an internal route by mistake. If the downstream service blindly trusts the network, the blast radius becomes bigger than expected.

## Gateway responsibility versus service responsibility

I like to split the responsibility this way:

| Layer | Good responsibility | Bad responsibility |
| --- | --- | --- |
| Identity provider | Authenticate users and clients, issue tokens, publish signing keys, manage claims and scopes | Carrying business-specific authorization logic for every API |
| API gateway | Validate token shape, issuer, expiry, audience, route-level scopes, rate limits, and public/protected routes | Making every fine-grained business decision |
| Downstream service | Validate the token or trusted internal identity, enforce ownership, consent, limits, and business policy | Trusting headers just because they came from inside the network |
| Observability | Audit who called what, why the call was allowed or denied, and which policy was applied | Logging full tokens, secrets, or personal data |

This separation keeps the system understandable. The gateway can reject obvious bad requests early. The service still protects the business action.

For example:

1. The gateway can decide that `/accounts/**` requires an authenticated caller with `accounts.read`.
1. The accounts service must still decide whether this user can read this specific account.
1. The payments service must still decide whether a payment requires step-up authentication, maker-checker approval, velocity checks, or fraud review.
1. The customer profile service must still decide which fields are visible for a role, purpose, and consent state.

## The request flow

A normal external request looks like this:

```http
GET /accounts/123456/transactions?from=2024-07-01
Authorization: Bearer <access-token>
X-Correlation-Id: 7e9c2f0d
```

The gateway should perform coarse checks:

1. Is the token present?
1. Is the token signature valid?
1. Is the issuer trusted?
1. Has the token expired?
1. Is the token intended for this API audience?
1. Does the token have the route-level scope?
1. Is the caller within rate and abuse limits?

If these checks pass, the request can move forward. That does not mean the business action is automatically allowed.

The downstream service should then perform business checks:

1. Does the caller have access to account `123456`?
1. Is the caller acting as a customer, employee, partner, or system?
1. Is the requested action allowed for this role?
1. Is there a consent, purpose, region, or data classification rule?
1. Does the service need step-up authentication?
1. Should this action be audited?

This is the difference between authentication and authorization. Authentication tells us who or what is calling. Authorization decides whether the caller can perform the action.

## Using Keycloak as the identity provider

Keycloak is a good local and self-hosted option for this kind of setup. In production, the same architecture applies even if the identity provider is different.

For a Spring Boot resource server, the cleanest configuration is usually to point the application to the issuer:

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://idp.example.com/realms/bank
```

With this approach, Spring Security can use the provider metadata and JWKS endpoint to validate JWT signatures and token claims. The application should not hard-code public keys unless there is a strong reason. Let the platform handle key rotation.

For local Keycloak development, the issuer may look like this:

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8082/realms/customers
```

That is fine for local development. Production should use HTTPS, proper realm/client configuration, managed secrets, and stricter token lifetimes.

## Gateway security configuration

A simplified Spring Cloud Gateway security configuration can look like this:

```java
package com.mk.gateway.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        return http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchanges -> exchanges
                        .pathMatchers("/actuator/health").permitAll()
                        .pathMatchers(HttpMethod.POST, "/calculator/fd/interest/public").permitAll()
                        .pathMatchers("/accounts/**").hasAuthority("SCOPE_accounts.read")
                        .pathMatchers("/payments/**").hasAuthority("SCOPE_payments.write")
                        .anyExchange().authenticated()
                )
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(withDefaults()))
                .build();
    }
}
```

This is intentionally boring. Boring security configuration is usually better than clever security configuration.

The gateway should reject requests that are clearly not allowed. But I would not put all business rules here. The gateway does not know enough about account ownership, transaction state, consent, purpose, and product rules.

## Service-level authorization

The accounts service should not only rely on the gateway. It should also run as a resource server and protect its own endpoints.

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://idp.example.com/realms/bank
```

Then the service can enforce coarse method-level rules:

```java
package com.mk.accounts.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{accountId}/transactions")
    @PreAuthorize("hasAuthority('SCOPE_accounts.read')")
    public TransactionSummary getTransactions(@PathVariable String accountId) {
        return accountService.getTransactionsForAllowedCaller(accountId);
    }
}
```

The important part is hidden inside `getTransactionsForAllowedCaller`. That is where the service checks whether the caller can read this particular account.

Scope checks are not enough for many real systems. A user may have `accounts.read`, but that does not mean the user can read every account. The service needs resource-level authorization.

## Service-to-service calls

User-facing calls are not the only calls in a microservices system. Services also call each other.

For example:

1. The payments service calls the limits service.
1. The statement service calls the accounts service.
1. The customer service calls the consent service.
1. A scheduler calls the notification service.

For these cases, avoid passing usernames and passwords around. Also avoid using the OAuth resource owner password grant for modern applications. It exposes user credentials to the client and does not fit well with MFA or modern authentication flows.

For machine-to-machine calls, use one of these patterns:

1. **Client credentials** - the calling service gets a token as itself.
1. **mTLS** - the calling service proves its identity with a client certificate.
1. **Private key JWT** - the service authenticates to the token endpoint using asymmetric keys.
1. **Workload identity** - common in Kubernetes and cloud-native platforms.

A client credentials request looks like this:

```http
POST /realms/bank/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

client_id=statement-service
client_secret=${STATEMENT_SERVICE_SECRET}
grant_type=client_credentials
scope=accounts.read
```

The service receiving this call should know that the caller is `statement-service`, not Mohit, not a random user, and not just "internal traffic".

That distinction matters. A user token represents a user. A service token represents a service. Mixing them casually creates audit and authorization problems.

## Propagating user context

Sometimes a downstream service needs to know the end user behind the request. There are multiple ways to do this:

1. Forward the original access token.
1. Exchange the external token for an internal token.
1. Create a signed internal identity context at the edge.
1. Use a service mesh or identity-aware proxy pattern.

Forwarding the original access token is simple, but it is not always the best design. It increases the number of services that need to understand external tokens and increases the impact if that token leaks.

For larger systems, I prefer creating an internal representation of the caller after the edge has validated the external token. That internal representation should be signed, short-lived, and never exposed back to the browser or external client.

The internal context may include:

```json
{
  "subject": "user-78231",
  "actorType": "customer",
  "channel": "mobile",
  "roles": ["retail_customer"],
  "scopes": ["accounts.read"],
  "purpose": "self_service",
  "correlationId": "7e9c2f0d"
}
```

Do not pass identity as plain headers such as `X-User-Id` unless every receiving service can cryptographically verify who created that header. Plain headers are too easy to spoof when a service is accidentally exposed or when an internal caller is compromised.

## Public APIs are not unmanaged APIs

In the old version of this post, I used a fixed deposit calculator as the public API. That example is still useful.

A public endpoint may not need login:

```http
POST /calculator/fd/interest/public
Content-Type: application/json

{
  "schemeCode": "SCHEME_A",
  "amount": 20000,
  "durationInMonths": 12
}
```

But "public" does not mean "unprotected".

Public APIs still need:

1. Input validation
1. Rate limiting
1. Abuse detection
1. Request size limits
1. Bot controls where needed
1. Logging and correlation IDs
1. A clear decision on whether the result can be cached

Many incidents start with public endpoints that were considered harmless.

## Token validation checklist

For every service that accepts a bearer token, I check at least the following:

| Check | Why it matters |
| --- | --- |
| Signature | Confirms the token was issued by the trusted issuer |
| Issuer | Prevents accepting tokens from the wrong realm or environment |
| Expiry and not-before | Rejects stale or not-yet-valid tokens |
| Audience | Prevents a token meant for one API from being replayed against another API |
| Scope or permission | Confirms route-level authorization |
| Subject or client ID | Identifies whether the caller is a user or a service |
| Token type | Avoids accidentally accepting ID tokens where access tokens are expected |
| Correlation ID | Supports audit and troubleshooting |

The audience check is worth calling out. I have seen systems validate signature and expiry but ignore audience. That means a token issued for one API may work against another API. In a microservices environment, that is a serious design gap.

## What I would avoid

These are the patterns I would avoid in a production setup:

1. Validating tokens only at the gateway and leaving sensitive services open internally.
1. Passing `X-User-Id` or `X-Role` headers without signing or trusted infrastructure controls.
1. Logging full access tokens.
1. Storing client secrets in `application.yml`.
1. Using the resource owner password grant for user login.
1. Treating service discovery as a security mechanism.
1. Giving one broad scope such as `api.access` to every client.
1. Using long-lived access tokens because refresh logic is inconvenient.
1. Mixing user tokens and service tokens without an audit model.
1. Relying on network location as the proof of identity.

Each of these choices may look convenient during development. Most of them become expensive later.

## A practical delivery sequence

If I had to implement this in phases, I would do it like this:

1. Set up the identity provider and define realms, clients, scopes, roles, and token lifetimes.
1. Configure the gateway as a resource server and reject unauthenticated traffic by default.
1. Mark public routes explicitly. Everything else should require authentication.
1. Add route-level scope checks at the gateway.
1. Configure sensitive downstream services as resource servers too.
1. Add resource-level authorization inside the business services.
1. Add service-to-service authentication using client credentials, mTLS, or workload identity.
1. Add correlation IDs, audit events, and authorization decision logs.
1. Review token contents and remove claims that do not need to travel.
1. Run negative tests: wrong issuer, wrong audience, expired token, missing scope, spoofed header, direct service access.

The negative tests are important. Security is not proven by one happy curl command. It is proven when the wrong requests fail for the right reasons.

## Final thought

The gateway is a good place to start, but it is not where the security design ends.

In a microservices system, every service is a small boundary. The service should understand the caller, validate the trust material it receives, and enforce the rules that belong to its own domain.

That is the difference between "we added authentication" and "the system is designed to survive real usage".

## References I keep handy

1. [OAuth 2.0 Security Best Current Practice, RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html)
1. [OWASP Microservices Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Microservices_Security_Cheat_Sheet.html)
1. [Spring Security OAuth2 Resource Server JWT documentation](https://docs.spring.io/spring-security/reference/reactive/oauth2/resource-server/jwt.html)
1. [Keycloak OpenID Connect endpoints documentation](https://www.keycloak.org/securing-apps/oidc-layers)

{{< mk-cta variant="blog" >}}
