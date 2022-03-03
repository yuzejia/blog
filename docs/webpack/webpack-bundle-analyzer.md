# webpack-bundle-analyzer

打包分析图可视化
[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## 安装

```js
# NPM
    npm install --save-dev webpack-bundle-analyzer
# Yarn
    yarn add -D webpack-bundle-analyzer
```

**webpack.config.ts 采用 ts 文件。执行：**

```js
    npm i --save-dev @types/webpack-bundle-analyzer
```

webpack.config.ts 配置

```JS
...
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

  plugins: [
    ...

    new BundleAnalyzerPlugin()

    ...
  ]
```

## 参数 options ? 可选

**new BundleAnalyzerPlugin(options?: object)**

| 名称                    | 类型                                        | 描述                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`analyzerMode`**      | 之一：`server`, `static`, `json`,`disabled` | 默认值：`server`。在`server`模式分析器将启动 HTTP 服务器以显示捆绑报告。 <br />在`static`模式下，将生成带有捆绑报告的单个 HTML 文件。<br />在`json`模式下，将生成带有捆绑报告的单个 JSON 文件。在模式下，您可以使用此插件通过设置为来`disabled`生成 Webpack Stats JSON 文件。` generateStatsFile``true ` |
| **`analyzerHost`**      | `{String}`                                  | 默认值：`127.0.0.1`。将在`server`模式下用于启动 HTTP 服务器的主机。                                                                                                                                                                                                                                      |
| **`analyzerPort`**      | `{Number}`或者`auto`                        | 默认值：`8888`。将在`server`模式下用于启动 HTTP 服务器的端口。                                                                                                                                                                                                                                           |
| **`reportFilename`**    | `{String}`                                  | 默认值：`report.html`。将在`static`模式下生成的捆绑报告文件的路径。它可以是绝对路径，也可以是相对于捆绑输出目录的路径（在 webpack 配置中是 output.path）。                                                                                                                                               |
| **`reportTitle`**       | `{String                                    | function}`                                                                                                                                                                                                                                                                                               | 默认值：返回漂亮打印的当前日期和时间的函数。HTML`title`元素的内容；或`() => string`提供内容的形式的功能。 |
| **`defaultSizes`**      | 之一：`stat`, `parsed`,`gzip`               | 默认值：`parsed`。默认情况下在报告中显示的模块大小。[尺寸定义](https://github.com/webpack-contrib/webpack-bundle-analyzer#size-definitions)部分描述了这些值的含义。                                                                                                                                      |
| **`openAnalyzer`**      | `{Boolean}`                                 | 默认值：`true`。在默认浏览器中自动打开报告。                                                                                                                                                                                                                                                             |
| **`generateStatsFile`** | `{Boolean}`                                 | 默认值：`false`。如果`true`, webpack stats JSON 文件将在 bundle 输出目录中生成                                                                                                                                                                                                                           |
| **`statsFilename`**     | `{String}`                                  | 默认值：`stats.json`。将生成的 webpack stats JSON 文件的名称，如果`generateStatsFile`是`true`. 它可以是绝对路径，也可以是相对于捆绑输出目录的路径（在 webpack 配置中是 output.path）。                                                                                                                   |
| **`statsOptions`**      | `null`或者`{Object}`                        | 默认值：`null`。方法的选项`stats.toJson()`。例如，您可以使用`source: false`选项从统计文件中排除模块的来源。[在此处查看更多选项](https://webpack.js.org/configuration/stats/)。                                                                                                                           |
| **`excludeAssets`**     | `{null                                      | pattern                                                                                                                                                                                                                                                                                                  | pattern[]}`其中`pattern`等于`{String                                                                      | RegExp | function}` | 默认值：`null`。将用于匹配资产名称以将其从报告中排除的模式。如果 pattern 是一个字符串，它将通过`new RegExp(str)`. 如果模式是一个函数，它应该具有以下签名`(assetName: string) => boolean`并且应该返回`true`排除*匹配*的资产。如果提供了多个模式，资产应至少匹配其中一个以被排除。 |
| **`logLevel`**          | 之一：`info`, `warn`, `error`,`silent`      | 默认值：`info`。用于控制插件输出多少细节。                                                                                                                                                                                                                                                               |
