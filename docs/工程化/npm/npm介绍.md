# npm包管理器介绍

## cnpm 
cnpm 为淘宝镜像，为了解决国内访问npm默认的中央仓库速度比较慢。可以更换为淘宝镜像提供的NPM镜像加快软件包的安装。

安装
终端按需执行以下命令：
```shell
// 设置镜像源为淘宝
npm config set registry https://registry.npm.taobao.org

// 还原官方镜像源
npm config delete registry

```

使用淘宝镜像之后无法使用publish 和 unpublish 命令，如果需要发布软件包和撤销发布的软件包，则需要还原为官方镜像。

## 本地安装和全局安装
npm 的模块安装分本地安装和全局安装，默认为本地安装，如果需要全局安装。则需使用-g参数。

```shell
npm install express-grenerator -g
```

### 本地安装
+ 第三方模块将被安装到当前目录的node_modules 下（如果没有该目录则会自动新建）。
+ 通过require (模块名)即可导入本地模块。
### 全局安装
+ 第三方模块将被安装到 /user/local/lib/node_modules 目录或者安装Node.js的目录。
+ 可以直接在命令行使用。
+ 不可使用require(模块名)来引用。

## 生产依赖和开发依赖
有一些软件包是开发环境和生产环境都需要。而有一些只在开发环境使用。比如测试框架。
### 开发依赖
使用 --save-dev 选项即可将软件包安装为开发依赖。依赖信息将被保存到package.json 的devDependencies 中。
### 生产依赖
使用 --save 选项即可将软件包安装为生产