# JS | reflect

Reflect对象是一个全局的普通的对象。Reflect的原型就是Object.

Reflect是ES6为了操作对象而新增的API, 为什么要添加Reflect对象呢？它这样设计的目的是为了什么？

1. 将Object对象的一些明显属于语言内部的方法(比如Object.defineProperty)，放到Reflect对象上，那么以后我们就可以从Reflect对象上可以拿到语言内部的方法。

2. 在使用对象的 Object.defineProperty(obj, name, {})时，如果出现异常的话，会抛出一个错误，需要使用try catch去捕获，但是使用 Reflect.defineProperty(obj, name, desc) 则会返回false。

## Reflect 属性方法
+ Reflect.get(target, name, receiver)

        读取对象属性

+ Reflect.set(target,name,value,receiver)
        
        设置对象属性

+ Reflect.apply(target,thisArg,args)
        
        该方法的含义是：通过指定的参数列表对该目标函数的调用。该方法类似于我们之前的 Function.prototype.apply 方法的。

+ Reflect.construct(target,args[, newTarget])
+ Reflect.defineProperty(target,name,desc)

        该方法与Object.defineProperty方法类似的，不过唯一的区别是 Reflect.defineProperty返回值是一个Boolean的值。

+ Reflect.deleteProperty(target,name)

        该方法用于删除一个对象上的属性，它和delete操作符类似的。

+ Reflect.has(target,name)

        该方法的含义是：检查一个对象上是否含有特定的属性。相当于es5中的in操作符。

+ Reflect.ownKeys(target)

        该函数的作用是：返回由目标对象自身的属性键组成的数组。如果这个目标对象不是一个对象的话，那么该函数就会抛出一个异常。

+ Reflect.preventExtensions(target)

        阻止新的属性添加到对象中去。target参数必须是一个对象，否则的话会抛出一个异常。

+ Reflect.isExtensible(target)

        该方法的作用是检查一个对象是否可以扩展的，也就是说对象里面是否可以添加新的属性或方法。

+ Reflect.getOwnPropertyDescriptor(target, name)

        该方法的参数如下解析：
        target: 表示的是目标对象。
        name： 表示目标对象的属性
        该方法的具体含义是：如果目标对象中的属性描述符存在的话，就返回这个属性描述符，如果不存在，就返回undefined。

+ Reflect.getPrototypeOf(target)

         该方法是返回一个对象的原型的，也就是说内部的 [[Prototype]] 属性的值。

+ Reflect.setPrototypeOf(target, prototype)

        该方法的作用是设置一个对象的原型。如果设置成功的话，这个对象就返回一个true，如果设置失败的话，这个对象就返回一个false。

## Object.freeze()

        Object.freeze() 方法用于冻结对象，禁止对于该对象的属性进行修改（由于数组本质也是对象，因此该方法可以对数组使用）
        该属性是浅冻结 不能冻结深层对象


### 深冻结

要完全冻结具有嵌套属性的对象，您可以编写自己的库或使用已有的库来冻结对象，如Deepfreeze或immutable-js

```javascript
// 深冻结函数.
function deepFreeze(obj) {

  // 取回定义在obj上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj);
}

```
### Object.getOwnPropertyNames()
其实就是个简单的递归方法。但是涉及到一个很重要，但是在写业务逻辑的时候很少用的知识点 Object.getOwnPropertyNames(obj) 。我们都知道在 JS 的 Object 中存在原型链属性，通过这个方法可以获取所有的非原型链属性。

## Object.freeze 性能优化
既然Object.freeze 增对对象进行冻结，使其不能进行属性改变。
在vue响应式中。初始化时，vue会对data做getter、setter改造。Vue 将遍历此对象所有的属性，并使用  Object.defineProperty  把这些属性全部转为 getter/setter，这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

但vue 在遇到 Object.freeze() 这样被设置为不可配置的对象属性时，不会为对象加上setter getter 等数据劫持的方法。

## javascript对象解冻
在javascript 中，对象冻结后，是没有办法再解冻的。只能通过克隆一个具有相同属性的新对象，通过修改新的对象属性来实现。

实现方法：
```
    Object.assign({}, frozenObject);

```

## 锁定对象的方法
### Object.preventExtensions()

对象不可扩展，既不可以新增属性或方法。但可以修改/删除

### Object.seal()

在上面的基础上，对象属性不可删除, 但可以修改

### Object.freeze()

 在上面的基础上，对象所有属性只读, 不可修改