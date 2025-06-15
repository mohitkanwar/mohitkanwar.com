---
title: "Designing a Self-Hosted Captcha Service: Challenges, Insights, and Solutions"
date: 2024-11-01T10:31:41+05:30
draft: false
author: "Mohit Kanwar"
tags:
    - captcha
    - self-hosted
    - Bot checks
    - multi-lingual
    - CTO
image: /images/blogs/2024/nov/designing-a-captcha-service/banner.png
description: Explore the journey of designing a self-hosted CAPTCHA service tailored for privacy and accessibility. Discover insights on balancing security and user experience, overcoming challenges, and best practices to keep bots at bay while enhancing UX
toc:
---

**Introduction**: What if the familiar captcha boxes we encounter daily were designed by your team, tailored specifically to your organization’s needs?  
 Recently, I took on the challenge of creating a custom, self-hosted captcha service for a client. It sounded simple at first—why reinvent the wheel when solutions like Google’s reCAPTCHA already exist? But there was a twist: the client wanted full control, aiming to ensure data privacy and integrate accessibility features.

This journey wasn’t straightforward, involving intense debates, surprising technical constraints, and more than a few “Aha!” moments. Here, I’ll walk you through the challenges we faced, the solutions we explored, and the lessons we learned, hoping these insights will be useful for anyone venturing into similar territory.



## Why CAPTCHA?
Before diving in, we asked ourselves, Do we really need CAPTCHA? Our team debated the pros and cons of implementing a captcha solution versus relying on document verification and other bot-prevention measures.

### Against CAPTCHA:

 * **Existing Verification Steps**: We already required document uploads, and bots wouldn’t pass that barrier.
 * **User Experience**: CAPTCHAs often frustrate users, particularly those with disabilities.
 * **Language and Accessibility**: Many captchas assume users are fluent in English and sighted, which isn’t always the case.

### For CAPTCHA:

* **Cost Savings**: Automated verification could reduce the manual effort of validating documents and filtering out the ones uploaded by bots.
* **Scalability**: With future plans for fully automated onboarding, CAPTCHA would become essential.
* **Security Needs**: Preventing credential stuffing and limiting OTP requests could save both costs and data.

*In the end, the decision was almost unanimous*: CAPTCHA was necessary. However, implementing it came with a clear mandate to enhance user experience and accessibility.



### The Quest for Control: Why Self-Hosting?
While many popular CAPTCHA solutions like Google’s reCAPTCHA are effective, they come with drawbacks—data collection, limited customization, and recurring costs. Our client wanted control over every aspect, from branding to data privacy. Here’s a quick rundown of the pros and cons of a SaaS CAPTCHA like Google’s:

Pros:

 * Ready-made and reliable, backed by extensive bot-fighting data.
 * Reduced development time.
 * Minimal setup and a trusted brand.

Cons:

 * Data-sharing with the provider.
 * Limited customization options.
 * Recurring costs that could become significant over time.

Self-hosting promised complete control but demanded more upfront effort. Armed with a list of needs—self-hosted, accessible, and with both obtrusive and non-obtrusive options—we embarked on our custom CAPTCHA journey.



### The Build-or-Buy Dilemma
Initially, we considered a third-party solution like Captcha.com. However, we faced regulatory challenges since it wasn’t on the client’s approved vendor list. Onboarding would have taken more time than developing our solution from scratch! So, with a ticking clock, we decided to go down the self-hosted path, focusing on building something that would meet both security and user experience standards.




### Finding the Right Tools: Evaluating Alternatives
With time running short, we assessed various open-source options:

* <a href="https://simplecaptcha.sourceforge.net/" target="_blank">**SimpleCaptcha**</a>: Java-based, but there were some licensing issues and we could not proceed as per the legal department.
* <a href="https://github.com/logicsquad/nanocaptcha/tree/develop" target="_blank">**NanoCaptcha**</a>: Great piece of work, but missed some of our critical requirements.

We also found some great alternatives, but they were written in tech stack that our team didn't had capability to support.

With each option, we balanced functionality, legal approvals, and technical compatibility with our stack. After much deliberation, we settled on a solution that combined multiple open-source components.



### Overcoming Challenges: Prioritizing, Testing, and Iterating
Here’s where the project took a turn: with tight deadlines, technical constraints, and licensing hurdles, we had to make trade-offs. Here’s a snapshot of our approach:

* **Minimal Viable Product (MVP)**: Starting with the essentials, we rapidly iterated while collecting feedback.
* **Team Expertise Alignment**: We chose familiar frameworks to keep the development curve manageable.
* **Rigorous Security Checks**: Every library had to pass stringent security checks for CISO approval, and each integration was tested for compatibility with our environment.



### Balancing User Experience with Security
The ultimate challenge was balancing security with user convenience. We wanted an experience that felt invisible to genuine users but was a nightmare for bots. Here’s how we approached this:

#### Non-Obtrusive Techniques:

* **Honeypot Fields**: Bots tend to fill all form fields, so we added invisible fields that only bots would touch.
* **Behavioral Analysis**: We tracked interactions like mouse movements and keystrokes to detect automated behavior.
* **Data** : Collecting a lot of meta data, and running analytical algorithms on them helped us capture and identify more details of the users.

#### Obtrusive Methods:

We reserved visual or audio CAPTCHAs only for suspicious cases, reducing friction for legitimate users.
If a user completed a form in milliseconds, it was flagged—bots are fast, humans take a bit longer. But we made sure the obtrusive elements only appeared when non-obtrusive methods weren’t enough.



### Learnings: The Do’s and Don’ts of CAPTCHA Design
Throughout this project, we picked up some invaluable lessons about designing captchas that are both user-friendly and secure:

* **Generate Unique Captchas everytime**: Avoid replay attacks by associating captchas with a single attempt only, be it correct or incorrect attempt.
* **Use a Mix of Text, Audio, and Visual Elements**: Each option has its vulnerabilities, so using a blend is ideal.
* **Accessibility Matters**: Many captchas unintentionally exclude users with disabilities. We minimized small, confusing characters and relied on high-contrast designs, along with options for non-english speakers/ listeners.
* **Obfuscate with Unpredictability**: Randomized text, colors, and fonts help stay a step ahead of AI bots.
* **Leverage Behavioral Biometrics**: Behavioral biometrics, like typing speed or mouse movements, installed plugins,  can enhance security without affecting usability.



### Beyond CAPTCHA: Advanced Security Tactics
Looking forward, we’re exploring behavioral biometrics, which can create a risk profile for each user without disrupting their experience. Device fingerprinting—using a device’s unique attributes to detect bots—is another avenue we’re considering, though it’s still in the early stages.



### CAPTCHA with the Human Element
The irony of CAPTCHA is that, while designed to separate humans from bots, it often frustrates the humans! Designing a solution that’s secure yet seamless is a delicate balancing act. We learned that CAPTCHA should be part of a layered security strategy, one that complements other security measures like multi-factor authentication and rate limiting.

This project taught me that security is a journey, not a destination. Bots may never go away, but we can make their lives a lot harder.

Have you had any CAPTCHA adventures? What solutions or challenges have you encountered? I’d love to hear your thoughts—share your stories, insights, or questions in the comments, and let’s keep the conversation going.
