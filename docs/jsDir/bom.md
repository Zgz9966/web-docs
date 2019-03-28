## window 对象

window 对象一般有两种身份

-   通过 js 访问浏览器窗口的一个接口
-   ES 规定的 Global 对象

### 全局作用域

在全局作用域声明的变量函数都会成为 window 对象的属性和方法。但是有一点差别

```js
var age = 10;
delete window.age; // false
window.color = "red";
delete window.color; // true
// 使用var的Configurable默认为false,因此无法被delete
```

### 窗口关系及框架

如果使用了多个 iframe,那么每个 iframe 都有自己的 window 对象,你可以通过这样的形式来访问

```js
window.frames[0];
window.frames["top"];
```

### 窗口位置

使用以下代码可以跨浏览器取得窗口左边和上边的位置

```js
let leftPos =
    typeof window.screenLeft === "number" ? window.screenLeft : window.screenX;
let topPos =
    typeof window.screenTop === "number" ? window.screenTop : window.screenY;

window.moveTo();
window.moveBy();
// 这两个方法都可以改变浏览器窗口的位置,但是一般会被浏览器禁用
```

### 窗口大小

```js
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
if (typeof pageWidth !== "number") {
    if (document.compatMode == "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientheight;
    } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientheight;
    }
}
```

### 导航和打开窗口

可以使用 window.open 来打开新窗口

```js
var newW = window.open(
    "http://baidu.com",
    "newWindow",
    "_blank",
    "height=300, width=300, resizable=yes"
);
newW.resizeTo(500, 500);
newW.close();
```

### 延时调用和定时器

```js
setTimeout(function() {
    // do some thing
}, 1000);
setInterval(function() {
    // do some thing
}, 1000);
```

### 系统对话框

-   alert
-   confirm
-   prompt

## location 对象

location 对象很特别,因为他既是 window 的属性,又是 document 的属性

### 查询字符串参数

```js
function getQueryArgs() {
    var qs = location.search.length > 0 ? location.search.substring(1) : "",
        args = {},
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;

    for (i = 0; i < len; i++) {
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}
```

### 位置操作
