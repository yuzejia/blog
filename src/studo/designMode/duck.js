var duck = {
    duckSing: function () {
        console.log('嘎嘎');
    }
}

var chicken = {
    duckSing: function () {
        console.log('嘎嘎');
    }
}

// 合唱团
var choir = []

var joinChoir = function (animal) {
    if (animal && typeof animal.duckSing === 'function') {
        choir.push(animal)
        console.log('恭喜加入合唱团');
    }
}

// 不关注事物的具体特征。
joinChoir(duck)
joinChoir(chicken)

// 多态
// 对于一个 函数中存在多种行为 可理解为多态
var makeSound = function (animal) {
    if (animal instanceof Duck) {
            console.log('嘎嘎嘎~~');
        } else if(animal instanceof Chicken) {
            console.log('咯咯咯~~');
        }
}

const Duck = function () { };
const Chicken = function () { };
makeSound(new Duck())
makeSound(new Chicken())


// 对象多态性 封装


// 鸭子
// const Ducks = function () {};
// 通过原型 增加叫的动作
Duck.prototype.sound = function () {
    console.log("嘎嘎")
}

// 鸡
// const Chickens = function () {};
// 鸡也有同样会叫的方法
Chicken.prototype.sound = function () {
    console.log('咯咯咯')
}