---
title: 探索：Obsidian全平台互通方案
tags:
  - 教程
  - Obsidian
  - Git
categories:
  - 工具分享
  - Obsidian
date: 2026-02-06 22:33:06
---

# 前言
[Obsidian的介绍]
本地软件，iPad+Windows是一种很常见且性价比很高的组合，Obsidian作为一款备受好评的**本地**Markdown书写软件，其不可避免的痛点就是不同设备之间的同步问题。

# 首选方案：Git

这个方案的核心是Git的云端仓库：将不同设备之间的仓库通过云端下载更新。  

- 优点：免费。  
- 工具：
  - iSH Shell  
  - Termux
  - Obsidian插件Git

首先我们需要先将初始仓库上传至云端。这里以初始仓库在win上为例。  

## Win端上传
- 进入仓库
```
cd <你的/仓库/路径>
```
```
git init  // 初始化 git 项目
git remote add origin <仓库地址> // 添加远程仓库
```
- 在Obsidian**根目录**下创建`.gitignore`文件，把不需要备份的文件写一下。
```
.obsidian
.vscode
```
以下是来自Gemini的建议
```
# 忽略操作系统生成的临时文件
.DS_Store
Thumbs.db
```
- 缓存+提交  
  这一步我的建议是命令行进行第一次提交，~~因为我最开始用的VSCode但是没有提交成功~~  
  提交命令：
```
  git add .
  git commit -m "git bash"
  On branch main
  nothing to commit, working tree clean
```
**Finish**

## iOS同步仓库更新
在APP Store下载**iSH**
进入后输入
```Shell
apk update          //更新软件包
apk install git     //下载git
```
Git同步远程仓库时需要本地有目标文件夹，因此需要我们在本地创建一个新的仓库。  
- 在Obsidan里创建新的仓库  

- 挂载目录  
在iSH中输入
```
mount -t ios obsidian /mnt
```
然后选择Obsidian文件夹
```
cd /mnt/<你的仓库名称>  //进入文件夹
```
注意：这里的mnt是固定的，不要修改成`/mnt/Obsidian/<Repo>`或者`/Obisdian/<Repo>`等。  
- 配置git  
```
git config --global user.name "<Github用户名>"  
git config --global user.email "<Github邮箱>"  
git config --global --add safe.directory /mnt/<你的仓库名称> // 添加安全目录
```
- 配置远程仓库
```
git init   // 初始化 git​  
git branch -M main  // 调整分支为 main
git remote add origin <仓库的Https地址>  // 添加远程仓库​  
git pull origin main // 拉取远程代码
```
接下来会让你输入用户名和密码
接下来会让你输入用户名和密码
```
Username for '<https://>': <用户名>  
Password for '<https://>': <你的验证Token>  
```
- 在Obsidian中检查一下仓库是不是已经拉取成功

## Android端
下载`Termux`
- 准备环境
```
termux-setup-storage  //申请权限
pkg update  //获取更新
pkg install git //下载git
```
- 用Obsidian创建同名新仓库
```
cd <仓库地址>   //进入仓库
```
- 配置git  
```
git config --global user.name "<Github用户名>"  
git config --global user.email "<Github邮箱>"  
git config --global --add safe.directory <你的仓库地址> // 添加安全目录
```
- 配置远程仓库
```
git init   // 初始化 git​  
git branch -M main  // 调整分支为 main
git remote add origin <仓库的Https地址>  // 添加远程仓库​  
git pull origin main // 拉取远程代码
```
接下来会让你输入用户名和密码
```
Username for '<https://>': <用户名>  
Password for '<https://>': <你的验证Token>  
```
- 在Obsidian里检查是否拉取成功

## 插件配置
成功拉取代码后我们需要配置插件以实现自动同步
多端是类似的，主要需要配置几项：

### Automatic
`Split timers for automatic commit and sync`: 勾选  
`Auto commit interval (minutes)`：自动提交间隔 
`Auto pull interval (minutes)`：自动拉取间隔
`Auto push interval (minutes)`：自动推送间隔  
`Pull on startup`：勾选（这个可以避免两个版本不一样的问题）

### Authentication/commit author
`Username on your git server. E.g. your username on Github`: <用户名>
`Password/Personal access token`: <Token>
