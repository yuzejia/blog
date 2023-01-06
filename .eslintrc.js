module.exports = {
    root: true, // // 告诉eslint找当前配置文件不能往父级查找
    "env": { // / 全局环境
        "browser": true,
        "es2021": true   // // 例子：这样设置之后，就支持新的 ES6 全局变量和类型
    },
    "settings": {
        "react": {
          "version": "999.999.999"
        }
      },
    "extends": [ // // 让 ESlint 添加规则模块
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": { // // 优先级低于parse的语法解析配置
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [ // // 使用第三方插件检查规则
        "react",
        "@typescript-eslint"
    ],
    "rules": { //  // 规则，手动自定义代码规范
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off"
    }
}
