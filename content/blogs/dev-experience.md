---
title: "Dev Experience"
date: 2024-02-03T09:16:30+05:30
draft: false
author: "Mohit Kanwar"
tags: 
    - Developer Experience
    - Collaboration
    - Quality
image: /images/blogs/dev-experience/banner.png
description: Improving experience of software developers leads to improved quality of the software products. In this blog, we discuss how can we improve the experience of our software developers.
toc:
---

I recently came across [this article](https://github.blog/2024-01-24-how-githubs-developer-experience-team-improved-innerloop-development/) on the GitHub blog that discusses how GitHub's Developer Experience (DX) team improved innerloop development. 
While reading the article I was reminded of this quote

> Clients do not come first. Employees come first. If you take care of your employees, they will take care of the clients.</p>
> — <cite>Richard Branson[^1]</cite>

And as a leader of a development team, I was made to think what am I doing for better experience of my developers, and what can be done better.


## Tools
Having right set of tools is very important to deliver a quality software. This includes hardware, software and other tools to analyze and improve the different processes.

#### Hardware Tools

A few years back I encountered a situation where I was working with a software system that required around 12 GB of RAM. The architecture of the system necessitated starting multiple basic microservices to work on even a single business functionality.

My laptop had 16 GB of RAM, but when I started up this software system along with the IDE, Outlook, MS Teams, and a browser, my laptop started to heat up and responded very slowly. It's worth mentioning that these were not the only software applications running on my machine.

While my European counterparts didn't face this problem as their machines had 32 GB of RAM, finding such a machine in India was quite expensive and required numerous approvals.

Interestingly, when we were setting up the same system for our banking customers in Africa, we highlighted the productivity risk associated with their developers using machines provided by the bank, which had 8 GB of RAM for security purposes.

The banking IT team came up with an innovative solution by providing cloud environments with 32 GB RAM machines for individual developers. This allowed our development work to proceed smoothly without any issues.

However, for our Indian team members working on an internal project with cost limitations, this solution wasn't feasible. Despite having a small team, we couldn't convince our investors to provide a cloud environment.

We managed to convince our investors to acquire one additional machine with 16 GB of RAM. Since we were already working in a microservices environment, we, the development team, made necessary changes in the architecture and established conventions for each individual to work without interrupting each other and set up the common services on the extra machine, treating it as a server.

By moving the platform services to the extra machine, we were able to free up some RAM on the development machines and significantly improve our productivity. It was fascinating to see how the same problem was solved in different styles under different circumstances.

In addition to having the right laptop with sufficient processing power, RAM, and a good amount of hard disk space, it is essential to ensure that servers and cloud infrastructure are efficient for the project. This ensures smooth development and optimal performance.

Investing in the right hardware tools is crucial for developers to work efficiently and deliver high-quality software. It not only improves productivity but also enhances the overall development experience.

#### Software Tools

In addition to the hardware tools mentioned earlier, having the right software tools is equally important for writing better software and improving our development environment. These tools not only enhance productivity but also provide essential functionalities to streamline workflows and collaborate effectively within a team. Here are some key software tools that play a crucial role in software development:

##### Integrated Development Environment (IDE)
Using the right IDE is essential as it provides a comprehensive set of features and tools that simplify coding, debugging, and testing. A good IDE eliminates the need to worry about managing the basics and provides a seamless development experience. Many of these IDEs also offer some plugins to enhance experience. If required, these plugins must be utilized.

##### Version Control System (VCS)
A version control system is indispensable for managing source code and collaborating with a team. It helps track changes, manage history, and enables easier rollback to previous versions if needed. By using a VCS, developers can avoid the risk of losing their work and maintain a well-organized codebase.

##### Communication Tools
Effective communication is vital for successful collaboration within a development team. Utilizing the right communication tools, such as Slack, Microsoft Teams, or other team messaging platforms, enhances real-time communication, facilitates quick decision-making, and fosters a sense of teamwork.

##### Generative AI Tools
Generative AI tools have become increasingly popular in the software development field. These tools provide advanced capabilities, such as information safety, code generation, and intelligent suggestions. For example, tools like OpenAI's GPT-3 can assist developers in learning new topics faster by providing relevant information, while tools like GitHub Copilot can help write efficient and standardized code by generating code snippets and suggestions.

##### Task Management Tools
Task management tools like Jira help teams manage their work, plan sprints, and track progress. These tools enable efficient project management, facilitate collaboration, and provide insights into potential bottlenecks or blockers. Additionally, tools like Confluence or SharePoint are valuable for managing knowledge and documentation, which is particularly useful in long-running software projects where team members may change over time.

##### MS Office Tools
Microsoft Office tools, particularly Excel, are powerful for analyzing and understanding data quickly. Excel's functionalities, such as data manipulation, calculations, and visualization, make it an indispensable tool for various tasks, including data analysis and reporting. Additionally, tools like PowerPoint and Canva help in presenting ideas effectively, allowing developers to communicate their thoughts and project progress in a visually appealing manner.

By leveraging the right software tools, developers can enhance their productivity, streamline workflows, and improve collaboration within their teams. These tools not only simplify tasks but also enable developers to focus on writing high-quality code and delivering successful software projects.

## Standards

Standards play a crucial role in improving processes and ensuring standard deliveries in various aspects of work. They provide guidelines, clarity, and consistency, making it easier for individuals and teams to understand what needs to be done and how to achieve it. Let's explore some key areas where standards are important:

#### Process Standards
Adopting the principle of "Don't make me think" can greatly improve processes. By simplifying and streamlining workflows, teams can reduce cognitive load and make tasks more intuitive and efficient. Defined processes and ways of working help establish a clear framework for individuals to understand their roles, responsibilities, and the steps involved in completing a task. This clarity promotes productivity and reduces ambiguity.

Additionally, having comprehensive training documents and videos ensures that new team members can quickly get up to speed. These resources provide a standardized way of onboarding and enable individuals to learn the necessary skills and processes efficiently.

#### Technology Standards
Technology standards define the preferred technologies and tools to be used within an organization or project. These standards help maintain consistency, interoperability, and compatibility across different systems and components. They also outline quality standards and guidelines for ensuring the reliability, security, and performance of software applications.

Furthermore, technology standards may include processes for version upgrades, ensuring that software stays up to date with the latest features, security patches, and bug fixes. This helps in maintaining a stable and secure software environment.

#### Coding Standards
Coding standards encompass various aspects of software development, including naming conventions, architectural principles, API standards, and documentation practices. Adhering to coding standards ensures that code is readable, maintainable, and consistent across the codebase. It promotes collaboration and makes it easier for developers to understand and work with each other's code.

Consistent documentation practices, such as using standardized templates, help in creating clear and structured documentation. Ready-to-use document templates for release notes, user guides, and other purposes save time and ensure that documentation follows a consistent format and style.

By following coding standards and using standardized documentation templates, teams can improve code quality, reduce errors, and enhance the overall development process.

## Culture
The culture of a team is a critical aspect for individuals to feel a sense of belonging and thrive in their work environment. A strong and positive team culture fosters collaboration, learning, innovation, and ultimately contributes to the success of the team. Let's explore some key elements that make up a healthy team culture:


#### Accommodative Culture
An accommodative team culture is one that embraces diversity, respects individual differences, and creates an inclusive environment. It encourages open-mindedness and values the unique perspectives and contributions of each team member. By fostering an accommodative culture, teams can leverage the diverse skills, experiences, and ideas of their members, leading to more creative and effective problem-solving.

#### Learning and Innovation
A team culture that promotes continuous learning and innovation is crucial in today's fast-paced and ever-evolving work environment. Encouraging a growth mindset, providing opportunities for skill development, and supporting experimentation and risk-taking can drive innovation within the team. When individuals feel empowered to learn, explore new ideas, and take calculated risks, it creates an environment that nurtures creativity and fosters innovation.

#### Guidance and Mentorship for Newcomers
Welcoming and supporting newcomers is essential for building a strong team culture. Providing guidance, mentorship, and a supportive environment for new team members helps them integrate quickly, understand team dynamics, and contribute effectively. When new members receive sufficient support and guidance, they can quickly adapt to the team's culture, raise their performance, and bring fresh perspectives to the table.

#### Minimizing Ego Clashes and Promoting Healthy Relationships
A healthy team culture minimizes ego clashes and encourages positive relationships among team members. It fosters an environment where individuals can express their opinions, engage in constructive discussions, and resolve conflicts amicably. Respecting different viewpoints and focusing on finding common ground helps build trust, collaboration, and strong working relationships within the team.

#### Work-Life Balance
Promoting a healthy work-life balance is crucial for the well-being of team members. A team culture that values work-life balance recognizes the importance of personal time, promotes self-care, and encourages individuals to maintain a healthy balance between work and personal life. This not only supports the overall well-being of team members but also enhances their productivity, creativity, and job satisfaction.

#### Question Culture
A question culture is vital for fostering a learning environment and driving continuous improvement. Encouraging individuals to ask questions, seek clarification, and challenge assumptions promotes critical thinking and knowledge-sharing within the team. In a question culture, individuals feel comfortable seeking help, sharing their ideas, and engaging in meaningful discussions, which ultimately leads to better decision-making and problem-solving.



[^1]:  [Richard Branson: Put Your Staff 1st, Customers 2nd, & Shareholders 3rd | Inc. Magazine](https://www.youtube.com/watch?v=NPiCYoX-S_I) 