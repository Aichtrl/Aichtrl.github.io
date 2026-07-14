---
title: 关于Ubuntu安装
date: 2026-07-15 00:25:56
---

Ubuntu系统，陆陆续续折腾过几次了，前段时间刚好有机器人比赛，总结下遇到的问题和解决办法。印象深的只有几个了。

<!-- more -->

1 安装好系统后，输入 nvidia-smi，提示no device were found，

解决：50系显卡blackwell架构支只持linux下的开源版本内核，不能选闭源的。具体做法就是在"软件与更新"下的"附加驱动程序"选择带有"open"的驱动

2 安装完显卡驱动，网络驱动没了
重启按Esc或Shift进入GRUB菜单，选择Advanced options for Ubuntu，选择较低版本内核启动，如果恢复，说明新内核确实组件，进入系统后执行

# 确认当前内核版本并安装缺失的网卡：
sudo apt update
sudo apt install linux-modules-extra-$(uname -r)
sudo apt upgrade
完成后重启进入新内核即可

3 外接显示器有画面，笔记本身不显示

开独显直连
