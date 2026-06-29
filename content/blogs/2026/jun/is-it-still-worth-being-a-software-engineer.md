---
title: "Is It Still Worth Being a Software Engineer?"
date: 2026-06-29T10:00:00+05:30
draft: false
author: "Mohit Kanwar"
tags:
  - Software Engineering
  - AI
  - Software Architecture
  - Developer Productivity
  - Career Growth
  - Agentic AI
imageBasePath: "/images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer"
image: /images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer/banner.svg
description: "Is software engineering still worth it when AI can write code? A practical view on why coding is getting cheaper, but business problem solving, architecture, domain understanding, and communication are becoming more valuable."
summary: "AI is making code easier to produce, but writing code was never the real goal. The future belongs to engineers who understand business problems, design solutions, communicate clearly, and use agents to multiply their output."
toc: true
---

## Is it still worth being a software engineer?

I hear this question more often now. The concern is understandable.

AI writes code. AI explains code. AI can generate tests, fix errors, create documentation, and sometimes build a working feature from a short instruction.

So people worry:

1. If AI writes the code, what will developers do?
2. If developers keep accepting generated code, will they lose the ability to think?
3. If writing code becomes easy, will software engineering become cheap?

My short answer is this:

> It is still worth being a software engineer, but it is becoming less useful to be only a code typist.

That distinction matters.

## This reminded me of Eclipse

This whole discussion reminded me of my early days, when we adopted Eclipse.

For people who started later, Eclipse may sound ordinary. But at that time, it felt powerful. The IDE gave us auto-complete. It colored the code beautifully. It showed errors before compilation. It helped us navigate classes and functions. It made the code feel alive.

I still remember admiring how nice the code looked.

My team lead looked at it and said something like:

> "Your life is too easy. You do not even have to remember function names. One dot, and everything appears."

He was not completely wrong.

Auto-complete did make life easier. We did not need to remember every method name. We could explore APIs faster. We could write code with fewer interruptions.

But our manager overheard the conversation and responded to the team lead:

> "Your life was too easy too. Did you ever fix a bug in the compiler? We used to spend days finding issues in our code, while the real issue was hidden in the compiler."

That line stayed with me.

Every generation of engineers thinks the next generation has it easy.

And in some ways, they are right.

## Software has always moved in this direction

Writing software has always become easier over time.

In the early days, programming involved punch cards. One wrong punch could mean preparing a new card. Debugging was slow. Feedback cycles were painful.

Then came better compilers, assemblers, higher-level languages, debuggers, IDEs, package managers, frameworks, cloud platforms, infrastructure as code, CI/CD, and now AI coding agents.

<figure class="mk-wide-diagram">
  <img src="/images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer/evolution-of-software-engineering.svg" alt="Evolution of software engineering from punch cards to AI agents" class="responsive-image-bounded">
  <figcaption>Every generation reduced the friction of writing code and increased the expectation from engineers.</figcaption>
</figure>

The direction has been consistent:

1. Less time remembering syntax.
1. Less time fighting tooling.
1. Less time writing repetitive boilerplate.
1. More time expected on design, integration, quality, security, and business outcomes.

AI is not the first tool that made developers more productive.

It is just the most dramatic one we have seen in a long time.

## We were already moving toward disposable code

There is another angle here.

With microservices and microfrontends, we were already moving toward smaller and more replaceable pieces of software.

Instead of one large application where every change felt expensive, teams started building smaller services, smaller frontends, independent deployments, feature flags, alpha releases, beta testing, canary rollouts, and experiments.

We were already learning to ask:

1. Can we try this with a smaller blast radius?
1. Can we replace this service later?
1. Can we test a new journey with a limited user group?
1. Can we throw away the first version if the business response is weak?

That is not careless engineering.

That is learning faster.

AI generated code will accelerate this direction. It will become easier to create a first version, test an idea, compare options, and discard what does not work.

This can be a very good thing.

Many organizations spend too much time debating an idea before users ever touch it. If AI helps teams build smaller experiments earlier, we can learn what works and what does not work much faster.

But there is a condition.

Disposable code still needs responsible boundaries.

Throwing away a prototype is fine. Accidentally creating ten unowned production services is not.

So the engineering skill shifts again. The question is not only "Can I build this?" The better question is:

> "Is this an experiment, a product, or a platform capability?"

Each one deserves a different level of design, testing, documentation, security, and operational support.

## The real fear is not AI writing code

The real fear is that developers may stop thinking.

That fear is valid.

If someone uses AI like an auto-complete machine and accepts every answer without understanding it, the skill will decay. The same thing happened earlier with copy-paste programming, Stack Overflow-driven development, and framework-driven development.

The problem was never the tool.

The problem was passive usage.

AI can make a weak developer look productive for a while. But it can also help a strong developer move much faster.

The difference is thinking.

A good engineer still asks:

1. What problem are we solving?
1. Is this the right abstraction?
1. What will break when the data grows?
1. What happens when this service is down?
1. Is this secure?
1. Is this maintainable?
1. Is this solving the business problem or just producing code?

AI can generate code, but it does not own the consequences.

The engineer does.

## Writing code was never the goal

This is the most important point for me.

Writing code was never the final goal.

The goal was always to solve a problem.

Sometimes the problem is customer onboarding. Sometimes it is fraud detection. Sometimes it is payment reliability, loan origination, reconciliation, regulatory reporting, employee productivity, or operational cost.

The code is only one way to express the solution.

The business problem is embedded inside the organization. It is shaped by people, processes, regulations, data quality, legacy systems, incentives, budgets, and risk appetite.

That context is not always visible in a ticket.

That context is usually not available in a prompt.

And that context is what separates a software engineer from someone who only produces code.

## Easier things become cheaper

There is another uncomfortable truth.

When something becomes easier, it usually becomes cheaper.

If AI makes simple code generation easier, then simple code generation will become less valuable. That is not a moral judgment. That is how markets work.

But money is not paid just because someone typed code.

Money is paid to achieve complex targets:

1. Reduce operational cost.
1. Launch a product faster.
1. Improve customer experience.
1. Reduce fraud.
1. Improve compliance.
1. Increase conversion.
1. Modernize legacy systems without breaking the business.
1. Make teams faster without increasing risk.

These problems are not becoming easier.

In many organizations, they are becoming harder because systems are more connected, regulations are stricter, customer expectations are higher, and technology choices are wider.

So yes, the cost of producing ordinary software may go down.

But the value of solving important business problems will remain high.

## Who will sustain?

The people who sustain will not be the ones who only know how to type code.

The people who sustain will be the ones who can connect technology with business outcomes.

I see a few roles becoming more important.

### Software architects

Software architects who can craft and design solutions will become more valuable.

Not architects who only draw boxes.

I mean architects who understand tradeoffs:

1. Build or buy.
1. Centralize or decentralize.
1. Synchronous or asynchronous.
1. Monolith, modular monolith, or microservices.
1. Real-time or batch.
1. Strong consistency or eventual consistency.
1. Human approval or full automation.

AI can suggest patterns. But architecture is still about constraints, consequences, and judgment.

### Business architects and domain experts

Business architects who understand the domain will also become more valuable.

They know how the business actually works.

They understand the problem behind the requirement. They know where the data comes from. They know which process is official and which process people actually follow. They know why a small field in a screen matters to operations.

This knowledge is difficult to fake.

If a developer combines engineering skill with business understanding, that developer becomes very hard to replace.

### Engineers who build with agents

There is another category: engineers who use agents to multiply themselves.

If the cost of software goes down, we should not respond by doing the same work slowly.

We should understand what we do every day and automate it.

Ask yourself:

1. What do I repeat every week?
1. What information do I keep searching for?
1. Which checks do I do manually?
1. Which documents do I keep updating?
1. Which logs do I inspect again and again?
1. Which questions do junior developers keep asking me?
1. Which release tasks are predictable?

Then build tools and agents around those tasks.

That is how we maintain growth in a world where code generation is cheaper.

This is where the idea of 100x delivery becomes practical. Not because one person types 100 times faster, but because one person starts turning repeated work into reusable agents, tools, checks, and workflows.

We should not only use AI to write code.

We should use AI to improve the way we work.

## What developers should do now

If you are a developer, I would not panic.

But I would also not ignore the change.

Here are the areas I would focus on.

### 1. Learn AI coding agents

Start using tools like [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) and [opencode](https://opencode.ai/).

Do not use them only for generating snippets.

<figure class="mk-wide-diagram">
  <img src="/images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer/focus-ai-coding-agents.png" alt="Software engineer using an AI coding agent while reviewing code, tests, and architecture notes" class="responsive-image-bounded">
  <figcaption>Use AI coding agents to accelerate engineering work, but keep the review, design, and quality judgment with the engineer.</figcaption>
</figure>

Use them for real engineering workflows:

1. Reading an unfamiliar codebase.
1. Writing tests.
1. Refactoring a module.
1. Explaining build failures.
1. Preparing migration plans.
1. Reviewing pull requests.
1. Creating scripts for repetitive work.

The goal is not to become dependent.

The goal is to learn how to delegate technical work clearly.

### 2. Learn agentic workflows

Learn how agents are designed, controlled, and evaluated.

[LangGraph](https://langchain-ai.github.io/langgraph/) is worth understanding because it forces you to think about state, tools, routing, human approval, and durable workflows.

Even if you do not use LangGraph directly in your company, the concepts are useful.

The future will have many systems where software does not just respond to a request. It will inspect, decide, call tools, wait, resume, ask for approval, and complete a workflow.

That requires architecture.

<figure class="mk-wide-diagram">
  <img src="/images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer/focus-agentic-workflows-tools.png" alt="Engineers designing an agentic workflow with tools, approval gates, and system boundaries" class="responsive-image-bounded">
  <figcaption>Agentic systems need workflow thinking: tools, guardrails, approval points, retry behavior, and observable boundaries.</figcaption>
</figure>

### 3. Learn how to create tools

AI becomes far more useful when it can use tools.

That means developers should understand how to expose safe capabilities:

1. APIs.
1. CLI tools.
1. Internal automation scripts.
1. Database-safe read tools.
1. Observability tools.
1. Documentation search tools.
1. Model Context Protocol style integrations.

If an agent can call a tool, the tool must be reliable, scoped, and safe.

Tool creation is going to be an important engineering skill.

### 4. Learn current business problems

Do not only learn frameworks.

Learn the business around you.

<figure class="mk-wide-diagram">
  <img src="/images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer/focus-business-domain-learning.png" alt="Software engineer and business team discussing a customer journey map and business process" class="responsive-image-bounded">
  <figcaption>The more business context you understand, the better your designs, prompts, tradeoffs, and automation ideas become.</figcaption>
</figure>

If you work in banking, understand onboarding, KYC, payments, cards, lending, reconciliation, fraud, risk, servicing, and compliance.

If you work in retail, understand inventory, pricing, fulfillment, returns, personalization, and supply chain.

If you work in healthcare, understand patient journeys, claims, consent, privacy, and clinical workflows.

The more business context you understand, the better your prompts, designs, tradeoffs, and solutions become.

### 5. Take risk on future problems

Some problems are visible today.

Some are not fully visible yet.

The best opportunities often sit in the second category.

There is risk. You may build something that fails. You may choose a wrong direction. You may spend time on a problem before the market is ready.

But that is still worth doing.

Playing only in safe areas is also risky, because safe areas become crowded and cheap.

### 6. Improve communication

Communication is not a soft extra.

It is core engineering work.

<figure class="mk-wide-diagram">
  <img src="/images/blogs/2026/jun/is-it-still-worth-being-a-software-engineer/focus-communication-architecture.png" alt="Software architect presenting tradeoffs and system design options to a cross-functional team" class="responsive-image-bounded">
  <figcaption>Clear communication turns engineering judgment into shared decisions.</figcaption>
</figure>

If you can write clearly, you can create better requirements, better architecture notes, better incident reviews, better prompts, and better decision records.

If you can speak clearly, you can align teams, explain tradeoffs, and influence decisions.

AI can help draft communication, but it cannot replace your judgment about what needs to be said.

### 7. Keep your engineering fundamentals

Do not abandon fundamentals.

AI can produce code quickly, but someone still has to understand:

1. Data structures.
1. System design.
1. Security.
1. Testing.
1. Reliability.
1. Networking.
1. Databases.
1. Distributed systems.
1. Performance.
1. Maintainability.

Fundamentals are what help you challenge the generated answer.

Without fundamentals, AI will make you faster at producing mistakes.

## My view

Software engineering is still worth it.

But the center of gravity is moving.

Earlier, a lot of value came from knowing how to write code.

Now, more value will come from knowing what code should exist, why it should exist, how it should behave, how it should be operated, and how it should help the business.

AI will reduce the value of mechanical coding.

It will increase the leverage of people who can think clearly.

So the question is not:

> "Will AI replace software engineers?"

The better question is:

> "What kind of software engineer will still be valuable when code is easier to produce?"

My answer is simple.

The valuable engineer will be the one who understands the business problem, designs the solution, communicates the tradeoffs, builds or uses agents intelligently, and owns the outcome.

That is still worth becoming.

Maybe more than before.

---

## Resources to understand now

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) - coding agent workflows inside real projects
- [opencode](https://opencode.ai/) - terminal-based AI coding agent
- [LangGraph](https://langchain-ai.github.io/langgraph/) - agent and workflow orchestration concepts
- [Model Context Protocol](https://modelcontextprotocol.io/) - a practical pattern for connecting AI systems to tools and context
- Business domain learning - the problems inside your industry, not just the frameworks around it
- Communication practice - writing, speaking, architecture notes, and decision records

## Related Reading

- [Production AI Architecture Is Messy. Here Is How I Would Untangle It](/blogs/2026/jun/production-ai-architecture-is-messy/) - how AI moves from demos to governed production systems
- [Software Engineering Skills](/blogs/2024/jul/software-engineering-skills/) - why coding is only one part of engineering growth
- [The Art and Science of Prompt Engineering](/blogs/prompt-engineering/) - how to communicate with AI systems more effectively
- [APIs Are Forever](/blogs/2024/may/apis-are-forever/) - why stable contracts matter when technology keeps changing

{{< mk-cta variant="blog" >}}
