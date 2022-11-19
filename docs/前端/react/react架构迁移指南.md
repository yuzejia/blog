# react 架构迁移指南

+ Solv-libs 私仓
+ Solv-libs State
+ Solv Components
+ SolvApp & React

## Solv-utils 私仓

### lerna 核心命令大全
```
    1. lerna init        #初始化项目
    2. lerna create core #添加新项目
    3. lerna add xxx     #安装依赖
    4. lerna link        #packages项目依赖

    5. lerna exec        #执行Linux命令
    6. lerna run         #执行npm命令
    7. lerna clean       #清空依赖
    8. lerna bootstrap   #重装依赖

    9. lerna version     #管理版本号
    10. lerna changed    #查看变更
    11. lerna diff       #查看diff
    12. lerna publish    #发布版本
```
### 私仓部署核心命令[上]
```
    1. ~/.config/verdaccio 配置文件地址
    2. 底部listen: 0.0.0.0:4873 阿里云端口号
    3. verdaccio 或者 pm2 start verdaccio 进行测试
    4. https://verdaccio.org/zh-cn/webui/ 页面配置
    5. 仓库文件 `/.local/share/verdaccio/storage/
    6. npm root -g 查看全局包地址索引
    7. 初始化项目 
    ```
    npm init --scope <scope name>
    ```
    8. 为域（scope添加用户）
    ```
    npm adduser --registry=<registry> --scope=<scope name>
    ```
```
### 私仓部署核心命令[中]
```
    1.npm adduser - registry http: localhost:4873/
    2.npm login - registry http: localhost:4873/ 
    npm whoami(验证) npm logout（退出） 
    3.npm unpublish yd-libs - force
    4.pnpm install @solv-utils/core -D 
    5.pnpm config set registry 地址
    6.nrm add laoyuan http: 127.0.0.1:4873/
    7.nrm use laoyuan或者直接配置
    8下载配置.npmrc 发布配置package.json（.npmrc优先）
 ```

 ### 私仓部署核心命令[下]monorepo
 ```
    1.pnpm i xxx —filter @solv-utils/demos
    2.lerna add @solv-utils/core packages/demos/
    3.pnpm add lodash -r/-w 为每个项⽬或全局添加依赖
    4.pnpm run build - filter @solv-utils/demos
    5.lerna run test —scope=@solv-utils/core
    6.lerna publish from-package 初次发版
    7.lerna changed 发版前校验需要更改的包
    8.备选技术栈 rush、https: nx.dev/
 ```