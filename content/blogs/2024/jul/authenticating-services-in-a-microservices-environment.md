---
title: "Authenticating Services in a Microservices Environment"
date: 2024-07-17T14:31:54+05:30
draft: false
author: "Mohit Kanwar"
tags:
  - Needs Improvement
  - WIP
  - Authentication
  - Microservices
  - Code
image: /images/blogs/2024/jul/authenticating-services-in-a-microservices-environment/banner.png
description:
toc:
---
> It is easier to edit a draft than to create a new. I   understand that this blog is not upto the mark that I want it to be, however, I am still publishing it, so that I can keep on improving it.

> The code for this blog is checked-in at https://github.com/mohitkanwar/spring-microservices-framework

While developing a microservices setup, one of the prime aspect is taking care of the security of the APIs.

Today, we are going to talk about setting up our application infrastructure to authenticate the APIs.


# Architecture

This system involves
1. Gateway
2. Discovery
3. Authentication Service
4. Secured Downstream Services e.g. Accounts Service
5. Public Downstream Services e.g. Interest Calculator Service

```mermaid
block-beta
columns 5
  user(("User")):5
  space:5
  block:InfraBlock:5
    srv_gateway["Gateway"]
  end
  space:5
  block:InfraSupportBlock:5
    srv_discovery["Discovery"]:1
    srv_auth["Authentication Service"]:1
    space
    space
    space
  end
  space:5
  block:ServicesBlock:5
    space
    space
    srv_public["Public Service"]
    srv_secured["Secured Service"]
  end
  user --"Access"--> srv_gateway
  srv_gateway --"Find available<br> services"--> srv_discovery
  srv_discovery --> srv_gateway
  srv_gateway --"Authenticate"--> srv_auth
  srv_gateway --"Publically accessible"--> srv_public
  srv_gateway --"Validate Access<br> before invoking"--> srv_secured

```

### Gateway
The Gateway service is the entry point of the application. It exposes all the APIs from downstream services.

Since this is the entry point of the application, it takes care of the following 
1. APIs Exposure
1. Load Balancing
1. Circuit Breaking
1. Token Validation


### Discovery
The Discovery service is the service responsible to discover the instances of running microservices and inform gateway about the same.

### Authentication Service
This service is responsible for authenticating an incoming request by either generating an authentication token, or by validating an existing token. In today's exercise, we are going to use Keycloak as our authentication service.

### Secured Services
The secured downstream services (or APIs) are the endpoints that need security. Such endpoints are user specific, and a user accessing these APIs must authenticate and authorize himself before accessing these functionalities.

### Public Services
The public services or APIs are the endpoints that are developed for general consumption. No authentication is necessary for such APIs.


# Tech-Stack
For this solution, we are going to use Spring based technologies.
There may be additional techs added as part of services development

| S.NO | Technology | Version |
|----------|----------|----------:|
| 1 | Java | 21 |
| 2 | SpringBoot | 3.3.1 |
| 3 | Gradle |  |
| 4 | springCloudVersion| 2023.0.3|

## Code Structure

Create a software system as follows

### Discovery

Create a SpringBoot application with the following dependency

```xml
       <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>

```

Add the following annotation on your main class

```java
@EnableEurekaServer
```

Add the following properties

```yaml
spring:
  application:
    name: discovery
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    wait-time-in-ms-when-sync-empty: 0
```

Start the service and check if it is running on <a href="http://localhost:8761/" target="_blank">http://localhost:8761/</a>.

### Gateway
Setup the Gateway service by adding following dependencies

```xml
          <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webflux</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-oauth2-resource-server</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-oauth2-jose</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-jwt</artifactId>
            <version>1.1.1.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
```

Enable the eureka client

```java
@EnableDiscoveryClient
```
Add the following configurations in application.yml

```yml
server:
  port: 8080

spring:
  application:
    name: gateway
  cloud:
    gateway:
      routes:
        - id: eureka-client
          uri: lb://EUREKA-CLIENT
          predicates:
            - Path=/eureka-client/**
```
### Services
For demonstration, I have created a microservice called calculators-service.

It is a springboot application. It exposes two end points. 
One is supposed to be public, and another one is supposed to be protected.

```java
package com.mk.calculatorsservice.controller;


import com.mk.calculatorsservice.domain.request.FDRequest;
import com.mk.calculatorsservice.domain.response.FDResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calculator")
public class FDController {

    @PostMapping("/fd/interest")
    public FDResponse calculateFD(@RequestBody FDRequest fdRequest) {
        // Example interest rates for different schemes
        double interestRate = switch (fdRequest.getSchemeCode()) {
            case "SCHEME_A" -> 5.0;
            case "SCHEME_B" -> 6.0;
            case "SCHEME_C" -> 7.0;
            default -> throw new IllegalArgumentException("Invalid scheme code");
        };

        double interest = (fdRequest.getAmount() * interestRate * fdRequest.getDuration()) / 100;
        double maturityAmount = fdRequest.getAmount() + interest;

        FDResponse fdResponse = new FDResponse();
        fdResponse.setInterestRate(interestRate);
        fdResponse.setMaturityAmount(maturityAmount);

        return fdResponse;
    }
    // should be public
    @PostMapping("/fd/interest/p")
    public FDResponse calculatePublicFD(@RequestBody FDRequest fdRequest) {
        // Example interest rates for different schemes
        double interestRate = switch (fdRequest.getSchemeCode()) {
            case "SCHEME_A" -> 5.0;
            case "SCHEME_B" -> 6.0;
            case "SCHEME_C" -> 7.0;
            default -> throw new IllegalArgumentException("Invalid scheme code");
        };

        double interest = (fdRequest.getAmount() * interestRate * fdRequest.getDuration()) / 100;
        double maturityAmount = fdRequest.getAmount() + interest;

        FDResponse fdResponse = new FDResponse();
        fdResponse.setInterestRate(interestRate);
        fdResponse.setMaturityAmount(maturityAmount);

        return fdResponse;
    }
}

```

### Authentication Service

For simplicity, we are going to use Keycloak as our authentication service. Practically, I would like to create a wrapper surrounding Keycloak and then use it as authentication service. 

For now, let's use Keycloak itself.

We can make use of docker-compose.yml to spin up a Keycloak instance.

```yml
version: '3.8'

services:
  keycloak:
    image: quay.io/keycloak/keycloak:25.0.2
    container_name: mkbank-keycloak-container
    environment:
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
      KC_LOG_LEVEL: INFO
    ports:
      - "8082:8080"  # Map host port 8082 to container port 8080
    command: start-dev  # Use the start-dev command for development mode
    restart: unless-stopped  # Restart the container unless it's explicitly stopped
    tty: true  # Allocate a pseudo-TTY for better log display in console
    volumes:
      - ./keycloak_data:/opt/keycloak/data

```

Then we need to setup a new Realm : Customers
Create a client and User within the client for authentication.

### Gateway - revisited
Let's go back to Gateway to configure the routes and security steps.

Update the configuration to add Keycloak configurations
```yml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8082/realms/customers
      client:
        registration:
          keycloak:
            client-id: gateway-client
            client-secret: HPSzCoP0Q96xqm77vEhaigkMhmn4vZ1B
            scope: openid,profile,email
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
        provider:
          keycloak:
            authorization-uri: http://localhost:8082/realms/customers/protocol/openid-connect/auth
            token-uri: http://localhost:8082/realms/customers/protocol/openid-connect/token
            user-info-uri: http://localhost:8082/realms/customers/protocol/openid-connect/userinfo
            jwk-set-uri: http://localhost:8082/realms/customers/protocol/openid-connect/certs
            user-name-attribute: preferred_username
```

Create a new configuration to specify public and protected routes :

```yml
application:
  routes:
    publicRoutes:
      - name: eureka_route
        path: /eureka/**
        uri: http://localhost:8761/eureka/
      - name: fd_interest_calculator_route
        path: /calculator/fd/interest/p
        uri: lb://CALCULATORS-SERVICE

    authenticatedRoutes:
      - name: fd_interest_calculator_route
        path: /calculator/fd/interest
        uri: lb://CALCULATORS-SERVICE
```

The complete yml now looks like : 
```yml
server:
  port: 8080

spring:
  application:
    name: gateway
  cloud:
    gateway:
      routes:
        - id: eureka-client
          uri: lb://EUREKA-CLIENT
          predicates:
            - Path=/eureka-client/**
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8082/realms/customers
      client:
        registration:
          keycloak:
            client-id: gateway-client
            client-secret: HPSzCoP0Q96xqm77vEhaigkMhmn4vZ1B
            scope: openid,profile,email
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
        provider:
          keycloak:
            authorization-uri: http://localhost:8082/realms/customers/protocol/openid-connect/auth
            token-uri: http://localhost:8082/realms/customers/protocol/openid-connect/token
            user-info-uri: http://localhost:8082/realms/customers/protocol/openid-connect/userinfo
            jwk-set-uri: http://localhost:8082/realms/customers/protocol/openid-connect/certs
            user-name-attribute: preferred_username

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
application:
  routes:
    publicRoutes:
      - name: eureka_route
        path: /eureka/**
        uri: http://localhost:8761/eureka/
      - name: fd_interest_calculator_route
        path: /calculator/fd/interest/p
        uri: lb://CALCULATORS-SERVICE

    authenticatedRoutes:
      - name: fd_interest_calculator_route
        path: /calculator/fd/interest
        uri: lb://CALCULATORS-SERVICE
logging:
  level:
    org.springframework.security: DEBUG
    org.springframework.security.oauth2: DEBUG

```

Create a domain model to read this configuration : 

```java
package com.mk.gateway.domains;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AppRoute {
        private String name;
        private String path;
        private String uri;
}

```

Create a configuration reading class

```java
package com.mk.gateway.configs;

import com.mk.gateway.domains.AppRoute;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Setter
@Configuration
@ConfigurationProperties(prefix = "application.routes")
public class RouteConfigProperties {
    private List<AppRoute> publicAppRoutes;
    private List<AppRoute> authenticatedAppRoutes;

    public List<AppRoute> getPublicAppRoutes() {
        if (publicAppRoutes == null) {
            publicAppRoutes = new ArrayList<>();
        }
        return publicAppRoutes;
    }

    public List<AppRoute> getAuthenticatedAppRoutes() {
        if (authenticatedAppRoutes == null) {
            authenticatedAppRoutes = new ArrayList<>();
        }
        return authenticatedAppRoutes;
    }

}

```


Define the App routes

```java
package com.mk.gateway.routes;

import com.mk.gateway.configs.RouteConfigProperties;
import com.mk.gateway.domains.AppRoute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomRouteConfig {
    @Autowired
    private RouteConfigProperties routeConfigProperties;
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        RouteLocatorBuilder.Builder routesBuilder = builder.routes();

        for (AppRoute appRoute : routeConfigProperties.getPublicAppRoutes()) {
            routesBuilder.route(appRoute.getName(), r -> r.path(appRoute.getPath())
                    .uri(appRoute.getUri()));
        }
        for (AppRoute appRoute : routeConfigProperties.getAuthenticatedAppRoutes()) {
            routesBuilder.route(appRoute.getName(), r -> r.path(appRoute.getPath())
                    .uri(appRoute.getUri()));
        }

        return routesBuilder.build();
    }
}


```


Create the security config

```java
package com.mk.gateway.configs;

import com.mk.gateway.domains.AppRoute;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebFluxSecurity
@Log
public class SecurityConfig {

    @Autowired
    private RouteConfigProperties routeConfigProperties;

    @Order(Ordered.HIGHEST_PRECEDENCE)
    @Bean
    public SecurityWebFilterChain apiHttpSecurity(ServerHttpSecurity http) {
        http.csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchanges -> {
                    for (AppRoute appRoute : routeConfigProperties.getPublicAppRoutes()) {
                        exchanges.pathMatchers(appRoute.getPath()).permitAll();
                    }
                    for (AppRoute appRoute : routeConfigProperties.getAuthenticatedAppRoutes()) {
                        exchanges.pathMatchers(appRoute.getPath()).authenticated();
                    }
                    exchanges.anyExchange().denyAll();
                })
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(withDefaults()));

        return http.build();
    }
}

```

Start all the services.


Hit the public API via gateway.

```curl
curl --location 'http://localhost:8080/calculator/fd/interest/p' \
--header 'Content-Type: application/json' \
--data '{
    "schemeCode": "SCHEME_A",
    "amount" : 20,
    "duration" : 12
}'
```
Hit the protected API via gateway

```curl
curl --location 'http://localhost:8080/calculator/fd/interest' \
--header 'Content-Type: application/json' \
--data '{
    "schemeCode": "SCHEME_A",
    "amount" : 20,
    "duration" : 12
}'
```
You ger unauthenticated exception. Generate the auth token : 
Get an authentication token from Keycloak

```curl

curl --location 'http://localhost:8082/realms/customers/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=gateway-client' \
--data-urlencode 'username=m.m.kanwar@gmail.com' \
--data-urlencode 'password=password' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_secret=HPSzCoP0Q96xqm77vEhaigkMhmn4vZ1B'
```

Then hit the API with generated token : 

```curl

curl --location 'http://localhost:8080/calculator/fd/interest' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1eUxDU2tTMmxKNVZFbGZYWV9QYmpUVm5FOXZQMkJPdXNXODhTTGVKai00In0.eyJleHAiOjE3MjE4MTUyODEsImlhdCI6MTcyMTgxNDk4MSwianRpIjoiOTkyZjY4MjItYTkyOS00ZTI5LThjM2YtMmQ1YTQxNWJkMDc0IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgyL3JlYWxtcy9jdXN0b21lcnMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNzI5ZDYyYmQtMTk2NC00YzY3LWFmZTQtNTAxMTBmMmI2NTEzIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZ2F0ZXdheS1jbGllbnQiLCJzaWQiOiJjNTkwZThhYS1iMmU1LTQwMjUtOGJiMC0wOTgxMzY2OGE4YjkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWN1c3RvbWVycyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1vaGl0IEthbndhciIsInByZWZlcnJlZF91c2VybmFtZSI6Im0ubS5rYW53YXJAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6Ik1vaGl0IiwiZmFtaWx5X25hbWUiOiJLYW53YXIiLCJlbWFpbCI6Im0ubS5rYW53YXJAZ21haWwuY29tIn0.g7bicpI5LS3OryxgvBpcNkt3OWH-KpwWDaJo8C3f1vS6qXlA5sfEHNPSSaD8O33qgSenOK4i1LaeQsFKooBskXWo4GbyfWg4YXX5m4FlgJmJ5mFCX0TLdnTRV7RpeJ3bRHK43g64sQMmfRfqx8wxmFEBN0sez0vww4h7CobJs9ig3svsc0APItpTk4Aq1CP6LY-zyYslSw_Zs2HbTIKSeQlTVoMVAnUc7rYANRgyPapSdVEhYKVo4IXExHpxpN8jAaDUWApHKUX91Rjt8JNY-5FjO7lGIvw8Utd4dzhH5ekobefO8P4xMC8mbxQqcRee0ZYJpKu2_S7Kwn7eqTf5Yg' \
--data '{
    "schemeCode": "SCHEME_A",
    "amount" : 20,
    "duration" : 12
}'

```

Authentication should be successful.