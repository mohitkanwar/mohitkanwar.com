---
title: "Self Hosted Captcha"
date: 2024-01-01T22:53:58+05:30
draft: false
author: "Mohit Kanwar"
tags:
  - Free Software
  - Open Source
  - Cost of software
  - Software Development
  - Software Maintenance
  - Freemium model

imageBasePath: "/images/solutions/self-hosted-captcha"
image: /images/solutions/self-hosted-captcha/self-hosted-captcha.png
description: "Discover the costs of developing free software, beyond monetary investments. Explore freemium models, user data value, and benefits of contributing to free software."
toc: 
---

# Objective

To design and implement a self-hosted CAPTCHA service that is secure, user-friendly, scalable, and compliant with relevant regulations, ensuring robust protection against automated bots while providing a seamless experience for legitimate users.

**Requirements and Scope for a Self-Hosted CAPTCHA Service**
<details style="margin: 10px">
    <summary>
        <span style="display:inline;padding: 20px; font-weight: bold">
        Functional Requirements
        </span>
    </summary>



| Requirement ID | Description |
|----------------|-------------|
| FR-001 | Support text-based CAPTCHA where users identify distorted text or solve a simple question. |
| FR-002 | Support image-based CAPTCHA where users select specific objects or patterns in images (e.g., “Select all the traffic lights”). |
| FR-003 | Provide an audio CAPTCHA alternative for visually impaired users. |
| FR-004 | Implement logical CAPTCHA with simple logical or arithmetic puzzles (e.g., “What is 5 + 3?”). |


</details>

 <details style="margin: 10px">
 <summary>
 <span style="display:inline;padding: 20px; font-weight: bold">
 User Interaction
 </span>
 </summary>

 | Requirement ID | Description |
 |----------------|-------------|
 | FR-005 | Provide options for audio CAPTCHAs and high-contrast visual modes to ensure accessibility. |
 | FR-006 | Support localization for different languages and regions. |
 | FR-007 | Ensure CAPTCHAs are responsive and easy to interact with on mobile devices. |
 | FR-008 | Design CAPTCHAs to minimize disruption to the user experience, such as implementing invisible or behavior-based CAPTCHAs for legitimate users. |

 </details>

<details style="margin: 10px">
<summary>
<span style="display:inline;padding: 20px; font-weight: bold">
Security Features</span>
</summary>

| Requirement ID | Description |
|----------------|-------------|
| FR-009 | Randomize CAPTCHA challenges to prevent replay attacks and ensure unpredictability. |
| FR-010 | Include mechanisms to identify and block bots based on suspicious activity. |
| FR-011 | Bind CAPTCHA challenges to specific user sessions to prevent reuse. |
| FR-012 | Implement thresholds to limit the frequency of CAPTCHA requests from a single IP address. |

</details>

<details style="margin: 10px">
<summary>
<span style="display:inline;padding: 20px; font-weight: bold">
Integration
</span>
</summary>


| Requirement ID | Description |
|----------------|-------------|
| FR-013 | Provide RESTful APIs for easy integration with various platforms and applications. |
| FR-014 | Offer a lightweight JavaScript library for embedding CAPTCHAs on websites. |
| FR-015 | Allow customization of CAPTCHA appearance and difficulty based on application requirements. |

</details>

<details style="margin: 10px">
<summary>
<span style="display:inline;padding: 20px; font-weight: bold">
Management and Monitoring
</span>
</summary>

| Requirement ID | Description |
|----------------|-------------|
| FR-016 | Provide an admin dashboard to manage settings, view analytics, and monitor CAPTCHA usage. |
| FR-017 | Maintain logs of CAPTCHA activity for troubleshooting and security audits. |

</details>

<details style="margin: 10px">
<summary>
<span style="display:inline;padding: 20px; font-weight: bold">
Non-Functional Requirements
</span>
</summary>

| Requirement ID | Description |
|----------------|-------------|
| NFR-001 | Ensure CAPTCHA challenges load within 200ms to minimize user wait times. |
| NFR-002 | Design the service to handle high traffic volumes without degradation in performance. |

</details>


---

### **Context**

{{< mk-img 
    id="Context-diagram"
    light="/images/solutions/self-hosted-captcha/c4/1.context-diagram-Context_diagram_for_Captcha_Service.png" 
    dark="/images/solutions/self-hosted-captcha/c4/1.context-diagram-Context_diagram_for_Captcha_Service-dark.png" 
    alt="Context Diagram for Captcha solution" 
    title="Context Diagram for Captcha solution" 
    class="responsive" 
    style="max-width: 100%;" 
    loading="lazy" 
    width="600" 
    height="400" 
>}}

The captcha system is designed to differentiate the users between the humans and the automated robots.

**Robot** : 
A robot is an automated system that mimicks the behaviour of a human. It has not so good intentions. There are a few assumptions about this robot : 
1. It is an automated script e.g. selenium or other tool
2. It requires specific types of plugins
3. It tries to fill up the form using some acquired information
4. It tries to fill up as many details as possible
5. It doesn't "See" the view the way humans do, instead views it as the html code.
6. The mouse movement and typing speed of a robot is generally consistent

**User** : A human user of the application, who has good intentions. 
1. A user is prone to human errors.
2. A user is less consistent in behaviour.
3. A user is generally slower than a bot.
4. A user views the application from eyes or screen-readers.

**Admin** : A human with advanced authorization to manage and govern how the captcha functionality will behave.

**Client Applications** : Client Applications or User Applications are the human facing applications that are prone to bot attacks. These services contain public information and we want to stop the navigation if a bot tries to access this application.

**Admin Application** : This is a protected application, not accessible to common public. The admin users landup on this portal to manage the configurations for captcha.

**Captcha Service** : This is the main microservice to manage the captcha behaviour.

**Other Services** : Other microservices that may want to utilize captcha creation and validation.

### **Admin app Client Container**

{{< mk-img 
    id="Admin-container-diagram"
    light="/images/solutions/self-hosted-captcha/c4/2.1.container-admin-application-Admin_Client_application_Container.png" 
    dark="/images/solutions/self-hosted-captcha/c4/2.1.container-admin-application-Admin_Client_application_Container-dark.png" 
    alt="Admin Client application Container" 
    title="Admin Client application Container for Captcha solution" 
    class="responsive" 
    style="max-width: 100%;" 
    loading="lazy" 
    width="600" 
    height="400" 
>}}


### **User app client application**

{{< mk-img 
    id="User-App-container-diagram"
    light="/images/solutions/self-hosted-captcha/c4/2.2.container-client-application-User_Client_application_Container.png" 
    dark="/images/solutions/self-hosted-captcha/c4/2.2.container-client-application-User_Client_application_Container-dark.png" 
    alt="User Client application Container" 
    title="User Client application Container for Captcha solution" 
    class="responsive" 
    style="max-width: 100%;" 
    loading="lazy" 
    width="600" 
    height="400" 
>}}

### **Captcha Microservice**


{{< mk-img 
    id="captcha-ms-diagram"
    light="/images/solutions/self-hosted-captcha/c4/2.3.container-captcha-service-Captcha_Service_Container.png" 
    dark="/images/solutions/self-hosted-captcha/c4/2.3.container-captcha-service-Captcha_Service_Container-dark.png" 
    alt="Captcha Microservice Container" 
    title="Captcha Microservice Container" 
    class="responsive" style="max-width: 100%;" loading="lazy" width="600" height="400" 
>}}