---
title: javascript基础知识01
date: 2022-01-29 17:18:23
---


# JavaScript

![](https://cdn.nlark.com/yuque/0/2018/png/96947/1533811081157-bf0dcfb6-c552-47fe-b324-c36a48e0cc36.png)

JavaScript :简称:js，分三个部分:

1. ECMAScript 标准----js的基本的语法
2. DOM------Document Object Model 文档对象模型
3. BOM------Browser Object Model 浏览器对象模型

JavaScript是什么？
- 是一门脚本语言 不需要编译 直接运行
- 是一门解释性语言
- 是一门动态类型的语言
- 是一门基于对象的语言

### JavaScript的书写位置

1. 写在行内

```javascript
<input type="button" value="按钮" onclick="alert('Hello World')" />
```

2.写在script标签中

```javascript
<head>
  <script>
    alert('Hello World!');
  </script>
</head>
```

3. 写在外部js文件中，在页面引入 引用外部js文件的script标签中不可以写JavaScript代码

```javascript
<script src="test.js"></script>
```

### JavaScript的变量

1. 定义方式

```javascript
var num;
```

2. 变量的赋值

```javascript
var age;
age = 18;
```

3. <font style="color:rgb(51, 51, 51);">同时声明多个变量 及初始化</font>

```javascript
var age, name;
age = 10;
name = 'zs';

var age = 10, name = 'tom';
```

### JavaScript变量的命名规则和规范

+ 规则 - 必须遵守的，不遵守会报错
  - 由字母、数字、下划线、$符号组成，不能以数字开头
  - 不能是关键字和保留字，例如：for、while。
  - 区分大小写
+ 规范 - 建议遵守的，不遵守不会报错
  - 变量名必须有意义，做到见名知意
  - 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。例如：userName、userPassword

### JavaScript数据类型

<font style="color:rgb(201, 14, 14);">Number、 String、 Boolean、 Undefined、 Null</font>

Number

```javascript
十进制
	var num = 9;
	进行算数计算时，八进制和十六进制表示的数值最终都将被转换成十进制数值。
十六进制
	var num = 0xA;
	数字序列范围：0~9以及A~F

浮点数
	var n = 5e-324;   // 科学计数法  5乘以10的-324次方  
浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数
   var result = 0.1 + 0.2;    // 结果不是 0.3，而是：0.30000000000000004
   console.log(0.07 * 100);
   不要判断两个浮点数是否相等

最小值：Number.MIN_VALUE，这个值为： 5e-324
最大值：Number.MAX_VALUE，这个值为： 1.7976931348623157e+308
无穷大：Infinity
无穷小：-Infinity

NaN：not a number
  NaN 与任何值都不相等，包括他本身
isNaN: is not a number
```

String类型

```javascript
'abc'   "abc"   '中国人'
var str = 'Hello World';
console.log(str.length);

/*
    字符串拼接使用 + 连接
    两边只要有一个是字符串，那么+就是字符串拼接功能
    两边如果都是数字，那么就是算术功
*/
console.log(11 + 11);
console.log('hello' + ' world');
console.log('100' + '100');
console.log('11' + 11);
console.log('male:' + true);
```

![](https://cdn.nlark.com/yuque/0/2018/png/96947/1533812350712-6545f905-0b5a-4564-982c-36551ad13123.png)

Boolean类型

+ Boolean字面量： true和false，区分大小写
+ 计算机内部存储：true为1，false为0

Undefined和Null

1. undefined表示一个声明了没有赋值的变量，变量只声明的时候值默认是undefined
2. null表示一个空，变量的值如果想为null，必须手动设置

### 获取变量的类型

```javascript
var i = 'hello';
console.log(typeof i);  // 'string'
```

### 字面量

在源代码中一个固定值的表示法。

数值字面量：8, 9, 10

字符串字面量：'黑马程序员', "大前端"

布尔字面量：true，false

### 注释

```javascript
// 单行注释 这是一个变量
var name = 'hm';

/*
'abc'   "abc"   '中国人'
var str = 'Hello World';
console.log(str.length);
*/
```

### 数组

<font style="color:rgb(119, 119, 119);">所谓数组，就是将多个元素（通常是同一类型）按一定顺序排列放到一个集合中，那么这个集合我们就称之为数组。</font>

### 数组的定义

<font style="color:rgb(119, 119, 119);">数组是一个有序的列表，可以在数组中存放任意的数据，并且数组的长度可以动态的调整。</font>

```javascript
// 创建一个空数组
var arr1 = []; 
// 创建一个包含3个数值的数组，多个数组项以逗号隔开
var arr2 = [1, 3, 4]; 
// 创建一个包含2个字符串的数组
var arr3 = ['a', 'c']; 

// 可以通过数组的length属性获取数组的长度
console.log(arr3.length);
// 可以设置length属性改变数组中元素的个数
arr3.length = 0;
```

### 数组的取值

```javascript
// 格式：数组名[下标]	下标又称索引
// 功能：获取数组对应下标的那个值，如果下标不存在，则返回undefined。
var arr = ['red',, 'green', 'blue'];
arr[0];	// red
arr[2]; // blue
arr[3]; // 这个数组的最大下标为2,因此返回undefined
```

### 遍历数组

```plain
for(var i = 0; i < arr.length; i++) {
	// 数组遍历的固定结构
}
```

### 数组元素的新增

```javascript
// 格式：数组名[下标/索引] = 值;
// 如果下标有对应的值，会把原来的值覆盖，如果下标不存在，会给数组新增一个元素。
var arr = ["red", "green", "blue"];
// 把red替换成了yellow
arr[0] = "yellow";
// 给数组新增加了一个pink的值
arr[3] = "pink";
```

### 函数

把一段相对独立的具有特定功能的代码块封装起来，形成一个独立实体，就是函数，起个名字（函数名），在后续开发中可以反复调用，函数的作用就是封装一段代码，将来可以重复使用

### 函数的定义

```javascript
//①函数声明
function 函数名(){
  // 函数体
}
function method(){
    alert("helloMethod");
}
method();

//===================================
//②函数表达式
var fn = function() {
  // 函数体
}

var method = funtion(){
    alert("helloMethod");
}
method();
```

### 函数的参数

形参不用var去修饰

形参和实参个数不一定相等

arguments对象 是个数组 会将传递的实参进行封装

```javascript
function fn(a,b,c){
	//var sum = a+b+c;
	//alert(sum);
	//arguments是个数组 会将传递的实参进行封装
	for(var i=0;i<arguments.length;i++){
			alert(arguments[i]);
		}
	}
	fn(1,2,4,8);
```

### 函数的返回值

在定义函数的时候不必表明是否具有返回值

返回值仅仅通过return关键字就可以了 return后的代码不执行

```javascript
function fn(a,b){
	return a+b;
	//alert("xxxx");
}
alert(fn(2,3));
```

### 函数的使用

```javascript
// 声明函数
function sayHi() {
  console.log("吃了没？");
}
// 调用函数
sayHi();

// 求1-100之间所有数的和
function getSum() {
  var sum = 0;
  for (var  i = 0; i < 100; i++) {
    sum += i;
  }
  console.log(sum);
}
// 调用
getSum();

var x = 5, y = 6;
fn(x,y); 
function fn(a, b) {
  console.log(a + b);
}
```

### 自调用函数

```plain
(function () {
  alert(123);
})();
```

### 函数是一种数据类型

```javascript
function fn() {}
console.log(typeof fn);


/*
函数做为返回值
函数是一种类型，所以可以把函数可以作为返回值从函数内部返回，这种用法很常见
*/
function fn(b) {
  var a = 10;
  return function () {
    alert(a+b);
  }
}
```

## JavaScript中的对象

JavaScript中的对象其实就是生活中对象的一个抽象

JavaScript的对象是无序属性的集合。

	其属性可以包含基本值、对象或函数。对象就是一组没有顺序的值。我们可以把JavaScript中的对象想象成键值对，其中值可以是数据和函数。

对象的行为和特征

	特征---属性
	
	行为---方法

```javascript
var o = {
  name: 'zs,
  age: 18,
  sex: true,
  sayHi: function () {
    console.log(this.name);
  }
};

//new Object()创建对象
var person = new Object();
  person.name = 'lisi';
  person.age = 35;
  person.job = 'actor';
  person.sayHi = function(){
  console.log('Hello,everyBody');
}

//工厂函数创建对象
function createPerson(name, age, job) {
  var person = new Object();
  person.name = name;
  person.age = age;
  person.job = job;
  person.sayHi = function(){
    console.log('Hello,everyBody');
  }
  return person;
}
var p1 = createPerson('张三', 22, 'actor');

//自定义构造函数
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function(){
  	console.log('Hello,everyBody');
  }
}
var p1 = new Person('张三', 22, 'actor');
```

### 对象的使用

```javascript
//遍历对象
var obj = {};
for (var i = 0; i < 10; i++) {
  obj[i] = i * 2;
}
for(var key in obj) {
  console.log(key + "==" + obj[key]);
}

//删除对象属性
function fun() { 
  this.name = 'mm';
}
var obj = new fun(); 
console.log(obj.name); // mm 
delete obj.name;
console.log(obj.name); // undefined
```

## 内置对象

JavaScript中的对象分为3种：内置对象、浏览器对象、自定义对象

JavaScript 提供多个内置对象：Math/Array/Number/String/Boolean...

对象只是带有**属性**和**方法**的特殊数据类型。

学习一个内置对象的使用，只要学会其常用的成员的使用（通过查文档学习）

可以通过MDN/W3C来查询

内置对象的方法很多，我们只需要知道内置对象提供的常用方法，使用的时候查询文档。

### MDN

<font style="color:rgb(51, 51, 51);">Mozilla 开发者网络（MDN）提供有关开放网络技术（Open Web）的信息，包括 HTML、CSS 和万维网及 HTML5 应用的 API。</font>

[https://developer.mozilla.org/zh-CN/](https://developer.mozilla.org/zh-CN/)

### Math对象

Math对象不是构造函数，它具有数学常数和函数的属性和方法，都是以静态成员的方式提供

跟数学相关的运算来找Math中的成员（求绝对值，取整）

```javascript
Math.PI						// 圆周率
Math.random()				// 生成随机数
Math.floor()/Math.ceil()	 // 向下取整/向上取整
Math.round()				// 取整，四舍五入
Math.abs()					// 绝对值
Math.max()/Math.min()		 // 求最大和最小值

Math.sin()/Math.cos()		 // 正弦/余弦
Math.power()/Math.sqrt()	 // 求指数次幂/求平方根
```

### RegExp

创建方式：

```javascript
var reg = new RegExp(pattern);
	var reg = /^正则规则$/;
```

规则的写法

  [0-9] 

			[A-Z]
	
			[a-z]
	
			[A-z]
	
			\d 代表数据
	
			\D	非数字
	
			\w	查找单词字符
	
			\W	查找非单词字符
	
			\s	查找空白字符
	
			\S	查找非空白字符
	
			n+	出现至少一次
	
			n*	出现0次或多次
	
			n?	出现0次或1次
	
			{6} 出现6次
	
			{2,8} 2到8次
	
	方法：	
	
		test(str):检索字符串中指定的值。返回 true 或 false

需求：

	校验邮箱

```javascript
var email = javascript_0912@163.com
var reg = /^[A-z]+[A-z0-9_-]*\@[A-z0-9]+\.[A-z]+$/;
reg.test(email);
```

​			

### js的事件

常用事件	

      onclick:点击事件
    
    onchange:域内容被改变的事件

应用示例：二级联动

```javascript
<select id="city">
				<option value="bj">北京</option>
				<option value="hn">河南</option>
	</select>
			<select id="area">
				<option>海淀</option>
				<option>朝阳</option>
				<option>东城</option>
				<option>西城</option>
			</select>
			<script type="text/javascript">
				var select = document.getElementById("city");
				select.onchange = function(){
					var optionVal = select.value;
					switch(optionVal){
						case 'bj':
							var area = document.getElementById("area");
							area.innerHTML = "<option>海淀</option><option>朝阳</option><option>东城</option>";
							break;
						case 'hn':
							var area = document.getElementById("area");
							area.innerHTML = "<option>郑州</option><option>洛阳</option><option>平顶山</option>";
							break;
						default:
							alert("error");
					}
				};				
				
			</script>
```

	onfoucus:获得焦点的事件
	
	onblur:失去焦点的事件

应用示例

```javascript
<label for="txt">name</label>
    <input id="txt" type="text" />
    <span id="action"></span>
    <script type="text/javascript">
        var txt = document.getElementById("txt");
        txt.onfocus = function(){
            //友好提示
            var span = document.getElementById("action");
            span.innerHTML = "用户名格式最小8位";
            span.style.color = "green";
        };
        txt.onblur = function(){
            //没写出来
            var reg=/^$/;
            var inputEle = document.getElementById("txt");
            alert(inputEle.value);
            if(reg.test(inputEle.value)){
                var span = document.getElementById("action");
                span.innerHTML = "输入正确";
                span.style.color = "green";
            }else{
                //错误提示
                var span = document.getElementById("action");
                span.innerHTML = "对不起 格式不正确";
                span.style.color = "red";
            }
        };
    </script>
```

onload:页面加载完毕事件

```javascript
<script type="text/javascript">
    //<body>里的内容加载完成后 再执行
        window.onload = function(){
            var span = document.getElementById("span");
            alert(span);
            span.innerHTML = "hello js";
        };
        </script>
</head>
<body>
    <span id="span"></span>
</body>
```

### JS事件的绑定方式

(1)将事件和响应行为都内嵌到html标签中

```javascript
<input type="button" value="button"  onclick="alert('abc')"/>
```

(2)将事件内嵌到html中而响应行为用函数进行封装

```javascript
<input type="button" value="button" onclick="fn()" />
<script type="text/javascript">
	function fn(){
		alert("abc");
	}
</script>
```

​			

(3)将事件和响应行为 与html标签完全分离

```javascript
<input id="btn" type="button" value="button"/>
<script type="text/javascript">
	var btn = document.getElementById("btn");
	btn.onclick = function(){
	alert("hello");
    };
</script>
```

​			

(4)阻止事件的默认行为

```javascript
<a href="https://www.baidu.com" onclick="return false">点击我吧</a>
```

---

## JS的bom

### window对象

		提示框：alert("提示信息");
	
		确认框：confirm("确认信息");
	
				有返回值：如果点击确认返回true 如果点击取消 返回false
	
				var res = confirm("您确认要删除吗？");
	
				alert(res);
	
		输入框：prompt("提示信息");
	
				有返回值：如果点击确认返回输入框的文本 点击取消返回null
	
				var res = prompt("请输入密码？");
	
				alert(res);

open方法：重新打开一标签页

<font style="color:rgb(101, 123, 131);">window.</font><font style="color:rgb(38, 139, 210);">open</font><font style="color:rgb(101, 123, 131);">(</font><font style="color:rgb(42, 161, 152);">"http://www.baidu.com"</font><font style="color:rgb(101, 123, 131);">);</font>

setTimeout(函数,毫秒值)：

```javascript
<script>
        setTimeout(
            function () {
                alert("hello setTimeout");
            },
            3000
        );
    </script>
</head>

<body>
    <span>3秒后将弹出hello setTimeout</span>
</body>
```

​	

clearTimeout(定时器的名称)

```javascript
<script>
        var timer;
        var fn = function () {
            alert("将会一直执行");
            timer = setTimeout(fn, 2000);
        };
        var closer = function () {
            clearTimeout(timer);
        };
        fn();
    </script>
</head>

<body>
    <input type="button" onclick="closer()" value="清除定时器">
</body>
```

setInterval(函数,毫秒值)：间隔毫秒数执行

clearInterval(定时器的名称)

```javascript
<script>
        var timer = setInterval(
            function () {
                alert("nihao");
            },
            2000
        );
        var closer = function () {
            clearInterval(timer);
        };
    </script>
</head>
<body>
    <input type="button" onclick="closer()" value="清除定时器">
</body>
```

应用示例

注册成功后3秒后跳转到首页

```javascript
<script type="text/javascript">
        var time = 3;
        var timer;
        timer = setInterval(
            function () {
                var second = document.getElementById("second");
                if (time >= 1) {
                    second.innerHTML = time;
                    time--;
                } else {
                    clearInterval(timer);
                    location.href = "index.html";
                }
            },
            1000
        );
    </script>
</head>

<body>
    <span id="second" style="color: red;">3</span>秒后跳转到首页，如果不跳转请<a href="index.html">点击这里</a>
</body>
```

### location.href

```javascript
<script type="text/javascript">
        function redirectDemo() {
            location.href = "index.html";
        }
    </script>
</head>

<body>
    <input type="button" value="跳转" onclick="redirectDemo()">
</body>
```

### history

back();

forward();

go();

```javascript
<a href="index.html">后一页</a>
		<input type="button" value="上一页" onclick="history.back()">
		<input type="button" value="下一页" onclick="history.forward()">
		
		<input type="button" value="上一页" onclick="history.go(-1)">
		<input type="button" value="下一页" onclick="history.go(1)">
```

---

## JS DOM

<font style="color:rgb(51, 51, 51);">文档对象模型（Document Object Model，简称DOM），是</font>[W3C](http://baike.baidu.com/item/W3C)<font style="color:rgb(51, 51, 51);">组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM。Document Object Model的历史可以追溯至1990年代后期微软与</font>[Netscape](http://baike.baidu.com/item/Netscape)<font style="color:rgb(51, 51, 51);">的“浏览器大战”，双方为了在</font>[JavaScript](http://baike.baidu.com/item/JavaScript)<font style="color:rgb(51, 51, 51);">与</font>[JScript](http://baike.baidu.com/item/JScript)<font style="color:rgb(51, 51, 51);">一决生死，于是大规模的赋予浏览器强大的功能。微软在网页技术上加入了不少专属事物，既有</font>[VBScript](http://baike.baidu.com/item/VBScript)<font style="color:rgb(51, 51, 51);">、</font>[ActiveX](http://baike.baidu.com/item/ActiveX)<font style="color:rgb(51, 51, 51);">、以及微软自家的</font>[DHTML](http://baike.baidu.com/item/DHTML)<font style="color:rgb(51, 51, 51);">格式等，使不少网页使用非微软平台及浏览器无法正常显示。DOM即是当时蕴酿出来的杰作。</font>

<font style="color:rgb(51, 51, 51);">DOM又称为文档树模型</font>

![](https://cdn.nlark.com/yuque/0/2018/png/96947/1534768888791-1aa4a941-3fe5-41f5-a774-4ebecd10f7df.png)

文档：一个网页可以称为文档

节点：网页中的所有内容都是节点（标签、属性、文本、注释等）

元素：网页中的标签

属性：标签的属性

文档树

![](https://cdn.nlark.com/yuque/0/2018/png/96947/1534768971257-784ed258-2e45-4bad-ad67-c4d18e43ef52.png)

### DOM经常进行的操作

+ 获取元素
+ 动态创建元素
+ 对元素进行操作(设置其属性或调用其方法)
+ 事件(什么时机做相应的操作)

应用示例

```javascript
//根据id获取元素*****
var div = document.getElementById('div');
console.log(div);

//根据标签名获取元素******
var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  console.log(div);
}

//根据name获取元素**
var inputs = document.getElementsByName('hobby');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  console.log(input);
}

//根据类名获取元素**
var mains = document.getElementsByClassName('main');
for (var i = 0; i < mains.length; i++) {
  var main = mains[i];
  console.log(main);
}
```

## 创建元素的方式

```javascript
//document.write()    
<script>
		document.write('新设置的内容<p>标签也可以生成</p>');
	</script>
</head>

//innerHTML
<body>
		<p id="pid"></p>
</body>
<script>
		var p = document.getElementById("pid");
		p.innerHTML = "待文档加载完再执行";
</script>

//document.createElement() 示例①
<body>
<p id="demo">单击按钮创建有文本的按钮</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	var btn=document.createElement("BUTTON");
	var t=document.createTextNode("CLICK ME");
	btn.appendChild(t);
	document.body.appendChild(btn);
};
</script>
</body>

//document.createElement() 示例②
<body>

<p id="demo">单击按钮创建有文本的按钮</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	var btn=document.createElement("p");
	var t=document.createTextNode("hello p");
	btn.appendChild(t);
	document.body.appendChild(btn);
};
</script>
</body>
```

