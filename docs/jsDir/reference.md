## Object 类型

```js
// 创建对象的两种方法
// 构造函数法
var person = new Object();
// 对象字面量法
var people = {
    name: "zhaosi"
};
// 访问对象属性的两种方法
people.name;
people["name"];
// 使用方括号来访问变量可以通过变量的形式
var propName = "name";
people[propName];
```

## Array 类型

```js
// 创建数组的方式
var arr = new Array("1", 2, 3);
var arr = new Array(20); // 创建length为20的数组
// 也可以省略new
var arr = Array();
Array.isArray(arr); // true
// 你也可以用instanceof检测,但是instanceof只适合全局环境下的arr
arr instanceof Array; // true
// 使用join可以将数组拼接成一个字符串
arr.join("|"); // x | x | ...
```

### 栈方法

```js
var arr = [1, 2, 3];
arr.push(1); // 1 2 3 1
arr.pop(); // 1 2 3
```

### 队列方法

```js
var arr = [1, 2, 3];
arr.unshift(1); // 1 1 2 3
arr.shift(); // 1 2 3
```

### 重排序方法

```js
var arr = [1, 3, 2];
arr.reverse(); // 2 3 1
var values = [0, 1, 5, 10, 15];
values.sort();
// 0, 1, 10, 15, 5
// 可以给sort传入一个比较函数制定排序规则
function compare(val1, val2) {
    if (val1 < val2) return -1;
    else if (val1 > val2) return 1;
    else return 0;
}
values.sort(compare);
// 0 1 5 10 15
```

### 操作方法

```js
var arr = [1, 2];
arr.concat(1, 2);
// 1 2 1 2
arr.splice(0, 2);
// 1 2
arr.splice(0, 0, 2);
// 2 1 2
arr.splice(0, 1, 3);
// 3 1 2
```

### 位置方法

```js
var arr = [1, 2, 3, 4, 4, 4];
arr.indexOf(3); // 2
arr.lastIndexOf(4); // 5
```

### 迭代方法
