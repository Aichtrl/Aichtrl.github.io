---
title: So, This Is a Long-Overdue Start
date: 2026-05-09 22:33:51
tags:
  - Personal
  - Journal
  - English
  - STM32
categories: 随笔
---

I started this blog about 5 months ago, but haven't gotten around to writing anything yet.
Now, I really want to document my daily life while improving my English.
It's been a while, but here we go!

<!-- more -->

## Preparing for the Electronics Design Contest

I'm busy preparing for the National Undergraduate Electronics Design Contest.
Hardware is much harder than software — the biggest challenge for me right now is
figuring out how to connect the components together.

## A Little Reflection

Maybe people are like that: our words often struggle to keep up with our thoughts.
But anyway, every little bit counts. I'm confident my English will get better.

## What I Learned Today: Configuring an Interrupt

To help solidify my memory, here's a walkthrough of the 5 steps to configure an interrupt:

1. Configure the **APB2** and **AFIO** clocks
2. Initialize the **GPIO**
3. Configure the **AFIO** — using `GPIO_EXTILineConfig(p1, p2)`
4. Initialize the **EXTI** *(process is similar to GPIO)*
5. Configure the **NVIC** — set the priority first, then initialize it *(similar to GPIO)*

---

Here's to a life that keeps getting better.

> And don't forget: take your takeout trash with you before you leave the Tech Park. 🗑️
