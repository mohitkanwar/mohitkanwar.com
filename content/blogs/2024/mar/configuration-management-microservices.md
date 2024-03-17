---
title: "Configuration Management in Microservices"
date: 2024-03-11T09:34:39+05:30
draft: true
author: "Mohit Kanwar"
tags:
image: /images/blogs/configuration-management-microservices/banner.png
description: As the microservices environment grows, managing the configurations across becomes difficult. Let's work towards a sample application that serves configurations.
toc:
---

Configuration management is an important yet underrated aspect in microservices environment.
As a system, we need to manage many kinds of configurations. This include configurations related to clients, the services, secrets and the complexity is increased when we include different environments like the dev environment, QA environment, prod environment. The prod env itself may be running in disaster recovery mode, calling for a different set of configurations.


## Spring Cloud Config

Spring has provided an interesting solution for the same. In this blog, I would like to talk about the provided solution and how can we use this in a FinTech industry.

## The use case
The configuration service must be able to act as a single point for business configuration changes that include
1. Server side configurations
2. Client side configurations
3. Configurations for different enviromnets
4. Configurations must be easy to change, and must be eventual consistent
5. Fetching configurations must be quick

The different types of configurations that we need to store

1. Allowed operating systems and app versions
1. Business timings 
1. Global Limits
1. Business Secrets


# Setup

This setup involves the following git repos

1. [https://github.com/spring-cloud-samples/configserver/tree/main](The service Repo) 