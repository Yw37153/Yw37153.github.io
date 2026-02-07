---
title: git教程-小白快速入门指北
date: 2026-01-27 23:29:18
tags:
  - 教程
  - Git
categories:
  - 教程
  - Git
---

# 引言
Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。我们可以利用它进行代码的管理，它的核心就是仓库的上传、下载与更新。  
参考网址：  
- [git简明指南](https://www.runoob.com/manual/git-guide/)
- [Git教程|菜鸟教程](https://www.runoob.com/git/git-tutorial.html)

# 工作原理示意图
![git-process](git-process.png)  

## 找到所需仓库  

### 新仓库
1. 初始化  
```bash
git init
```
2. 添加到暂存区
```bash
git add <filename>
```

或
```bash
git add *
```

3. 提交到Head
```bash
git commit -m "代码提交信息"
```

4. 推送到云端仓库
```bash
git remote add origin <server>
```

### 已有仓库==克隆==
- 本地
```bash
git clone </path/to/repository>
```  

- 云端
```bash
git clone <SSH：username@host:/path/to/repository>
```

这样，我们就在本地和云端上**都**有了相同的仓库。那么，我们应该如何更新推送呢？  

## 更新/修改==云端==仓库

首先，我们需要确定我们所需要修改的**分支**，默认的主分支是Master。  
可以用`git status`检查  

1. 添加到暂存区
```bash
git add <filename>
```

或
```bash
git add *
```

2. 提交到Head
```bash
git commit -m "代码提交信息"
```

3. 推送到云端仓库
```bash
git remote add origin <server>
```

## 更新==本地==仓库

下载并快速合并代码：  
```bash
git pull
```

# 尾声
以上是常用命令及基本操作，下面附上Git命令速查表，方便大家查找命令，也方便大家进行进阶学习。
![Help](Git help.jpg)
