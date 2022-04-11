

        function Iphone(brand) {
            this.brand = brand;

            // 实例方法
            this.add = function (params) {
                
            }
        }

        // 原型方法
        Iphone.prototype.call = function(name) {
                console.log('用', this.brand, '打电话给', name);
        }

        // 原型链继承

        function hw(params) { }

        hw.prototype = new Iphone();
        hw.prototype.brand = '华为';

        let hwIphone = new hw();

        console.log('我是华为手机', hwIphone);
        hwIphone.call('小明')

        // 借用构造函数继承

        /**
         * 缺点：
            方法都在构造函数中定义，无法复用
            不能继承原型属性/方法，只能继承父类的实例属性和方法
        */
        
        function sx(brand) {
            Iphone.call(this)
            this.brand = brand;
        }

        let sxIphone = new sx('三星');
        console.log(sxIphone);


        // 实例继承 
        // 不能多次继承

        function ronYao(brand) {
            let instance = new Iphone()
            instance.brand = brand;
            return instance
        }

        let ry = new ronYao('荣耀');
        console.log(ry);
        ry.call('打电话给哥哥')
   


        function parent(name) {
            this.name = name;
            this.call = function() {
                console.log('呼叫中---');
            }

        }

        parent.prototype.add = function() {
            console.log('add 调用');
        }

        let p = new parent('小明')
        p.call()
        p.add()