// // 策略模式

// // 什么是策略模式



// // 薪水类
// var performanceS = function() {

// }

// // salary 薪水
// performanceS.prototype.calculate = function(salary) {
//     return salary*4
// }

// var performanceA = function() { }

// performanceA.prototype.calculate = function(salary) {
//     return salary*3
// }

// var performanceB = function() {
// }


// performanceB.prototype.calculate = function(salary) {
//     return salary*2
// }

// // 奖金类
// /** salary 薪水
//  * strategy 绩效
//  */
// var Bonus = function() {
//     this.salary = null      // 原始薪水
//     this.strategy = null   // 绩效等级对应的策略
// }

// Bonus.prototype.setSalary = function(salary) {
//     this.salary = salary
// }

// Bonus.prototype.setStrategy = function(strategy) {
//     this.strategy = strategy   // 设置员工绩效等级对应的策略对象
// }

// Bonus.prototype.getBonus = function() {
//     return this.strategy.calculate(this.salary)  //把计算奖金的操作委托给对应的策略对象
// }

// var bonus = new Bonus();
// bonus.setSalary(10000)
// bonus.setStrategy(new performanceS())

// console.log(bonus.getBonus());

// bonus.setStrategy(new performanceA())

// console.log('---', bonus.getBonus());

// // 对象版本：
// var strategies = {

//     "s": function (salary) {
//         return salary * 4
//     },

//     "A": function (salary) {
//         return salary *3
//     },
    
//     "B": function (salary) {
//         return salary*2
//     }
// }

// var calculateBonus = function (level, salary) {
//     return strategies[level] = (salary)
// }


// console.log( calculateBonus('S', 2000) );


// var S = function(salary) {
//     return salary *4
// }

// var A = function(salary) {
//     return salary *4
// }

// var B = function(salary) {
//     return salary *4
// }
