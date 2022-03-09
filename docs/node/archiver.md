# node文件打包

## archiver
npm https://www.npmjs.com/package/node-archiver

以数据流的形式 对文件进行压缩
## 安装

    npm install archiver --save

## 编写文件

```javascript
    // 第一步，导入必要的模块
    const fs = require('fs');
    const archiver = require('archiver');

    // 第二步，创建可写流来写入数据
    const output = fs.createWriteStream(__dirname + "/hello.zip");// 将压缩包保存到当前项目的目录下，并且压缩包名为test.zip
    const archive = archiver('zip', {zlib: {level: 9}});// 设置压缩等级

    // 第三步，建立管道连接
    archive.pipe(output);

    // 第四步，压缩目录到压缩包中
    archive.directory('route/', false);

    // 第五步，完成压缩
    archive.finalize();
```

ok ~