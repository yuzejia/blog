# JS | 强制类型转换

你不知道的 javaScript 中卷 第四章 强制类型转换。来加深自己对 js 基础知识的理解
参考文献：
https://zhuanlan.zhihu.com/p/252681970

https://juejin.cn/post/6873215243804213262

js 中强制类型的转换返回的总是基本类型值：如字符串，数字，布尔值，不会返回对象和函数。

## js 中存在两种转换方式：

1 隐式强制类型转换
2 显示强制类型转换

## 隐式强制类型转换

何为隐式转换？
个人理解为 在用户不主动进行类型转换的情况下 由 javaScript 自动进行了类型转换。
哪什么情况下 js 会自动进行类型转换呢？
举个例子：

```javaScript
'1' + 1  // '11' js
1 + true // 2

```

原理是因为当二元操作符 + 号一侧有字符串时，执行的是字符串拼接逻辑。
js 在进行 '1' + 1 运算的时候 会自动先把 Number 类型的 1 转换成字符类型

## 显示强制类型转换

显示转换 相当于由用户主动进行类型转换
显式强制类型转换是那些显而易见的类型转换，很多类型转换都属于此列

### 字符串和数字之间的显式转换
字符串和数字之间的转换是通过 String(..) 和 Number(..) 这两个内建函数来实现的，请注意它们前面没有 new 关键字，并不创建封装对象。

例如
- 使用 String 对数字进行字符转换
- 使用 Number 对字符进行数字转换
```javascript
    var a = 1;
    var b = String( a );
    var c = "2";
    var d = Number( c );
    b; // "1"
    d; // 2
```
显而易见 该转换都是用手动调用 内置函数进行的，具有显示作用。我们称之为 **显示强制类型转换

除了 String(..) 和 Number(..) 以外，还有其他方法可以实现字符串和数字之间的显式
转换：
```javascript
    var a = 1;
    var b = a.toString();
    var c = "2";
    var d = +c;
    b; // "1"
    d; // 2
```
a.toString() 是显式的（“toString”意为“to a string”），不过其中涉及隐式转换。