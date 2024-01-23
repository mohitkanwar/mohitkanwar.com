---
title: "Cost of developing a software"
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
image: /images/blogs/cost-of-software/header.png
description: "Discover the costs of developing free software, beyond monetary investments. Explore freemium models, user data value, and benefits of contributing to free software."
toc: 
---


## Trigger for this blog
I was pair programming during an interview, where the candidate had shared his screen and I was working side by side with him, trying to understand the solution he was presenting.

Picture this: his computer screen flashed a message about his Windows license being expired. I couldn't help but ask, and what I heard surprised me. He proudly admitted to using a "not-so-legal" version of Windows because he wanted to stick it to Microsoft for their high prices, especially when there's a free alternative like Ubuntu available.
I did not take a screenshot, but it looked something like this   
<img src="/images/blogs/cost-of-software/windows.png" alt="windows license message" class="responsive-image">

While I didn't quite agree with his rebel approach, it got me thinking about the world of free software. We often don't realize that even though it's "free" for us to use, it still costs a lot to make and maintain.

Behind the scenes, there's a whole lot of work and money that goes into making software. Skilled folks spend hours building it, and there's ongoing work to fix bugs, make updates, and help users when things go wrong.

Then there's the tech stuff—servers, cloud services, and all the gear needed to keep the software running smoothly. That stuff costs money too, even if the software itself doesn't.

Let's not forget the unsung heroes—the folks who volunteer their time and skills to improve these programs. Their work is priceless, even though it often goes unnoticed.

And there's more—legal things like licenses, making sure everything's legit, and following the rules. That's another part of the cost.

## Different types of costs involved
The cost of software development can be categorized into following phases :
1. Before Development: Laying the Foundation
1. During development
1. Execution costs
1. Maintenance costs

### Before development
It's not like a person wakes up on a day, and starts writing code.Before any coding begins, there's a lot of groundwork to be done. A lot of thinking goes before deciding if we need a software or not. We need to understand if desinging a new software solution will be cost effective and worth all the efforts put in. Let's take a closer look at the different phases and the expenses that come along.  Here are a few of important steps:

#### Research and feasibility studies

Research and feasibility studies play a vital role in software development by conducting market analysis and assessing the viability and potential return on investment of a project. Through thorough research, organizations can identify the target audience, understand market trends, and evaluate the demand for the proposed software solution. Cost-benefit analysis helps estimate development and maintenance costs, while assessing potential revenue streams and cost savings. Evaluating technical feasibility ensures that the project aligns with available resources and technology. Additionally, considering legal and regulatory requirements ensures compliance and mitigates risks. By conducting these studies, organizations can make informed decisions about the viability and potential success of a software project.


<img src="/images/blogs/cost-of-software/business-research.png" alt="Image" alt="Business research is the most important activity for any software development process to begin" class="responsive-image-bounded">


#### Business Analysis

Business analysts observe the operations and existing processes, and understand if a software is going to help. Business Analysts define the business use cases for and against having a software system automating the existing processes.
They define the scope of software solution.


#### UX designs
To save money, UX designers start by creating simple wireframe designs. These are like rough sketches that show how the final software will look and function. Stakeholders can experiment with these wireframes, making sure they meet their needs. Once everyone is happy, more detailed designs are created to give a realistic feel for the final software.

#### Solutions and Alternates


<img src="/images/blogs/cost-of-software/solutions-and-alternates.png" alt="Image" alt="Designing a solution to the problems is one of the most important aspect for maintainability" class="responsive-image-bounded">


After the UX designs are approved, a solution architect steps in. They analyze different options and compare costs, efforts, and how well each solution fits the project. The architect decides on the technologies, frameworks, and quality standards to be used, setting the stage for development.

#### Platform
Developers need a platform to work on, a place to store their code, test it, and build the final software. This platform also manages access and collaboration among team members. The DevOps team takes care of setting up this platform, making sure everything runs smoothly.

#### Tools and Technologies
The different steps mentioned earlier require licenses for different tools to create and store decisions.
e.g. Figma for storing UX designs, Confluence for storing scope and documents and many more tools. Don't forget the hardware (or cloud) costs for developing the platform. Operating systems, CICD pipelines setup, and other licenses have to be acquired at this stage.
 
### During development

#### Software Engineering
Obviously, we need software engineers to build a software. Frontend engineers who develop user facing applications (Mobile / Web or other channels), Backend engineers, the work is not directly visible, but they prepare all the required information for frontend applications by creating the APIs to be consumed. The data engineers refine and improve the data that is consumed within the application.

#### Quality assurance
QAs prevent any mishaps to happen once the software is released. They check and validate the quality of the software to check if it meets the requirements.
Different types of quality checks include : Functional testing, unit testing, integration testing, performance testing, acceptance testing, security testing etc.

#### Project Management
When there are so many different people working together we need a team to manage all the people and the product being developed. There are different roles e.g. product owners, Project Managers (or Scrum masters depending upon the way of working) to manage all the people.

#### Tools and technologies
Similar to previous phase, many tools are required in the development phase that also incurr the costs. The IDEs for software enginners, Jira to keep a track for the issues, communication tools e.g. MS Teams for the team to communicate with each other.
### After development
#### Version Updates
Regular maintenance is crucial for software even after its development phase. The continuous discovery of new vulnerabilities in software necessitates the need for regular updates. By updating dependencies, we can effectively mitigate the potential risks posed by these newly discovered issues in the code. Thus, maintaining and updating the software ensures its security and stability in the face of evolving threats.

#### Feature enhancement
As we begin utilizing the software, it is common to identify the need for new features or modifications to existing ones. In such cases, redevelopment becomes necessary to incorporate these changes effectively. Whether it involves adding new functionalities or altering existing ones, the redevelopment process ensures that the software aligns with evolving requirements and user expectations. By undertaking these redevelopment efforts, we can enhance the software's capabilities, improve user experience, and keep up with the dynamic nature of the business environment.

#### Platform
To successfully run any web-based software, it is essential to maintain a comprehensive platform. This platform encompasses all the necessary components and infrastructure required for the software to function optimally. Some key aspects of maintaining a full-fledged platform include:

1. **Hardware and Networking**: Adequate hardware resources, such as servers, storage, and networking equipment, need to be provisioned and maintained to support the software's operations. This involves ensuring proper hardware configuration, capacity planning, and monitoring to handle the software's workload efficiently.

2. **Operating System and Software Dependencies**: The platform must have a stable and up-to-date operating system that is compatible with the software. Additionally, any required software dependencies, such as libraries, frameworks, or runtime environments, should be installed, configured, and regularly updated to ensure compatibility and security.

3. **Database Management**: If the software relies on a database, it is crucial to maintain the database platform. This includes database installation, configuration, performance optimization, backup and recovery procedures, and ongoing monitoring to ensure data integrity and availability.

4. **Security Measures**: The platform should implement robust security measures to protect the software and its data. This involves implementing firewalls, intrusion detection systems, access controls, encryption, and regular security updates to mitigate potential vulnerabilities and safeguard against unauthorized access or data breaches.

5. **Monitoring and Logging**: Continuous monitoring of the platform is essential to identify and address any performance issues, errors, or anomalies. Logging mechanisms should be in place to capture relevant system and application logs for troubleshooting and auditing purposes.

6. **Scalability and High Availability**: The platform should be designed to handle the software's scalability requirements, allowing it to accommodate growing user bases and increasing workloads. Implementing redundancy, load balancing, and failover mechanisms ensures high availability and minimizes downtime.

7. **Backup and Disaster Recovery**: Regular backups of the software and its associated data should be performed to protect against data loss or system failures. A well-defined disaster recovery plan should be in place to ensure the software can be quickly restored in the event of a catastrophic failure.

By maintaining a full-fledged platform, organizations can ensure the smooth and reliable operation of their web-based software, providing users with a stable and secure experience.

## Why Free and open source software
Organizations often face a fascinating dilemma: why offer free software when there are costs involved? Take Ubuntu, Google, Hotmail, or even tools like ChatGPT, Google Bard, and Microsoft Copilot as examples. The reasons behind this seemingly counterintuitive approach are captivating.

By offering free software, organizations can penetrate the market and capture a vast user base. This serves as a foundation for future conversions to paid versions or enticing users with premium features. Additionally, organizations embrace open-source software to foster collaboration and innovation within the community. They invite developers from all walks of life to contribute their expertise, resulting in continuous improvement and wider adoption.

Free software also serves as a gateway to valuable user data. Organizations gather insights into user behavior, preferences, and trends, fueling product refinement, targeted advertising, and the development of new offerings. While the software itself may be free, organizations find alternative revenue streams. They introduce premium versions, complementary products, or clever advertising models to monetize their offerings.

Providing something valuable for free creates a bond between organizations and users. By offering tools or services at no cost, organizations establish themselves as industry leaders, building trust and loyalty among users who appreciate the value they receive. This sets organizations apart from the crowd, giving them a competitive edge and positioning them as trailblazers within their respective industries.

Despite the costs related to development, maintenance, infrastructure, and support, organizations navigate this complex landscape and find innovative ways to sustain their business in the long run. The provision of free software not only benefits users but also allows organizations to thrive and make a significant impact in the digital world.

When it comes to social media platforms, the puzzle of why they are offered for free becomes clearer when considering several key factors. Advertising revenue plays a significant role, as platforms generate income by providing targeted advertising opportunities to reach a broad audience. User data collection is another crucial aspect, as platforms gather vast amounts of data to understand their audience better and deliver personalized advertising experiences.

Many social media platforms also offer additional services and features tailored for businesses, which often come with paid options. These services, along with partnerships with businesses, contribute to the revenue generation of social media platforms. Some platforms employ freemium models, offering a basic set of features for free while charging for premium or advanced features. Additionally, in-app purchases or virtual goods within games or applications hosted on social media platforms generate revenue through a percentage of these transactions.

It's important to note that although social media platforms are free for users, they are not without costs. Users indirectly "pay" for the service by providing their personal data, which is used for targeted advertising. The availability of free social media platforms allows for widespread adoption, user engagement, and network effects, which, in turn, attract advertisers and drive revenue.

In conclusion, there are many costs involved to develop and maintain a software, however many organizations give free and open source software because there are benefits to them.
This does not mean that developing software is easy and we should not belittle the software developers, just because some free alternatives are available. 



