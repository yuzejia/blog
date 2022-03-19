# tailwindCss 使用
tailwindCss 初探
[https://www.tailwindcss.cn/](https://www.tailwindcss.cn/)


使用项目 vue3 + ts

## tailwindCss 安装

```
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## 添加 tailwindCss 配置
生成 tailwind.config.js 和 postcss.config.js 文件：

```
    npx tailwindcss init -p
```
### tailwind.config.js


## 配置 Tailwind 来移除生产环境下没有使用到的样式声明
在您的 tailwind.config.js 文件中，配置 purge 选项指定所有的 pages 和 components 文件，使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。

```javascript
    module.exports = {
    + purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
    }

```

### postcss.config.js
这也将会创建一个包含已配置好的 tailwindcss 和 autoprefixer 的 postcss.config.js 配置文件：
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```


## 在您的 CSS 中引入 Tailwind
创建 ./src/index.css 文件 并使用 @tailwind 指令来包含 Tailwind的 base、 components 和 utilities 样式，来替换掉原来的文件内容。

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

```
Tailwind 会在构建时将这些指令转换成所有基于您配置的设计系统生成的样式文件。

main.ts 引入

```ts
// src/main.ts
import './index.css'
```

## Tailwind CSS IntelliSense
vscode 提示 补全 插件 在编写class 的时候会给予智能提示

安装完重启 vscode 

<img src={require('@site/static/img/css/3793d41edef05d46aa0f40ffca56cad.png').default} />

## 编写样式

在vue 页面中我们写入 tailwindCss 样式
```html
    <div class="w-1/4 h-60 bg-slate-300">
        <ul class="space-y-2">
            <li>
                <ul class="grid grid-cols-10 h-7">
                <li class="bg-purple-50"></li>
                <li class="bg-purple-100"></li>
                <li class="bg-purple-200"></li>
                <li class="bg-purple-300"></li>
                <li class="bg-purple-400"></li>
                <li class="bg-purple-500"></li>
                <li class="bg-purple-600"></li>
                <li class="bg-purple-700"></li>
                <li class="bg-purple-800"></li>
                <li class="bg-purple-900"></li>
                </ul>
            </li>
        </ul>
    </div>
```


浏览器查看效果

<img src={require('@site/static/img/css/33082b5233791f0f365cdca3a541103.png').default} />
