---
title: C_study_Note
tags:
  - C语言
  - 笔记
date: 2026-01-10 22:38:45
---
## 注意
1. 大写->小写:`x=X+32`.  
2. (int)/(int):`d=(float)n1/n2`.
3. **判断的等于号是`==`**
4. 注意越界问题，涉及`i+1`时应当将循环次数减一.
5. 记得看要求输出格式.
6. 


## 错题
1. 已知学生记录的定义为：
```
struct student
{
     int no;
     char name[20];
     char sex;
     struct
     {
          int year;
          int month;
          int day;
     }birth;
};
struct student s;
```
假设变量s中的birth应是“2008年5月10日”，对birth的正确赋值语句是
(D) `s.birth.year=1988; s.birth.month=5; s.birth.day=10;`

2. 
![alt text](image.png)


**原代码**
```#include<stdio.h>
#include<math.h>

struct Point {
    float x;  // x坐标
    float y;  // y坐标
} point1, point2;

int main(void)
{
    scanf("%f %f",&point1.x,&point1.y);
    scanf("%f %f",&point2.x,&point2.y);

    float dist;

    dist=sqrt(pow(point2.y-point1.y,2)+pow(point1.x-point2.x,2));
    
    printf("dist=%.2f",dist);

    return 0;
}
```


**改变**
- [ ] 重复运算使用函数
- 没有利用函数，而是选择新建一个变量记录变化量。这个就没有必要用指针了吧。
- [x] 利用指针
```输入时直接指给结构体
/* 指针p指向点的x,y坐标 */
void inputPoint(struct Point *p)
{
    scanf("%f %f", &p->x, &p->y);
}
```
```
/* 主函数中 */
struct Point *p;
    struct Point p1,p2;

    p=&p1;                    //初始化-指向p1
    inputPoint(&p1);          //把p1赋值
    
    p=&p2;                    //初始化-指向p2
    inputPoint(&p2);          //把p2赋值
```
注意指针使用前的**初始化**
- [x] 计算平方使用`dx*dx`以增加可读性和整洁性
```
 float dx,dy,dist;

    dx=p1.x-p2.x;
    dy=p1.y-p2.y;

    dist=sqrt(dx*dx+dy*dy);
```


**更改后**
```
#include<stdio.h>
#include<math.h>

// 点坐标
struct Point {
    float x;  // x坐标
    float y;  // y坐标
};

//指针p指向点的x,y坐标
void inputPoint(struct Point *p)
{
    scanf("%f %f", &p->x, &p->y);
}


int main()
{
    struct Point *p;
    struct Point p1,p2;

    p=&p1;
    inputPoint(&p1);          //把p1赋值
    
    p=&p2;
    inputPoint(&p2);          //把p2赋值

    float dx,dy,dist;

    dx=p1.x-p2.x;
    dy=p1.y-p2.y;

    dist=sqrt(dx*dx+dy*dy);
    
    printf("dist=%.2f",dist);

    return 0;
}
```
2. 错误输出为0时可能的原因
    a. 控制符类型写错
    b. 没有加取地址符`&`

3.  利用结构体数组编写程序计算班级每名学生的体重指数，假设班级有n名学生，n从键盘输入，在程序中输入每名学生的学号、姓名、身高（m）、体重（kg），利用以下公式计算体重指数：BMI=体重（千克）÷身高（m）的平方  

报错：栈错误
原代码：
```
float cal_BMI(float sg, float tz)
{
    return tz/(sg*sg);
}

int main()
{
    typedef struct STUDENT{
        char name[10];
        int code;
        float m;
        float kg;
        float BMI;
    }stu;

    int num;
    printf(" Please enter number of student:");
    scanf("%d",&num);

    stu students[num],*p;

    p=students;

    printf("Please input the student information:");
    int i;
    for(i=0;i<num;i++)
    {
        scanf("%d",p->code);
        scanf("%s",p->name);
        scanf("%f",p->m);
        scanf("%f",p->kg);
        p->BMI=cal_BMI(p->m,p->kg);
        
    }

    for(i=0;i<num;i++)
    {
        printf("%d %s %.2f %.2f %.2f",p->code,p->name,p->m,p->kg,p->BMI);
    }

    return 0;

}
```
1. 未加取地址符。结构体`p->member`后是一个**普通变量**，因此也要加取地址。**这个会导致堆栈错误。尤其是和下面一个组合起来。**但是，数组名本身就是地址，不用加取地址符。
2.  指针未移动，导致几次输入改变同一个元素。
```
for(i=0;i<num;i++,p++)
    {
        scanf("%d",p->code);
        scanf("%s",p->name);
        scanf("%f",p->m);
        scanf("%f",p->kg);
        p->BMI=cal_BMI(p->m,p->kg);
        
    }
```



## 常见代码段
1. 最大公约数
```
int find_gcd(int a, int b)
{
    
    if(a%b==0)
    {
        return b;
    }
    else
    {
        return find_gcd(b,a%b);
    }
}
```

2. 冒泡排序
```

```

3. 交换函数
```
void exc(int *a,int *b){
    int t;
    t=*a;
    *a=*b;
    *b=t;
}
```

4. 数组从某个地方开始向后移动
```
int i,t; //t是需要需要往后移动的位置
for(i=0;i>t;i--){
    arr[i] = arr[i-1];
}
```