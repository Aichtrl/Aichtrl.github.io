---
title: So,this is a long-overdue start
date: 2026-05-09 22:33:51
tags: Personal Journal
---

I started this blog about 5 months ago, but haven't gotten around to write anything yet.Now, I really want to document my daily life while improving my English.It's been a while, but here we go!

<!-- more --> 

I'm busy preparing for the National Undergraduate Electronics Design Contest. I think hardware is much harder than software, as the name suggests.The biggest challenge for me is figuring out how to connect the components together, at least for now.

Maybe people are like that:Our words often struggle to keep up with our thouhts.But anyway, every little bit counts.Besides, I'm confident that my English will get better.

To help solidify my memory, I'll walk throuh what I've learned:

when you want to configure an interrupt, there are *5* steps:

1 Configure the APB2 and AFIO clocks
2 Initialize the GPIO
3 Configure the AFIO(using *GPIO_EXTILineConfig(p1, p2)*)
4 Initialize the EXTI(the process is similar to GPIO)
5 Configure the NVIC(first, set the prioity, then initialize it in a way similar to GPIO)

Finally, here's to a life that keeps getting better.And do not forget:take your takeout trash with you before you leave the Tech Park.
