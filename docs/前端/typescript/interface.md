

# TS | interface
+ 接口既可以在面向对象编程中表示为行为的抽象，也可以用来描述对象的形状。

对象接口定义

```ts
    interface Person {
        readonly  name: string;   // readonly标识只读属性 设置后就不能修改了
        age:  number;
        work?: string;   // ? 可选项
    }

    let xiaoMing: Person = {
        name: "xiaoming",
        age: 18,
        work: "前端开发"
    }

    let xiaoHua: Person = {
        name: "xiaoming",
        age: 18,
    }
```


行为抽象

通过接口把一些类中共有的属性和方法抽象出来,用来约束实现此接口的类

一个类可以实现多个接口，一个接口也可以被多个类实现

```ts
interface PersonInfo {
    info(): void;
}

interface Work {
    setWork(s: string): void;
}

class Person implements PersonInfo, Work {
    info() {
        
    }
}

```