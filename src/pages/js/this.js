

const obj = {
    a:111,
    f1: function () {
        console.log('obj---------', this.a)
    }
}

const obj2 = {
    b: 2222,
    fb: function() {
        console.log('我是obj2 ---', this.b);
    }
}

let fn = function(...age) {
// 类数组 转换成 数组
    console.log(this.a);
}

// fn.call(obj, 1,2)

// fn.apply(obj2, [1,2,3])

// let f3 = fn.bind(obj2)
// console.log(f3());
// f3().fb()

Function.prototype.myApply = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    let result = null;
    // 判断 context 是否存在，如果未传入则为 window
    context = context || window;
    // 将函数设为对象的方法
    context.fn = this;
    // 调用方法
    if (arguments[1]) {
      result = context.fn(...arguments[1]);
    } else {
      result = context.fn();
    }
    // 将属性删除
    delete context.fn;

    return result;
  };

  let f3 = fn.myApply(obj, [11])
  

  var hello = function(){
    console.log(this.name);
};

var demo = {
    name: 'demo'
};

var h = hello.bind(demo);
// h(); // out 'demo'



const p1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p1 成功')
        }, 1000);
    })
}
const p2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('p2 出错')
        }, 2000);
    })
}

Promise.race([p1(), p2()]).then(res => {
    console. log(res)
}).catch(err => {
    console.log(err)
})