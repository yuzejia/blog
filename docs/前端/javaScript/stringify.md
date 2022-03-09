# JS | stringify

JSON.stringify() 把 JavaScript 对象转换为字符串。工作中尝尝会用到该方法，但是好多都是只使用第一个参数，而忽略了其余的两个参数。了解其他参数，能帮你解决更多问题。

### 语法

**JSON.stringify(value[, replacer [, space]])**

JSON.stringify 接受三个参数：

### value

将要序列化成 一个 JSON 字符串的值。
第一个参数也就是要格式化的对象,这个大家基本常用的

```javaScript
let obj = {a:1,b:2,c:3}
JSON.stringify(obj)

//结果： '{"a":1,"b":2,"c":3}'
```

### replacer 可选

该参数作为可选参数存在，就很有意思了。 该参数可以为函数和数组 或者 null

- 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
  该回调函数接受两个参数 key,value; 对应的就是格式化对象的 key，value 。我们可以通过一些逻辑判断来过滤被格式化的内容。

```javaScript
//例子1：把key 为 c 的过滤掉
let obj = {a:1,b:2,c:3}
JSON.stringify(obj, function(key, value) {
    if(key !== 'c') {
        return value
    }
})

// 结果： '{"a":1,"b":2}'

//例子2： 通过判断条件还可以进行对应value的修改
let obj = {a:1,b:2,c:3}
JSON.stringify(obj, function(key, value) {
    if(key == 'c') {
        return '1111'
    }
    return value   // 这里一定要 return value  不然就不会返回整体结果 就会输出 undefined
})

// 结果：'{"a":1,"b":2,"c":"1111"}'
//修改了 obj 中 c 对应的内容


```

- 如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
  该数组的每一项为字符，对应格式化对象的 key。当格式化对象的 key 在该数组中存在。JSON.stringify() 将会只格式化存在的字符

```
let obj = {a:1,b:2,c:3}
JSON.stringify(obj, ['a', 'c'])

// 结果： '{"a":1,"c":3}'
```

- 如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
  null 就相当于 只传了第一个参数！

```
let obj = {a:1,b:2,c:3}
JSON.stringify(obj, null)

// 结果： '{"a":1,"b":2,"c":3}'
```

### space 可选

指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。

```javaScript
let obj = {a:1,b:2,c:3}
console.log(JSON.stringify({a:1,b:2,c:3}, ['a', 'c'], 2))

// 结果
    {
    "a": "foo",
    "b": "bar"
    }

console.log(JSON.stringify({a:1,b:2,c:3}, ['a', 'c'], '---'))
// 结果：
    {
    ---"a": "foo",
    ---"b": "bar"
    }

你也可以 使用。 \t tab缩进
console.log(JSON.stringify({a:1,b:2,c:3}, ['a', 'c'], '\t'))

// 结果：
{
	"a": "foo",
	"b": "bar"
}
```
