---
title: "Application Security Verification Standard"
date: 2024-03-10T10:11:38+05:30
draft: false
author: "Mohit Kanwar"
tags:
    - Application Security
    - OWASP
    - ASVS Framework
    - Cybersecurity
    - Authentication
    - Access Control
    - Data Protection
    - Compliance
    - Software Development
    - Security Standards
    - Threat Modelling
    - Encryption
    - Privacy Protection
    - Vulnerability Management
    - Secure Coding
image: /images/blogs/2024/mar/Application-Security-Verification-Standard/banner.png
description: Explore the power of OWASP's Application Security Verification Standards (ASVS) to fortify your software against cyber threats. Learn how to navigate key security categories like authentication, access control, and data protection, ensuring compliance with industry standards while enhancing user trust. Dive deep into ASVS levels and essential security considerations to build robust, secure applications that stand strong against evolving security challenges.
---
# Application Security Verification Standards
Ensuring the security of an application is a complex task. To simplify this process, OWASP (Open Web Application Security Project) has developed <cite>a standardized approach[^1]</cite> aimed at gauging and enhancing application security. Application Security Verification Standards a.k.a ASVS framework not only assists in evaluating the security posture of an application but also empowers development teams to build robust and secure software.

Consider a scenario where a fintech company is developing a new banking application. By incorporating OWASP's recommendations into their development process, they can systematically identify and address security weaknesses, safeguard sensitive financial information and bolster customer trust.

# Security Architecture
From security point of view, we need to take care of the following aspects
- Availability,
- Confidentiality
- Integrity
- Non-repudiation
- Privacy

## Availability
The information and services must be readily available as anticipated. Security considerations in this context must address issues such as Denial-of-Service (DoS) or, in the modern world, Distributed-Denial-of-Service (DDoS) attacks. In such instances, malicious entities inundate servers with a vast number of requests, thereby monopolizing server resources and impeding access for legitimate users.

In my role as a security architect, it is imperative to strategize for disaster recovery in the event of such occurrences. This necessitates ensuring the implementation of regular backups and recovery scripts.

## Confidentiality
Information that should not be disclosed must be safeguarded against leaks. This encompasses internal service details, proprietary business secrets, and similar sensitive data. The unauthorized disclosure of such information could result in significant financial losses for the business and potentially provide an advantage to competitors. Therefore, as an architect, it is crucial for me to establish robust authorization and authentication mechanisms. This includes implementing multi-factor authentication and encryption protocols for data both in transit and at rest.

## Integrity
Hackers may infiltrate the core systems of a business, altering data or manipulating process behaviors, thereby compromising the integrity of the system. This breach of integrity can lead to unpredictable outcomes and potentially allow hackers to propagate their own agendas. As an architect, it is incumbent upon me to implement measures such as checksums and other integrity checks to safeguard against unauthorized alterations to data by external systems.

## Non- Repudiation
When a user initiates an action, they should not be able to later deny having taken that action. As a security architect, it is my responsibility to establish robust audit trails and logging mechanisms to ensure accountability. Additionally, implementing digital signatures can help create legally binding records for the actions performed by users. These measures are essential to uphold the integrity and traceability of user actions within the system.

## Privacy
The privacy of users must be upheld as a paramount concern. Information pertaining to one user should remain inaccessible to other users unless explicitly required for business purposes. As an architect, it is imperative to adhere to regulations such as GDPR and other privacy guidelines to safeguard user data. This entails implementing robust access controls and data protection measures to prevent unauthorized access or disclosure of sensitive information.

# ASVS Levels
OWASP (Open Web Application Security Project) has categorized the Application Security Verification Standard (ASVS) into three levels:

 * ASVS Level 1: Low Assurance
 * ASVS Level 2: Moderate Assurance
 * ASVS Level 3: High Assurance

These levels are structured to cater to various application security needs based on the sensitivity of the data and the criticality of the application.

<img src="/images/blogs/2024/mar/Application-Security-Verification-Standard/summary.png" alt="Image" alt="Summary of ASVS guidelines by OWASP" class="responsive-image-bounded">

The ASVS guidelines are organized into the following sections, which provide comprehensive coverage of security controls and best practices:

## V1 Architecture, Design and Threat Modelling
Security should be integrated into every stage of the development lifecycle, beginning with the drafting of requirements and the architectural design phase. It is essential to thoroughly consider security measures from the project's inception. Performing threat modeling at the outset helps identify and address potential security vulnerabilities early on, thereby preventing security issues from permeating the system as it progresses.

## V2 Authentication
The foundation of security lies in user identification. Authentication is the pivotal process that verifies the identity of users logging into and accessing the system. The strength of the authentication mechanism directly correlates with the overall security of the system.

## V3 Session Management
Following user authentication, a session is initiated. It is imperative to secure this session to mitigate risks such as session hijacking, which could lead to unauthorized access to the system.

## V4 Access Control
Upon user identification, it is crucial to enforce restrictions ensuring users access only permitted information and actions while being barred from accessing unauthorized resources. The latter aspect is of paramount importance. It is achieved through the implementation of various access control mechanisms such as Role-Based Access Control (RBAC) or Attribute-Based Access Control (ABAC).

## V5 Validation, Sanitization, and Encoding
The system is required to thoroughly validate and sanitize all input sources, encompassing user inputs as well as those from integrating systems. Any third-party system providing inputs must adhere to a predefined contract. Input fields must undergo meticulous sanitization procedures to mitigate risks associated with Injection and Cross-Site Scripting (XSS) vulnerabilities.

## V6 Stored Cryptography
All stored data should be categorized based on security requirements, such as Personally Identifiable Information (PII), financial data, and public information. This classification enables striking the appropriate balance between encryption and performance. Effective management of access to security and cryptographic keys is crucial.

## V7 Error Handling and Logging
Throughout system development, diverse errors must be gracefully handled, and logging must be executed to facilitate issue resolution. Log management entails defining the lifespan of logs. Logs should contain sufficient information for troubleshooting without being overly verbose.

## V8 Data Protection
Data must be safeguarded to uphold its Confidentiality, Integrity, and Availability. This encompasses overall data protection, securing data at the client side, and safeguarding various forms of data, whether directly accessible or in derived formats. All data must be protected in accordance with its classification.

## V9 Communications
Ensuring the security of client-server communication is paramount. The inherent untrustworthiness of networks, compounded by the internet's design, which involves multiple hops before packets reach their destination, necessitates robust measures. The system should implement mechanisms such as TLS, mTLS, or SSL pinning for securing client-server communication. Particular attention should be given to preventing Man-in-the-Middle (MITM) attacks.

## V10 Malicious Code
Sufficient security and review mechanisms should be in place to prevent the infiltration of malicious code. In the event of such infiltration, measures should be in place to contain the harm and prevent its spread throughout the system. This can be achieved by restricting access and control of services. The system must be devoid of any backdoors or hidden functionalities that could be exploited by hackers. Antivirus and other checks should be available to detect and mitigate such threats.
## V11 Business Logic
Security considerations should be integrated into the definition of business requirements. When defining the business logic, it's essential to establish limits and implement access control measures.

## V12 Files and Resources
Files are often targeted in cyber attacks. Any file uploads must adhere to defined standards and undergo antivirus checks. Uploaded files should only have specified and allowed MIME types. In most cases, granting executable rights to uploaded or downloaded files is unnecessary and should be avoided.

## V13 API and Web Services
All APIs, whether REST, SOAP, GraphQL, or any other mechanism, must enforce authorization to ensure that only authorized individuals can access data and processes. Even public APIs should incorporate rate limiting mechanisms.

## V14 Configuration
Configurations should be securely stored, especially as they may contain sensitive information such as licenses. Access to or modification of configurations should require the involvement of more than one individual for added security.

[^1]: https://owasp.org/www-project-application-security-verification-standard/  