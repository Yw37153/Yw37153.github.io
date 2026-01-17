---
title: 探索：Obsidian全平台互通方案
tags:
---
## 前言
[Obsidian的介绍]
本地软件，iPad+Windows是一种很常见且性价比很高的组合，Obsidian作为一款备受好评的**本地**Markdown书写软件，其不可避免的痛点就是不同设备之间的同步问题。于是我探索了许多方案。

## 方案一：Git

这个方案是将Ob的仓库上传到git, 再在其他的设备中通过git下载到本地。  

- 优点：免费。  
- 工具：
  - iSH Shell 

### 第一步：备份仓库
在**iPad**中找到**Obsidian**的文件夹，将需要备份的仓库文件夹压缩后传到电脑上。  

### 第二步：Windows端
用Obsidian打开刚刚的仓库。  
用**git bash**打开仓库，输入以下命令。  
```
git init  // 初始化 git 项目
git remote add origin $ git remote add origin git@github.com:Yw37153/Ywww.git // 添加远程仓库
```

### 第二步：iPad安装git
在APP Store下载**iSH**
进入后输入
```Shell
apk update          //更新软件包
apk install git     //下载git
```
