---
title: "Pins and Passwords"
date: 2025-07-01T09:11:20+05:30
draft: false
author: "Mohit Kanwar"
tags:
image: /images/blogs/2025/jul/pins-and-passwords/banner.png
description:
toc:
---

# Introduction

How many of us have stared blankly at a login screen, desperately trying to recall that complex password? It’s a frustratingly common experience, and a surprisingly significant hurdle in securing mobile applications. During my architecture design consulting sessions, I come across this situation multiple times – and I love to build authentication systems that don’t sacrifice user experience for security.

My journey into this space began over a decade ago, designing and implementing software solutions for some of the largest banks across the globe. During that time, I witnessed firsthand the critical balance between robust security measures and the ease with which users can interact with their financial data. I realized that overly complicated authentication processes often lead to user frustration, abandonment, and ultimately, a weakened security posture – users are more likely to opt for simpler, less secure methods to avoid the hassle.

This experience shaped my focus at one of the customer's solution: to create innovative authentication frameworks that prioritize both security and a seamless user experience. I believe that strong authentication shouldn’t feel like a chore; it should be intuitive, reliable, and contribute to a positive overall app experience. I try to provide solutions that meet the demanding security requirements of modern applications, while remaining user-friendly and accessible.


# Password Authentication – The Server-Side Approach

Inspite of the introduction of passwordless techniques, Password based authentication remains the most common authentication mechanism for software applications, and industry trends strongly suggest this will continue to be the case for the foreseeable future. It’s a well-established and understood process, providing a baseline level of security when implemented correctly. However, it’s crucial to recognize the inherent vulnerabilities and proactively address them.

## What is Password Authentication?

Password authentication is the process of verifying a user’s identity based on a secret string of characters – their password. This process typically involves the user entering their password into the application, which is then transmitted to the server for comparison against a stored hash.

![Password Authentication](/images/blogs/2025/jul/pins-and-passwords/password-validation-Password_based_authentication.png)

Storing passwords in plain text is an unacceptable security risk. Instead, passwords are ‘hashed’ – transformed into an irreversible string of characters. This hashing process significantly reduces the risk of compromise if the database is breached. Crucially, a ‘salt’ – a random string of characters – is added to the password before hashing. The salt is unique to each user and further protects against attacks where attackers can use pre-computed hash tables (rainbow tables).


Beyond hashing and salting, several best practices are vital:

**Password Complexity**: Enforcing minimum password length, requiring a mix of uppercase and lowercase letters, numbers, and symbols, significantly improves security.

**Rate Limiting**: Implementing rate limiting restricts the number of login attempts within a specific timeframe. This mitigates brute-force attacks.
Problems Associated with Passwords

Despite these best practices, password-based authentication faces significant challenges:

**Network Transmission – *Man-in-the-Middle Attacks***: Passwords are inherently vulnerable when transmitted over the network. A malicious actor can intercept the password during transmission, leading to a "man-in-the-middle" attack, where they gain unauthorized access.

**Database Exposures – *Leaked Passwords***: If a database is compromised, sensitive passwords can be exposed, allowing attackers to gain access to user accounts.

**Shared Passwords – *Cross-Device Attacks***: Users often reuse passwords across multiple services. This creates a single point of failure; if an attacker gains access to one password, they can potentially access accounts on other software services using the same password.


## PIN Authentication – A Simpler Client-Side Solution

PIN authentication offers a significantly simpler and potentially more secure alternative to traditional password-based authentication, particularly in mobile applications. Essentially, it involves users entering a numeric code – their PIN – to verify their identity. This approach leverages client-side cryptographic processes, minimizing the exposure of sensitive data.

![Pin authentication ](/images/blogs/2025/jul/pins-and-passwords/pin-validation-Pin_based_authentication.png)

### How PINs are Generated & Stored (Client-Side Token Generation)

PIN authentication relies on generating a unique cryptographic token directly on the user’s device. This process begins with a securely generated KeyPair. This Keypair comprises of a private and a public key. The private key is secured and tightly bound with the mobile device. The security is such that even the software developers creating the app cannot extract the private key directly. There are wrappers apis available using which the app developers use private key to create signatures.
The public key, which is tightly coupled with the private key can be shared safely over the network and sent to users. Since public key alone cannot be used to authenticate the user, sending it to the server is a safe process.
Then this keypair is associated with a PIN, which is a numeric code that the user can easily remember. The PIN is not stored in plain text; instead, it is used to derive a cryptographic key through a secure hashing function. This derived key is then used to create a signature that is a one time but unique identifier of the device.

 Critically, this entire process occurs on the device, ensuring that the actual PIN never leaves the user’s control. Theobject that is transmitted to the server is a cryptographic signature, not the PIN itself. This signature is generated using the private key and the PIN, creating a unique token that can be verified by the server.

 The server by the onus of public key, can verify the signature without ever needing to know the PIN. This means that even if an attacker intercepts the communication, they cannot gain access to the PIN or the private key.

### The Cryptographic Process of Passwordless Architecture

This approach embodies the core principles of a passwordless architecture. The PIN alone cannot grant the access to application. The pin must be used on the specific device for the access to be granted. The security stems from the complexity of the cryptographic function and the unique random number used to generate it. The process creates a mathematically secure link between the user's device and the application.

### Tightly Coupled with a Device - “What you have + What you know”

PIN authentication inherently creates a “what you have” security layer. Because the PIN is generated and stored solely on the user's device – a smartphone or tablet – it’s inextricably linked to that specific device. This creates a strong security posture, adding to the “what you have” component alongside the "What you know" component.

### Improved Security – No Network Transmission

A key advantage of PIN authentication is that the PIN itself is never transmitted over the network. This dramatically reduces the surface area of attack. Even if an attacker intercepts the communication, they cannot access the PIN or the private key. The PIN is used to generate a cryptographic signature, which is then sent to the server for verification. This means that even if an attacker gains access to the server, they cannot retrieve the PIN or compromise the user’s account.

From attacker's perspective, a mass scale attack on a system  is almost impossible. Because now to attack the system, the attacker needs to have access to all the devices where the PIN is stored. This means that even if an attacker manages to access a device and corresponding PIN, and in effect compromise a user account, they would still not be able to compromise the entire system. The attacker would need to compromise each device individually, which is a significantly more challenging task.

### Pin Reusability and Security

While the PIN can be reused, the underlying security relies on a carefully managed system. A private key is tightly coupled with the app and device. This key is not reusable. So in effect, the pin, the app and the device are bind together. Even if one component is missing, the authentication fails.

### Memorable PINs - A Key Advantage

Furthermore, because the PIN is stored locally and doesn’t require users to memorize complex passwords, it’s inherently more memorable. This contrasts sharply with traditional password systems, where users often struggle to remember and correctly type long, complex passwords. The simplicity of a numeric PIN significantly reduces the cognitive load and improves the overall user experience, making it easier and more convenient for users to authenticate.

## The Pitfalls of Server-Side PIN Storage
A common and incredibly dangerous pitfall is storing PINs just like passwords – on the server. This approach inherits all the vulnerabilities associated with passwords: increased susceptibility to man-in-the-middle attacks and, crucially, heightened risk of brute-force attacks. Because PINs are typically shorter, they’re far more vulnerable when stored on the server. Furthermore, passwords’ complexity provides resistance to brute-forcing, while PINs offer substantially less resistance. This approach must never be adopted. Prioritizing client-side PIN generation and storage alongside device-level authentication is paramount for robust security.

## Choosing the Right Approach

Selecting the appropriate authentication method requires careful consideration of several key factors. Ultimately, the “best” approach depends on balancing security needs with user experience and regulatory compliance.

### Factors to Consider:

Security Requirements: High-security environments, such as financial institutions or government applications, demand robust security, potentially favoring biometric authentication or multi-factor authentication combining PINs with other methods. Lower-risk applications may be adequately secured by a well-implemented PIN system.
User Experience: PIN authentication typically offers a smoother and more intuitive user experience than complex password systems. It’s well-suited for applications where ease of use is paramount.
Regulatory Compliance: Certain industries (e.g., HIPAA, PCI DSS) may dictate specific authentication requirements, influencing the choice of method.

### When to Use Which:

**PIN Authentication**: Ideal for applications requiring moderate security and a seamless user experience, such as mobile banking apps, e-commerce platforms, and social media logins.
**Biometric Authentication**: Recommended for high-security applications demanding the highest level of protection, like accessing sensitive financial data or government systems.
**Multi-Factor Authentication**: Best suited for environments with stringent regulatory requirements or exceptionally valuable assets.

| Feature             | Password                               | PIN                                   |
|----------------------|-----------------------------------------|---------------------------------------|
| **Memorability**     | Often difficult to remember, leading to weak passwords or reliance on password managers. | Typically easier to remember, particularly for numeric users. |
| **Length**           | Typically long (8+ characters)             | Short (typically 4-6 digits)          |
| **Character Set**    | Supports a wide range of characters (uppercase, lowercase, numbers, symbols). | Generally limited to numeric characters only.     |
| **Attack Surface**    | Larger – device, network, server, database      | Smaller – device only|
| **User Experience** | Can be cumbersome for users.             | Simple and intuitive.                |
| **Storage**          | Stored on server side             | Stored on device            |
| **Phishing Vulnerability**| High – susceptible to being tricked into entering password on fake website. | Lower – even if PIN is leaked, it is not usable for attacker unless the attacker has access to the device as well.|
| **Ease of Automation**| Easier to automate              | difficult to automate       |
| **Non device Usage**          | Passwords can be used even when no device is bound to the users e.g. on browsers or when user switches the device     | Since the pins are bound to device, they cannot be used on browser based applications or the user is forced to reset the pin when device is changed     |



In conclusion, Passwords are best fit when there is no device associated with the user. They are versatile and can be used on browser based applications. PIN authentication presents a compelling alternative to traditional password-based systems, offering a simplified user experience while maintaining a robust security posture, particularly when coupled with client-side devices. We’ve seen that PINs provide a significant advantage in terms of memorability, ease of use, and reduced attack surface compared to complex passwords. However, it’s crucial to recognize that no single authentication method provides absolute security. 

I’d be pleased to discuss PIN authentication in more detail or explore potential applications. If you’re interested in a brief consultation or simply want to share your thoughts, please don’t hesitate to contact me at [LinkedIn](https://www.linkedin.com/in/mohit-kanwar-7668a211/). I’m available for a discussion and would welcome the opportunity to connect.”