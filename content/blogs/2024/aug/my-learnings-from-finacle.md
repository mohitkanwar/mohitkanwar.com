---
title: "My Journey with Finacle: Lessons Learned in Banking Software Development"
date: 2024-08-06T09:31:44+05:30
draft: false
author: "Mohit Kanwar"
tags:
    - Finacle
    - FEBA
    - Product Development
    - Infosys
image: /images/blogs/2024/aug/my-learnings-from-finacle/banner.png
description: Explore my journey as a solution architect at Infosys, where I developed the Finacle E-Banking Architecture (FEBA). Discover key lessons in security, performance optimization, user experience design, and automation in banking software development. Learn how modular design and standardization can enhance software solutions in the financial sector.
toc:
---

I consider myself fortunate to have been hired by Infosys right after college, and even luckier to work on a world-class banking product – Finacle. When I joined, Infosys was revamping the channel layer of Finacle, and I was given the incredible opportunity to contribute to this effort from the ground up.

# Key Learnings from Developing Finacle E-Banking Architecture (FEBA)
Working on the Finacle E-Banking Architecture (FEBA) taught me many invaluable lessons. Here are the key takeaways:

1. Security is Paramount
1. Performance is Crucial
1. User Experience Should Reflect Customer Needs
1. Design for Extensibility and Reusability
1. Choose a Widely Adopted Language
1. Standardize and Automate Processes Where Possible

## Security is Paramount

Given that FEBA is a customer-facing product hosted in a publically accessible environment, security was our number one priority. We underwent extensive training on secure software development.
Security concerns were a major focus during peer reviews and quality assurance.

I was actively involved in developing the authentication and authorization frameworks, as well as obtaining security certifications for FEBA.

Here are some challenges we faced:

**Improper Encryption**: A variable name was hardcoded post-encryption, revealing an anti-pattern known as "security by obscurity."

**Public Internal Information**: Developers often left comments in the code that exposed sensitive information such as ticket IDs and developer emails, posing significant risks.

**User Information Exposure**: We had a requirement to block users after three incorrect password attempts. However, our approach inadvertently allowed hackers to brute force valid usernames through misleading error messages.


## Performance is Crucial
With millions of users globally, performance was critical. We meticulously reviewed our code and adhered to best practices for performance optimization, such as:

* Minimizing nested loops
* Utilizing efficient data structures
* Caching frequently accessed data
* Minimizing data transfer over network
* Normalized vs Flat tables considerations


## User Experience Should Reflect Customer Needs
Initially, I found it counterintuitive that we were discouraged from creating visually appealing user interfaces. However, I soon realized that our product needed to accommodate various banks' branding and user experience guidelines.

Instead of developing beautiful interfaces, we focused on providing flexibility through multiple service approaches. We ensured that our APIs were configurable, well-documented, and offered clear error messages with potential solutions.
Beautiful interfaces were added later during customization phases.

## Design for Extensibility and Reusability
The modular structure of our code was essential. Each component was designed to be replaceable without affecting others. We emphasized configuration over hardcoding, allowing for easy adjustments based on specific client requirements.

## Choose a Widely Adopted Language
Our clients preferred various technologies, so we opted for XML as a documentation language. Its simplicity made it accessible for both developers and non-developers. After implementing the product in XML, we utilized automated tools to convert it into Java or .NET, making our code language-agnostic.

## Standardize Processes Where Possible
Infosys is synonymous with standardization, which was evident throughout our work environment. This standardization extended to documentation formats, coding styles, and bug tracking, fostering familiarity and efficiency.

One of my colleagues even automated the generation of code from requirement specifications, illustrating the potential for efficiency through structured thinking. Imagine the possibilities if we combined such structured thinking with today's AI advancements!
## Automate Repetitive Tasks
We embraced automation to reduce human error dramatically. From build and testing processes to documentation and analytics, we automated as much as possible, resulting in smoother releases and enhanced product reliability.