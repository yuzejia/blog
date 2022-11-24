// 责任链 模式
// 1 什么是责任链模式？
// 以链式 进行向下处理。每一个节点处理各自的逻辑。当上一个节点处理需要下一个节点处理即通知通知下一个节点。

// 1 多个对象处理一个请求。将这些对象连成一条链，并沿这条链传递该请求，直到有一个对象处理它为止。
// 2 链式对象向下处理。上个节点控制是否需要下个节点继续处理。

// 实现场景：支付场景
// 创建订单=》支付请求=》支付结束

// 四个逻辑处理相当于四个 节点 分别创建四个处理函数

// 编写责任链模式

// class Chain {
//     constructor(fn) {
//         this.fn = fn;   // 节点对象
//         this.nextSuccess = null;
//     }

//     // 设置下个节点
//     setNextSuccess(next) {
//         this.nextSuccess = next
//     }

//     async implement(...arg) {
//         let res = await this.fn.apply(this, arg)
//         console.log(res);
//         // 通过上个节点 是否返回继续执行标识
//         if (res) {  
            
//             // 这里注意 当前 this.nextSuccess 是下个节点 apply 指向是 this.nextSuccess，千万不要是 this (this 等于第一个实例节点 会造成死循环)
//             return this.nextSuccess && this.nextSuccess.implement.call(this.nextSuccess, res)
//         }
//     }
// }


// function creatOrder(m, b) {
//     console.log('创建订单', m, b);
//     return "0"
// }

// // 
//  function pay(m) {
//      console.log('开始支付', m);
//     //    return 'nextSuccessor'
// }

// function payResult(m) {
//     console.log('支付完成');
// }

// const _creatOrder = new Chain(creatOrder)
// const _pay = new Chain(pay)
// const _payResult = new Chain(payResult)

// // _creatOrder.setNextSuccess(_pay)
// // _pay.setNextSuccess(_payResult)
// // console.log(_creatOrder);
// // console.log(_pay);
// // _creatOrder.implement('222', '333')

// class A{
//     constructor(fn) {
//         this.fn = fn
//     }

//     pipe(f) {
//         this.fn.call(this, arguments)
//         return f && new A(f)
//     }
// }

// function a() {
//     console.log('aaaaaaaaa');
// }

// function b(params) {
//     console.log('0000', params);
// }

// function c() {
//     console.log('cccccccc');
// }
// new A(a).pipe(b).pipe(c)