---
title: "Configuration Management Microservice"
date: 2024-03-11T09:34:39+05:30
draft: false
author: "Mohit Kanwar"
tags:
    - configuration management
    - microservice
    - code
    - environment configurations

image: /images/blogs/2024/mar/configuration-management-microservices/banner.png
description: As the microservices environment grows, managing the configurations across becomes difficult. Let's work towards a sample application that serves configurations.
toc:
---

Configuration management is a crucial yet often overlooked aspect of working with microservices. In a microservices environment, managing various configurations, including those related to client applications, business processes, and technical settings, can become complex. This complexity is further amplified when dealing with multiple environments such as development, QA, and production, each requiring different configurations.

While organizations typically maintain version control for their codebase, the versioning of configurations is sometimes neglected. In this article, we will explore how we can create a configuration management microservice using Spring Cloud Config, a powerful solution provided by the Spring framework. We will specifically focus on its applicability in the FinTech industry.


## The Use Case
Our configuration service should serve as a centralized hub for managing business configuration changes, encompassing server-side and client-side configurations across different environments. The key requirements for our configuration management microservice are as follows:

1. Support for server-side and client-side configurations.
1. Flexibility to handle configurations for different environments (e.g., development, testing, production).
1. Easy and consistent configuration changes that are eventually consistent.
1. Efficient retrieval of configurations to ensure quick response times.

To meet these requirements, we will explore the capabilities of Spring Cloud Config and its practical implementation in a FinTech context.

## Getting Started with Spring Cloud Config
To demonstrate the power of Spring Cloud Config, I have created a GitHub repository that contains various configuration examples. You can find the codebase at [https://github.com/mohitkanwar/spring-cloud-tutorial](https://github.com/mohitkanwar/spring-cloud-tutorial/tree/remote-config) (specifically the remote-config branch). This repository includes multiple services, but we will primarily focus on the config service for the purpose of this article.


1. Create a git repo to store configurations
1. Start Config Server
1. Create configurations on clients
1. Create a microservice that consumes configurations

### Step 1: Create a Git Repository for Configurations
To achieve versioning and track changes effectively, we will utilize Git as the version management system for our configurations. Start by creating a Git repository that will store all your configurations. You can organize the repository using branches to represent different environments. For example, you can have separate branches for development, testing, and production configurations. For example, refer to the git repo at [https://github.com/mohitkanwar/config-server-git-repo](config-server-git-repo). This is a different git repository.
Our running microservice will be consuming data (the configurations) from this repository.

Consider the following example folder structure for your repository:

```txt
repo
  ├── apps
  │   └── modules
  │       ├── login.json
  │       ├── dashboard.json
  │       └── transaction.json
  └── application.yml
  └── hello-world.yml
```
In the above example structure, I have ```application.yml``` That contains the global configurations.
We can define more files e.g. I have created a file called ```hello-world.yml``` for my microservice called ```hello-world```.
Although, not mandatory, it is easier if we follow a naming convention for the files that allows us to remember and find the right configurations.

For other client specific configurations, we can define a custom path as well, e.g. ```/apps/modules/login.json``` contains configurations for login module.

As you have observed, we can have any format for defining configurations, but the popular ones are : 
- .properties
- .yml
- .json
- .xml
- .toml

Once the structure is defined, we need to create the different branches catering to different environments.
Each branch (e.g., dev, uat, prod) can contain configurations specific to that environment. This structure allows you to manage configurations efficiently across various environments.


### Step 2: Create a Server for Reading Configurations
Next, we need to create a microservice that acts as the configuration server. 
An example service ```hello-world``` is available in the code.

This service was created by creating a new microservice using Spring Initializr. Following dependency was added to this project's pom.xml file:

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
```

To enable the microservice as a configuration server, annotate your main application class with the following annotation
```java
@EnableConfigServer
```
This annotation, along with the added dependency, configures the microservice as a Spring Cloud Config server.

Now, we need to tell this microservice to read the configurations from a remote location instead

```yml
spring:
  cloud:
    config:
      uri: http://localhost:8888
      name: hello-world
      label: prod
server:
  port: 8888
```
```spring.cloud.config.uri``` defines the location of our configuration microservice.
```spring.cloud.config.name``` defines the file from which the configuration needs to be picked up. It is not required to provide the extension.
```spring.cloud.config.label``` defines the branch for which the configurations need to be picked up.

This configuration establishes the connection between the config server and the Git repository. You can customize the port according to your preference.

To start the server, run the following command:
```bash
mvn spring-boot:start
```
**Experiments**
Consume the configurations like we used to consume them earlier : e.g. 
```java 
  @Value("${hello.world.name:hardcoded}")
  private String name;
```
Try changing the values label for different environments, the microservice will be able to pick up the specific properties.

### Step 3: Consuming Configurations in Client Applications
Client applications can consume configurations from the config server by making HTTP requests to the server's endpoint. The URL pattern for accessing configurations is as follows:


```bash
http(s)://<servername or ipaddress>:<port>/<config-server-name>/<profileName>/<label>/<path>
```
For example, to fetch the config.json file for the dashboard module, you can use the following command:



```bash
curl --location 'http://localhost:8888/config-server/main/prod/modules/dashboard/config.json'
```
The url can be configured in the client applications to manage the releases.

## More Steps
There is more to configurations than has been explained in this blog. You may like to explore
- how to cache configurations on microservices for better performance.
- Adding validations while committing the config files, so that incorrect configurations cannot be committed.

Conclusion
In this blog post, we explored the importance of configuration management in a microservices environment and discussed how to create a configuration management microservice using Spring Cloud Config. We learned how to set up a Git repository to store configurations, create a configuration server, and consume configurations in both client applications and microservices. 

By effectively managing configurations, you can ensure consistency across your microservices architecture, simplify the deployment process, and improve the scalability and maintainability of your applications.

Feel free to explore the provided GitHub repository for more examples and hands-on experience with Spring Cloud Config. Happy configuring!
