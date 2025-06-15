---
title: The Art and Science of Prompt Engineering
date: 2023-11-19
description: Discover the power of prompt engineering in this comprehensive blog, delving into query details, persona adoption, task completion steps, real-world examples, parameter specifications, and input sanitization. Learn how these aspects shape AI outcomes for optimal results. Dive in to enhance your understanding!
image: /images/blogs/prompt-engineering/The Art and Science of Prompt Engineering.png
--- content 
With the rise of conversational and generative AI systems like ChatGPT, Bard etc., the way of working is being disrupted. To not be afraid of AI snatching jobs, we must embrace AI and adpot it in our ways of working to deliver better and faster.


To use AI as an assistant and getting work done by it, we need to be able to communicate our needs to it. When we ask the AI to do something for us, the requests are known as prompts.

prompt engineering is the art and science of designing the prompts to be able to communicate with AI effectively.


- Including details in query
- Ask the model to adopt a persona
- Specify steps to complete a task
- Provide examples
- Specify parameters (e.g. desired length) of the result
- Sanitize inputs




## Including details in query
I wanted to create a training program for a group of software engineers. In my understanding, it was obvious what I wanted. and hence I asked the following query to ChatGPT :


<img src="/images/blogs/prompt-engineering/training-program-less-details.png" alt="An example where I provided less details while talking to chatgpt" class="responsive-image-400" style="max-height:400p">

The chatGPT started to answer me by creating a training program for improving health. While it is a good to keep, I was actually not looking for it.
Hence, I had to refine the prompt by adding more details. And it resulted in something beautiful.

Providing more details help the A.I. assistent to understand the requirements better, and provide results closer to your needs.

<img src="/images/blogs/prompt-engineering/training-program-more-details.png" alt="An example where I provided more details while talking to chatgpt" class="responsive-image-400" style="max-height:400p">


## Ask the model to adopt a persona
A persona is like a stereotype that we can define that helps in defining the language and knowledge understanding of a person. A.I systems are smart enough to understand different perspectives and can tailer their responses as per the defined persona.


I asked chatGPT to take up a persona of a CEO to address the employees by explaining the impacts of covid, and then in second prompt I asked it to assume a persona of a father of 5 year old. 
<img src="/images/blogs/prompt-engineering/persona-ceo.png" alt="An example where I asked chatGPT to take up persona of a CEO" class="responsive-image-400 width50"/>
<img src="/images/blogs/prompt-engineering/persona-father.png" alt="An example where I asked chatGPT to take up persona of a CEO" class="responsive-image-400 width50" />

In both the cases, the topic is same - covid-19. However the choice of words, examples, tone changed as per the persona and audience.

## Specify steps to complete a task
Consider your assistent as a trainee. Someone who has all the resources, but is not able to deliver until the taks is broken down into simpler tasks.
I was designing an angular component, and asked ChatGPT to design the component for me.

<img src="/images/blogs/prompt-engineering/step-1.png" alt="An example where I asked chatGPT to create an angular compoent (step 1)" class="responsive-image-400 width50"/>

The generated component was a beautiful angular component that gave me a good starter item to begin with. 
However pretty soon, (after replacing the example API) I realized that I need a loader .
The API which was being invoked tool longer to respond and the user had no information that the API is loading the data.

Hence, I asked the AI to take a step further and add a loader.

By providing small incremental steps I was able to reach to a stage that fitted my requirements. 
By providing a step by step instruction, I was able to test the results, and provide feedback. Thus creating something that was specific to my needs.

<img src="/images/blogs/prompt-engineering/step-2.png" alt="An example where I asked chatGPT to add a loader to already created component (step 2)" class="responsive-image-400 width50"/>

## Provide Examples.
Sometimes, when we are not able to explain our requirements in words, we give examples to humans to express ourselves better. Examples help in understanding the requirements. AI is no different. AI can understand and make infrences from provided examples.

I use mermaid for generating my diagrams. And since mermaid is text based, it works pretty well with generative AI tools. However in my experinece, the by default AI tends to generate mermaid tools for graphs/flowchart.

<img src="/images/blogs/prompt-engineering/flowchart.png" alt="An example where I asked chatGPT to create a mermaid diagram and it created a flowchart" class="responsive-image-400 width50"/>

<img src="/mmd/tech/arch.png" alt="The created flowchart diagram" class="responsive-image-400 width50"/>

But in reality I was looking for a C4 diagram. And hence I gave the examples to ChatGPT of what I was looking for. (I picked up the example directly from mermaid documentation). The results were amazing :


<img src="/images/blogs/prompt-engineering/c4.png" alt="An example where I asked chatGPT to create a mermaid diagram and it created a flowchart" class="responsive-image-400 width50"/>

<img src="/mmd/tech/arch2.png" alt="The created flowchart diagram" class="responsive-image-400 width50"/>

PS : ChatGPT responded with a minor error, that was easily fixed manually. The name of the diagram should be C4Context, and not C4_Context. Anyhow this was not the final diagram, there were multiple iterations after this one.

## Specify parameters
Sometimes we are bound by different criteria. e.g. to create a tweet we are bound by 280 character limits. We can specify such parameters for ChatGPT to accomodate our expectations.


<img src="/images/blogs/prompt-engineering/limit-default.png" alt="An example where I asked chatGPT to write a poem without defining limits" class="responsive-image-400 width50"/>

<img src="/images/blogs/prompt-engineering/limit-280.png" alt="An example where I asked chatGPT to write a poem by defining limi" class="responsive-image-400 width50"/>

## Sanitize inputs
If you are using the free version of AI tools, you may be giving all the information up for training of the model. It means, that any prompt or information that you provided can be used to train the AI engine running the application. If other users have similar queries, the data provided by you can be used to answer their questions. This can potentially leek the information that you share.
As a user, you must control and sanitize the information that you are sharing with such systems in order to prevent any leakage of private and sensitive information.

<img src="/images/blogs/prompt-engineering/sanitized.png" alt="An example where I sanitized my inputs to get a response from ChatGPT" class="responsive-image-400 width50"/>
<!--
[Open AI](https://platform.openai.com/docs/guides/prompt-engineering)
[Google Prompt Engineering Course](https://developers.google.com/machine-learning/resources/prompt-eng)
-->