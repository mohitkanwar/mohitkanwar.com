---
title: "APIs Are Forever"
date: 2024-05-26T11:45:06+05:30
draft: false
author: "Mohit Kanwar"
tags:
  - API Design
  - Software Architecture
  - Integration
  - Technical Debt
  - Platform Engineering
  - Developer Experience
image: /images/blogs/2024/may/apis-are-forever/banner.png
description: "API design choices live for years. A practical note on avoiding unnecessary versions, protecting compatibility, documenting contracts, and treating APIs as long-term architecture decisions."
summary: "APIs are expensive to change once consumers depend on them. This post explains why small shortcuts become long-term complexity and how teams can design APIs that age better."
toc: true
---

APIs, like diamonds, are forever. The title is a small exaggeration, but only a small one.

APIs are expensive to build and even more expensive to change. Once a team starts consuming an API, the contract gets copied into code, tests, dashboards, support scripts, batch jobs, partner integrations, and sometimes even operational runbooks. After that point, changing the API is not just a code change. It becomes somebody else's release plan.

That is why API design needs more attention than it usually gets.

In one of my assignments, I saw four to five versions of the same API running in parallel. Each version had been created for a valid reason at that time. A new field was required. One consumer needed a slightly different response. A migration was half complete. The old code was difficult to change. The deadline was close.

So instead of fixing the core API, the team added another version.

It looked like progress in the short term. In reality, the system was slowly becoming harder to understand.

## The Cost of One More Version

The first extra version of an API rarely looks dangerous.

```text
GET /getCustomerData
GET /getCustomerDataV2
GET /getCustomerDataNew
GET /getCustomerDataForMobile
```

The problem is not the URL. The problem is the uncertainty behind it.

After a few months, nobody is fully sure which API is correct. One consumer depends on the old behavior. Another consumer uses a field that exists only in `V2`. A third consumer sends data in a format that should have been deprecated but is still accepted because nobody wants to break production.

Debugging also becomes slow. When a customer profile is wrong, the first question becomes: which API path created this data? Then the same confusion appears in the database. There are multiple tables, multiple mappings, and multiple jobs trying to keep things synchronized. Half of the data is present in one place and the other half is present somewhere else.

At the cost of speeding up today, we quietly borrow time from the future.

## Why This Happens

Duplicate APIs usually do not happen because teams are careless. They happen because the system rewards the shortcut.

There are a few common reasons:

1. The API has no clear owner.
2. The current implementation is too risky to change.
3. Consumers are not documented properly.
4. Backward compatibility rules are not written down.
5. There is no deprecation process.
6. API reviews happen after development, not before development.

When these things are missing, versioning becomes the default answer to every uncomfortable design question.

## Versioning Is Not the First Solution

Versioning is useful. Sometimes it is necessary. But versioning should be used for meaningful contract changes, not for every small requirement.

If the existing concept is still the same, the API should usually evolve without creating a new version.

For example, instead of this:

```text
GET /customerDetailsV1?id=123
GET /customerDetailsV2?id=123
GET /customerDetailsForBranch?id=123
GET /customerDetailsForCallCenter?id=123
```

I would prefer something closer to this:

```text
GET /customers/{customerId}
GET /customers/{customerId}?view=summary
GET /customers/{customerId}?view=branch
GET /customers/{customerId}?view=contact-center
```

This is not just a naming improvement. It keeps the domain stable. There is still one customer resource. Different consumers can ask for different views, but the core contract remains understandable.

The same principle applies to response changes. Adding optional fields is usually safer than creating a new response model for every consumer.

```json
{
  "customerId": "C12345",
  "displayName": "A. Sharma",
  "status": "ACTIVE",
  "relationshipSince": "2018-04-12",
  "links": {
    "accounts": "/customers/C12345/accounts",
    "relationships": "/customers/C12345/relationships"
  }
}
```

If a consumer does not need `relationshipSince`, it can ignore it. If another consumer needs account links, it can use them. The API has evolved without becoming a different API.

## Design the Contract, Not Just the Endpoint

Many API reviews focus only on endpoint names and request-response payloads. That is not enough.

A good API contract should answer these questions:

1. What business concept does this API represent?
2. Who owns the data returned by this API?
3. Which fields are mandatory and which fields are optional?
4. What can be added later without breaking consumers?
5. What errors can the consumer expect?
6. Is the operation idempotent?
7. How will pagination, filtering, and sorting work?
8. What audit trail is required?
9. Which consumers are using the API today?
10. What is the deprecation policy?

These questions look boring when the project is starting. They become extremely valuable when the API is five years old and still running critical traffic.

## Put Governance Where the Work Happens

I do not like heavy governance where architects sit separately and approve documents after the team has already built the feature. That usually creates friction without improving quality.

API governance should be lightweight and close to delivery.

The practical version is:

1. Maintain a small API style guide.
2. Review API contracts before development starts.
3. Keep examples in the repository, not only in a wiki.
4. Add contract tests for important consumers.
5. Maintain a consumer registry for public and internal APIs.
6. Publish a changelog.
7. Define a real deprecation window.
8. Make one team accountable for each API.

The goal is not to slow teams down. The goal is to avoid creating permanent complexity for temporary speed.

## A Checklist I Use

Before approving or exposing an API, I like to check a few simple things:

1. Can a new developer understand the API name without reading the implementation?
2. Is the API designed around a domain concept, not around the current database table?
3. Can we add fields later without breaking consumers?
4. Are error responses consistent with the rest of the platform?
5. Is there a clear rule for authentication and authorization?
6. Is the API leaking internal system names?
7. Do we know who the consumers are?
8. Do we know how this API will be retired if it becomes obsolete?

If the answer is unclear, I would rather spend one more day on the contract than spend the next three years maintaining five slightly different versions.

## APIs Are Architecture Decisions

An API is not just a controller method. It is an architecture decision exposed to other teams.

Good APIs reduce coordination. Poor APIs create meetings.

Good APIs make the domain easier to understand. Poor APIs expose internal confusion.

Good APIs can evolve. Poor APIs multiply.

This is why I treat API design as seriously as database design. Both are hard to change once people depend on them. Both can either simplify the system or turn every future change into a negotiation.

Every API is a promise. Make fewer promises, make clearer promises, and keep them.

---

## Related Reading

- [Unveiling the Art and Essentials of API Design](/blogs/crafting-api-magic/) - broader API design principles and why public contracts deserve care
- [Kareena Kapoor Controllers and the Fluffy Services](/blogs/kareena-kapoor-controllers/) - a practical note on keeping controllers and services disciplined
- [Authenticating Services in a Microservices Environment](/blogs/2024/jul/authenticating-services-in-a-microservices-environment/) - securing service-to-service APIs
- [Multi-Tenant Architecture](/blogs/multi-tenant-architecture/) - how platform APIs change when many tenants share the same system

{{< mk-cta variant="blog" >}}
