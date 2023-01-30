"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[818],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,s=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(t),m=l,k=u["".concat(p,".").concat(m)]||u[m]||i[m]||s;return t?n.createElement(k,r(r({ref:a},d),{},{components:t})):n.createElement(k,r({ref:a},d))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=u;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},866:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>i,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=t(7462),l=(t(7294),t(3905));const s={},r="webpack \u6253\u5305 css \u548c\u56fe\u7247",c={unversionedId:"\u5de5\u7a0b\u5316/webpack/webpack_2",id:"\u5de5\u7a0b\u5316/webpack/webpack_2",title:"webpack \u6253\u5305 css \u548c\u56fe\u7247",description:"\u63a5\u4e0b\u6765\u6211\u4eec\u7ee7\u7eed \u6253\u5305 css \u548c \u56fe\u7247\u8d44\u6e90",source:"@site/docs/\u5de5\u7a0b\u5316/webpack/webpack_2.md",sourceDirName:"\u5de5\u7a0b\u5316/webpack",slug:"/\u5de5\u7a0b\u5316/webpack/webpack_2",permalink:"/docs/\u5de5\u7a0b\u5316/webpack/webpack_2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5de5\u7a0b\u5316/webpack/webpack_2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webpack \u642d\u5efa",permalink:"/docs/\u5de5\u7a0b\u5316/webpack/webpack_1"},next:{title:"webpack \u9762\u8bd5\u77e5\u8bc6\u70b9\u8bb0\u5f55",permalink:"/docs/\u5de5\u7a0b\u5316/webpack/webpack_4"}},p={},o=[{value:"\u63a5\u4e0b\u6765\u6211\u4eec\u7ee7\u7eed \u6253\u5305 css \u548c \u56fe\u7247\u8d44\u6e90",id:"\u63a5\u4e0b\u6765\u6211\u4eec\u7ee7\u7eed-\u6253\u5305-css-\u548c-\u56fe\u7247\u8d44\u6e90",level:2},{value:"\u4fee\u6539 webpack.config.js entry \u53c2\u6570\uff1a",id:"\u4fee\u6539-webpackconfigjs-entry-\u53c2\u6570",level:3},{value:"\u4fee\u6539 main.js \u4e3a\uff1a",id:"\u4fee\u6539-mainjs-\u4e3a",level:3},{value:"css \u6587\u4ef6\u6253\u5305",id:"css-\u6587\u4ef6\u6253\u5305",level:2},{value:"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u5b89\u88c5 css \u6253\u5305\u76f8\u5173 loader",id:"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u5b89\u88c5-css-\u6253\u5305\u76f8\u5173-loader",level:3},{value:"\u5b89\u88c5\u5b8c\u4e4b\u540e \u5728 webpack.config.js \u4e2d\u914d\u7f6e loader",id:"\u5b89\u88c5\u5b8c\u4e4b\u540e-\u5728-webpackconfigjs-\u4e2d\u914d\u7f6e-loader",level:3},{value:"index.html \u6587\u4ef6\u65b0\u589e",id:"indexhtml-\u6587\u4ef6\u65b0\u589e",level:3},{value:"\u4fee\u6539 style.css \u5185\u5bb9",id:"\u4fee\u6539-stylecss-\u5185\u5bb9",level:3},{value:"\u56fe\u7247\u8d44\u6e90\u6253\u5305",id:"\u56fe\u7247\u8d44\u6e90\u6253\u5305",level:2},{value:"\u5b89\u88c5\u56fe\u7247\u76f8\u5173 loader",id:"\u5b89\u88c5\u56fe\u7247\u76f8\u5173-loader",level:3},{value:"webpack.config.js \u914d\u7f6e\u3002\u5728 module rules \u4e2d\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e\u4fe1\u606f\uff1a",id:"webpackconfigjs-\u914d\u7f6e\u5728-module-rules-\u4e2d\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e\u4fe1\u606f",level:3},{value:"<strong>\u5728\u6b64\u7279\u610f\u8865\u5145\u4e00\u4e0b\uff08\u6ce8\u610f\uff01\uff09</strong>",id:"\u5728\u6b64\u7279\u610f\u8865\u5145\u4e00\u4e0b\u6ce8\u610f",level:3},{value:"asset module",id:"asset-module",level:3},{value:"\u5bf9\u4e8e webpack5 \u6765\u8bf4\u76f4\u63a5\u4f7f\u7528 asset module\u3002\u63a5\u4e0b\u6765\u6211\u7528\u4f7f\u7528 asset module \u6765\u4fee\u6539\u914d\u7f6e\u3002",id:"\u5bf9\u4e8e-webpack5-\u6765\u8bf4\u76f4\u63a5\u4f7f\u7528-asset-module\u63a5\u4e0b\u6765\u6211\u7528\u4f7f\u7528-asset-module-\u6765\u4fee\u6539\u914d\u7f6e",level:4},{value:"\u4f7f\u7528 <strong>asset/inline</strong> \u6765\u4ee3\u66ff url-loader\u3002 rules \u65b0\u589e\u914d\u7f6e",id:"\u4f7f\u7528-assetinline-\u6765\u4ee3\u66ff-url-loader-rules-\u65b0\u589e\u914d\u7f6e",level:4},{value:"html-loader",id:"html-loader",level:3},{value:"rules: \u65b0\u589e",id:"rules-\u65b0\u589e",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:o};function i(e){let{components:a,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webpack-\u6253\u5305-css-\u548c\u56fe\u7247"},"webpack \u6253\u5305 css \u548c\u56fe\u7247"),(0,l.kt)("h2",{id:"\u63a5\u4e0b\u6765\u6211\u4eec\u7ee7\u7eed-\u6253\u5305-css-\u548c-\u56fe\u7247\u8d44\u6e90"},"\u63a5\u4e0b\u6765\u6211\u4eec\u7ee7\u7eed \u6253\u5305 css \u548c \u56fe\u7247\u8d44\u6e90"),(0,l.kt)("p",null,"\u6211\u4eec\u5148\u4fee\u6539\u76ee\u5f55\u589e\u52a0 css \u6587\u4ef6\u548c \u56fe\u7247\u8d44\u6e90"),(0,l.kt)("p",null,"src \u65b0\u5efa css \u76ee\u5f55 \u65b0\u589e style.css \u6587\u4ef6"),(0,l.kt)("p",null,"src \u65b0\u5efa img \u76ee\u5f55"),(0,l.kt)("p",null,"\u6211\u4eec\u672c\u6b21\u4fee\u6539\u4e86\u5165\u53e3\u6587\u4ef6\uff1a\nsrc \u4e0b\u65b0\u5efa main.js \u6211\u4eec\u63a5\u4e0b\u6765\u5c06 main.js \u4f5c\u4e3a\u6211\u4eec\u7684\u4e3b\u5165\u53e3\u6587\u4ef6"),(0,l.kt)("h3",{id:"\u4fee\u6539-webpackconfigjs-entry-\u53c2\u6570"},"\u4fee\u6539 webpack.config.js entry \u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"entry: './src/main.js', // \u5165\u53e3\u6587\u4ef6 \u8981\u6253\u5305\u7684\u6587\u4ef6\n")),(0,l.kt)("h3",{id:"\u4fee\u6539-mainjs-\u4e3a"},"\u4fee\u6539 main.js \u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u5f15\u5165js \u6587\u4ef6\nrequire("./js/index.js");\n\n// \u5f15\u5165 css\nrequire("./css/style.css");\n')),(0,l.kt)("h2",{id:"css-\u6587\u4ef6\u6253\u5305"},"css \u6587\u4ef6\u6253\u5305"),(0,l.kt)("h3",{id:"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u5b89\u88c5-css-\u6253\u5305\u76f8\u5173-loader"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u5b89\u88c5 css \u6253\u5305\u76f8\u5173 loader"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"style-loader"),"\n",(0,l.kt)("strong",{parentName:"p"},"css-loader")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install style-loader css-loader --save-dev\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5\u5b8c\u4e4b\u540e-\u5728-webpackconfigjs-\u4e2d\u914d\u7f6e-loader"},"\u5b89\u88c5\u5b8c\u4e4b\u540e \u5728 webpack.config.js \u4e2d\u914d\u7f6e loader"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    module: {\n        rules:[\n            {\n                test: /\\.css$/i,\n                use:['style-loader', 'css-loader']\n            }\n        ]\n    },\n\n")),(0,l.kt)("h3",{id:"indexhtml-\u6587\u4ef6\u65b0\u589e"},"index.html \u6587\u4ef6\u65b0\u589e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <h1>webpack</h1>\n</div>\n")),(0,l.kt)("h3",{id:"\u4fee\u6539-stylecss-\u5185\u5bb9"},"\u4fee\u6539 style.css \u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  color: red;\n  font-size: 12px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6267\u884c npm run build")),(0,l.kt)("img",{src:t(1601).Z}),(0,l.kt)("p",null,"\u7f16\u8bd1\u6210\u529f~"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u8fd0\u884c dist \u6587\u4ef6\u4e0b\u7684 index.html"),"\ncss \u6837\u6210\u529f\u663e\u793a\uff01"),(0,l.kt)("img",{src:t(54).Z}),(0,l.kt)("h2",{id:"\u56fe\u7247\u8d44\u6e90\u6253\u5305"},"\u56fe\u7247\u8d44\u6e90\u6253\u5305"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u56fe\u7247\u76f8\u5173-loader"},"\u5b89\u88c5\u56fe\u7247\u76f8\u5173 loader"),(0,l.kt)("p",null,"url-loader\nfile-loader"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install url-loader --save-dev\n")),(0,l.kt)("h3",{id:"webpackconfigjs-\u914d\u7f6e\u5728-module-rules-\u4e2d\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e\u4fe1\u606f"},"webpack.config.js \u914d\u7f6e\u3002\u5728 module rules \u4e2d\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'     // \u6253\u5305\u56fe\u7247 \u7528\u5230 url-loader\n            {\n                test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,\n                use: {\n                    loader: "url-loader",\n                    options: {\n                        esModule: false,   //\n                        name: "img/[name].[hash:5].[ext]",\n                        limit: 1024,\n                        publicpath: "../img/"\n                    }\n                },\n                type: "javascript/auto"    // webpack5 \u6253\u5305 \u5fc5\u987b\u91c7\u7528 \u8fd9\u91cc\u8981\u6ce8\u610f\n            }\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6253\u5305\u8f93\u51fa\u6587\u4ef6\u3002dist/img/ \u751f\u6210\u56fe\u7247\u6587\u4ef6\u3002")),(0,l.kt)("img",{src:t(3080).Z}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9875\u9762\u4e2d\u6b63\u5e38\u5f15\u7528\u5e76\u663e\u793a\u3002")),(0,l.kt)("img",{src:t(1834).Z}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee5\u4e0a\u4e3a webpack 5 \u6b63\u786e\u7684\u914d\u7f6e\u4fe1\u606f\u3002")),(0,l.kt)("h3",{id:"\u5728\u6b64\u7279\u610f\u8865\u5145\u4e00\u4e0b\u6ce8\u610f"},(0,l.kt)("strong",{parentName:"h3"},"\u5728\u6b64\u7279\u610f\u8865\u5145\u4e00\u4e0b\uff08\u6ce8\u610f\uff01\uff09")),(0,l.kt)("p",null,"\u5728 webpack \u4e00\u5f00\u59cb\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u77e5\u9053 webpack5 \u4e22\u5f03\u4e86 url-loader \u3002\u6240\u4ee5\u5982\u679c\u6211\u4eec\u5728 webpack5 \u4e2d\u4f7f\u7528 url-loader \u5c31\u8981\u505a\u4ee5\u4e0b\u914d\u7f6e\n\u914d\u7f6e\u7684\u4fe1\u606f\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    // \u6253\u5305\u56fe\u7247 \u7528\u5230 url-loader\n           {\n               test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,\n               use: {\n                   loader: "url-loader",\n                   options: {\n                       esModule: false,   //\n                       name: "img/[name].[hash:5].[ext]",\n                       limit: 1024\n                   }\n               }\n           }\n\n')),(0,l.kt)("p",null,"\u6253\u5305\u540e\u5728 dist \u4e2d\u751f\u6210\u4e86\u4e24\u4e2a\u56fe\u7247\u8def\u5f84\u3002img \u6587\u4ef6\u4e0b\u3002\u6839\u76ee\u5f55\u4e0b\u4e00\u4e2a\u3002\u6309\u7167\u54b1\u4eec\u6b63\u5e38\u7684 css \u5f15\u7528\u8def\u5f84\u5e94\u8be5\u91c7\u7528 img \u6587\u4ef6\u76ee\u5f55\u4e0b\u7684\u56fe\u7247\u3002"),(0,l.kt)("img",{src:t(9574).Z}),(0,l.kt)("p",null,"\u8fd0\u884c index.html \u6587\u4ef6\u3002\u53d1\u73b0\u5f15\u7528\u7684\u8def\u5f84\u4e3a dist \u4e0b\u7684\u56fe\u7247\u8def\u5f84\u3002\u5e76\u4e14\u9875\u9762\u4e5f\u6ca1\u6b63\u5e38\u663e\u793a\u3002"),(0,l.kt)("img",{src:t(8691).Z}),(0,l.kt)("p",null,"....."),(0,l.kt)("p",null,"\u7136\u540e\u53bb\u67e5\u8be2\u4e86 webpack \u6587\u6863\u3002\u6587\u6863\u4e2d\u8868\u793a\u5728 webpack \u4e2d\u5df2\u7ecf\u4e22\u5f03 url-loader"),(0,l.kt)("img",{src:t(3353).Z}),(0,l.kt)("p",null,"....."),(0,l.kt)("img",{src:t(6871).Z}),(0,l.kt)("p",null,"\u5230\u8fd9\u91cc\u80fd\u591f\u5b8c\u5168\u6b63\u5e38\u6253\u5305 css \u56fe\u7247\u4e86\u3002\u4f46\u662f\u5bf9\u4e8e webpack5 \u6765\u8bf4\uff0c\u8fd9\u79cd\u5199\u6cd5\u662f webpack5 \u517c\u5bb9 url-loader \u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"asset-module"},"asset module"),(0,l.kt)("h4",{id:"\u5bf9\u4e8e-webpack5-\u6765\u8bf4\u76f4\u63a5\u4f7f\u7528-asset-module\u63a5\u4e0b\u6765\u6211\u7528\u4f7f\u7528-asset-module-\u6765\u4fee\u6539\u914d\u7f6e"},"\u5bf9\u4e8e webpack5 \u6765\u8bf4\u76f4\u63a5\u4f7f\u7528 asset module\u3002\u63a5\u4e0b\u6765\u6211\u7528\u4f7f\u7528 asset module \u6765\u4fee\u6539\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u8d44\u6e90\u6a21\u5757\u7c7b\u578b(asset module type)\uff0c\u901a\u8fc7\u6dfb\u52a0 4 \u79cd\u65b0\u7684\u6a21\u5757\u7c7b\u578b\uff0c\u6765\u66ff\u6362\u6240\u6709\u8fd9\u4e9b loader\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"asset/resource \u53d1\u9001\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u5e76\u5bfc\u51fa URL\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 file-loader \u5b9e\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"asset/inline \u5bfc\u51fa\u4e00\u4e2a\u8d44\u6e90\u7684 data URI\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 url-loader \u5b9e\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"asset/source \u5bfc\u51fa\u8d44\u6e90\u7684\u6e90\u4ee3\u7801\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 raw-loader \u5b9e\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"asset \u5728\u5bfc\u51fa\u4e00\u4e2a data URI \u548c\u53d1\u9001\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e4b\u95f4\u81ea\u52a8\u9009\u62e9\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 url-loader\uff0c\u5e76\u4e14\u914d\u7f6e\u8d44\u6e90\u4f53\u79ef\u9650\u5236\u5b9e\u73b0\u3002")),(0,l.kt)("h4",{id:"\u4f7f\u7528-assetinline-\u6765\u4ee3\u66ff-url-loader-rules-\u65b0\u589e\u914d\u7f6e"},"\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"h4"},"asset/inline")," \u6765\u4ee3\u66ff url-loader\u3002 rules \u65b0\u589e\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"      rules:[\n            {\n                test: /\\.css$/i,\n                use:['style-loader', 'css-loader']\n            },\n            // {\n            //     test: /\\.(png|jpe?g|gif|svg)$/,\n            //     use: {\n            //         loader: \"url-loader\",\n            //         options: {\n            //             esModule: false,   // \u4f7f\u7528es \u6a21\u677f\u8bed\u6cd5 \u9ed8\u8ba4 true\n            //             name: \"img/[name].[hash:5].[ext]\",\n            //             limit: 1024\n            //         }\n            //     },\n            //     type: \"javascript/auto\"\n            // }\n\n            //asset module \u914d\u7f6e\n            {\n              test: /\\.jpg/,\n              type: 'asset/inline'\n           }\n        ]\n\n")),(0,l.kt)("p",null,"\u597d\u4e86\u5c31\u8fd9\u4e48\u7b80\u5355\u3002\u6211\u4eec\u63a5\u4e0b\u6765\u770b\u4e0b\u6548\u679c\u3002\u6587\u4ef6\u8f93\u51fa\u4e2d\u6ca1\u6709\u4e86\u56fe\u7247\u6587\u4ef6\u3002\u9875\u9762\u80fd\u6b63\u5e38\u663e\u793a\u56fe\u7247\u5417\uff1f"),(0,l.kt)("img",{src:t(7989).Z}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd0\u884c index.html")),(0,l.kt)("img",{src:t(6489).Z}),(0,l.kt)("p",null,"asset/inline \u5c06\u56fe\u7247\u8d44\u6e90\u8f6c\u6362\u6210\u7acb base64 \u5e76\u6253\u5305\u5230\u4e86 main.js \u4e2d\u3002\n\u597d\u4e86\u8fd9\u4e2a\u65f6\u5019 css \u80cc\u666f\u56fe\u7247\u53ef\u4ee5\u6b63\u5e38\u6253\u5305\u4e86\u3002\n\u63a5\u4e0b\u6765\u5982\u679c\u73b0\u5728\u6211\u5728 index.html \u76f4\u63a5\u5f15\u7528\u56fe\u7247\u6765\u6253\u5305\u3002\u6211\u4eec\u5c06\u4f7f\u7528 html-loader \u8fdb\u884c\u6253\u5305\u3002"),(0,l.kt)("h3",{id:"html-loader"},"html-loader"),(0,l.kt)("p",null,"\u5c06 HTML \u5bfc\u51fa\u4e3a\u5b57\u7b26\u4e32\u3002\u5f53\u7f16\u8bd1\u5668\u9700\u8981\u65f6\uff0c\u5c06\u538b\u7f29 HTML \u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    npm install --save-dev html-loader\n")),(0,l.kt)("h4",{id:"rules-\u65b0\u589e"},"rules: \u65b0\u589e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'     {\n            test: /\\.html$/i,\n            loader: "html-loader",\n\n        }\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u6253\u5305")),(0,l.kt)("img",{src:t(6677).Z}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9875\u9762\u4e5f\u6b63\u5e38\u663e\u793a")),(0,l.kt)("img",{src:t(6170).Z}),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webpack5 \u9057\u5f03\u4e86 url-loader \u7684\u652f\u6301\u3002\u7edf\u4e00\u91c7\u7528 asset module \u4ee3\u66ff\u3002"),(0,l.kt)("li",{parentName:"ul"},"html \u4e2d\u7684\u56fe\u7247\u5f15\u5165\u8bf7\u4f7f\u7528 html-loader\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u53d1\u73b0\u4e00\u4e2a\u95ee\u9898 html-loader \u548c html-webpack-plugin \u6709\u51b2\u7a81\u3002\u5bfc\u81f4 title \u5931\u6548\u3002")))}i.isMDXComponent=!0},1601:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/175ef97e31a47be38be8809ebf2d27d-f769c9d57c0bdecc75ede7e5e1394b6c.png"},1834:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1c6887070ad7bf09841e86ba66db872-8fdbffdb6c2d8a11ac4e56f16b80f475.png"},54:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/6a2ea495ac14542b741c1eff1790108-18de5c32781869a2f08a43478cdfb8f7.png"},9574:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/84541e98785a36e08a216db60a89ba8-212a2bf4880682ab6a24e896397ace55.png"},8691:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/86bc635da0e40f886f1b96a4c0ac50c-60ebea33d2a161f4a15330ae9bdf59f4.png"},6170:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/b1146c615fd85d72b903412ad389709-f7215734415c1289738b4897c66444cd.png"},6489:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ca9baf8cc61a504770a0a614a17385a-b3ae002c0bf6f7341da47878796c1084.png"},3080:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/d00906b4c01fd9cd33db44de01b0fef-d17e20764e2a12b6b82f97ba1255c3a7.png"},6871:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/e257f88107c5d21c7107ffea91d4cf3-6901812ab0346a9fa417babab51b522b.png"},6677:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/e779af9c846ac7692e3acd6128569a2-8243aba40ea9627eb90a91d31afa7dba.png"},7989:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ee9d67e00a5da0f2a01fac737f48595-ab321117ef070f480f7f0490c3bf2ead.png"},3353:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/f3c62da2e8861c4cde9ccd70847eeea-4777ec731828516da00e4d73fe691bad.png"}}]);