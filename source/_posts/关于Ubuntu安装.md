---
title: 关于Ubuntu安装
date: 2026-07-15 01:26:33
---

Ubuntu 系统，陆陆续续折腾过几次了，前段时间刚好有机器人比赛，总结下遇到的问题和解决办法。印象深的只有几个了。

<!-- more -->

---

## 1. `nvidia-smi` 提示 no device were found

安装好系统后，输入 `nvidia-smi`，提示 `no device were found`。

**解决：** 50 系显卡 Blackwell 架构只支持 Linux 下的**开源版本**内核，不能选闭源的。具体做法：在「软件与更新」→「附加驱动程序」中选择带有 **`open`** 的驱动。

## 2. 装完显卡驱动，网卡驱动没了

重启按 `Esc` 或 `Shift` 进入 `GRUB` 菜单，选择 *Advanced options for Ubuntu*，选择较低版本内核启动。如果恢复，说明新内核缺少组件，进入系统后执行：

```bash
# 确认当前内核版本并安装缺失的网卡：
sudo apt update
sudo apt install linux-modules-extra-$(uname -r)
sudo apt upgrade
```

完成后重启进入新内核即可。

## 3. 外接显示器有画面，笔记本不显示

开**独显直连**。
