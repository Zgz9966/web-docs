## 语法

### 区分大小写

js 中一切都区分大小写

### 标识符

-   第一个字符必须是字母或者下划线(\_)或美元(\$)符号
-   命名请尽量采取驼峰式命名

### 注释

```js
// 单行注释
/* @description 多行注释
 * @params x
 * @params x
 */
```

### 严格模式

启用严格模式,需要在整个脚本上方添加

```js
"usr strict";
```

### 语句

每个以\;结尾的都是一条语句

js 中如果不写分号,可能会导致某些未知错误

## 关键字

ECMA-262 指定了一组关键字,这些关键字不能用来当标识符
||||||
| ------ | ------ | ------ | ------ | ------ |
| break | do | instanceof | typeof| case |
| else | new | var | catch| finally |
| return | void | continue | for| switch |
| while | debugger\* | function | this| with |
| default | if | throw | delete| in |
| try |

还指定了一组保留字,可能将来会用上
||||||
| ------ | ------ | ------ | ------ | ------ |
| abstract | enum | int | short| boolean |
| export | interface | static | byte| extends |
| long | super | char | final| native |
| synchronized | class | float | package | throws |
| const | goto | private | transient| debugger |
| implements | protected | volatile | double | import |
| public |

## 变量

JavaScript 是一门动态语言。
换句话说,每个变量只是一个保存值的占位符而已

```js
var message = "hello world";
message = 1;
function sayHello() {
    var msg = "hello!"; // 局部变量
}
alert(msg); // 报错
function sayHi() {
    msg = "hi!"; // 全局变量
}
alert(msg); // hi! 有效但不推荐
```

## 数据类型

ECMAScript 中有五种基本的数据类型

-   Undefined
-   Null
-   Boolean
-   Number
-   String

还有一种复杂数据类型

-   Object
