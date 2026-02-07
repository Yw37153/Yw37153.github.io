---
title: C_study_Struct
tags:
  - C语言
  - 笔记
categories:
  - 学习
  - 代码
  - C语言
date: 2025-12-11 17:34:39
---

# Struct
## 概念
C 数组允许定义可存储相同类型数据项的变量，结构是 C 编程中另一种用户自定义的可用的数据类型，它**允许您存储不同类型**的数据项。


### 定义==结构体==
```
struct tag { 
    member-list
    member-list 
    member-list  
    ...
} variable-list ;
```

`struct tag`: 新结构体名称（类似`int` `float`）
`member-list`:结构体成员，可以理解为属性。
`viariable-list`:结构变量。
相当于先写了一个新的结构体`tag`，然后说明`variable-list`是`tag`类型。
- 关键字 `typedef`
```
 typedef struct tag { 
    member-list
    member-list 
    member-list  
    ...
} variable-list ;
```
此时`tag`和`variable-list`为新的新结构体名称，不过需要注意的是，`typedef`必须要有末尾类型名，而前面的`tag`类型名则可以省略。

### 声明/定义结构==变量==
```
/* 定义variable-list */

/* 形式1 */
struct tag { 
    member-list
    member-list 
    member-list  
    ...
} variable-list ;


/* 形式2 */
struct tag variable-list;
```
*两种形式等价*  

若使用了`typedef`关键字，则需要在结构体本身后面再写一行定义该结构体变量用的。
```
 typedef struct tag { 
    member-list
    member-list 
    member-list  
    ...
} variable-list ;

variable-list a1,a2;
tag u1,u2;
```
### 变量的使用
*此处仍以上方定义过的结构体`tag`为例*
1. 将变量看作普通变量，直接引用。
```
member1_type a;
a=tag.member1;
```
此时通过变量名`tag.member1`访问  

2. 利用指针访问变量地址。
```
struct tag *p;
p=&tag;
a=p->member1;
```
此时通过指针p指向结构体`tag`中的某一成员`member1`访问  
注意：由于结构体是一个新的变量类型，所以指针类型在定义时应该同样是结构体。