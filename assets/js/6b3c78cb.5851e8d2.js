"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=o(n),N=r,g=u["".concat(d,".").concat(N)]||u[N]||m[N]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4320:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},assets:function(){return k},toc:function(){return m},default:function(){return N}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},d="webpack-bundle-analyzer",o={unversionedId:"\u5de5\u7a0b\u5316/webpack/webpack-bundle-analyzer",id:"\u5de5\u7a0b\u5316/webpack/webpack-bundle-analyzer",title:"webpack-bundle-analyzer",description:"\u6253\u5305\u5206\u6790\u56fe\u53ef\u89c6\u5316",source:"@site/docs\\\u5de5\u7a0b\u5316\\webpack\\webpack-bundle-analyzer.md",sourceDirName:"\u5de5\u7a0b\u5316/webpack",slug:"/\u5de5\u7a0b\u5316/webpack/webpack-bundle-analyzer",permalink:"/y-blog/docs/\u5de5\u7a0b\u5316/webpack/webpack-bundle-analyzer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5de5\u7a0b\u5316/webpack/webpack-bundle-analyzer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"npm\u5305\u7ba1\u7406\u5668\u4ecb\u7ecd",permalink:"/y-blog/docs/\u5de5\u7a0b\u5316/npm/npm\u4ecb\u7ecd"},next:{title:"webpack \u642d\u5efa",permalink:"/y-blog/docs/\u5de5\u7a0b\u5316/webpack/webpack_1"}},k={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u53c2\u6570 options ? \u53ef\u9009",id:"\u53c2\u6570-options--\u53ef\u9009",level:2}],u={toc:m};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webpack-bundle-analyzer"},"webpack-bundle-analyzer"),(0,l.kt)("p",null,"\u6253\u5305\u5206\u6790\u56fe\u53ef\u89c6\u5316\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"webpack-bundle-analyzer")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"# NPM\n    npm install --save-dev webpack-bundle-analyzer\n# Yarn\n    yarn add -D webpack-bundle-analyzer\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"webpack.config.ts \u91c7\u7528 ts \u6587\u4ef6\u3002\u6267\u884c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    npm i --save-dev @types/webpack-bundle-analyzer\n")),(0,l.kt)("p",null,"webpack.config.ts \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},'...\nimport {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";\n\n  plugins: [\n    ...\n\n    new BundleAnalyzerPlugin()\n\n    ...\n  ]\n')),(0,l.kt)("h2",{id:"\u53c2\u6570-options--\u53ef\u9009"},"\u53c2\u6570 options ? \u53ef\u9009"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"new BundleAnalyzerPlugin(options?: object)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"analyzerMode"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e4b\u4e00\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"server"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"static"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"json"),",",(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"server"),"\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"server"),"\u6a21\u5f0f\u5206\u6790\u5668\u5c06\u542f\u52a8 HTTP \u670d\u52a1\u5668\u4ee5\u663e\u793a\u6346\u7ed1\u62a5\u544a\u3002 ",(0,l.kt)("br",null),"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"static"),"\u6a21\u5f0f\u4e0b\uff0c\u5c06\u751f\u6210\u5e26\u6709\u6346\u7ed1\u62a5\u544a\u7684\u5355\u4e2a HTML \u6587\u4ef6\u3002",(0,l.kt)("br",null),"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"json"),"\u6a21\u5f0f\u4e0b\uff0c\u5c06\u751f\u6210\u5e26\u6709\u6346\u7ed1\u62a5\u544a\u7684\u5355\u4e2a JSON \u6587\u4ef6\u3002\u5728\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u901a\u8fc7\u8bbe\u7f6e\u4e3a\u6765",(0,l.kt)("inlineCode",{parentName:"td"},"disabled"),"\u751f\u6210 Webpack Stats JSON \u6587\u4ef6\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"generateStatsFile``true")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"analyzerHost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{String}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"127.0.0.1"),"\u3002\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"server"),"\u6a21\u5f0f\u4e0b\u7528\u4e8e\u542f\u52a8 HTTP \u670d\u52a1\u5668\u7684\u4e3b\u673a\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"analyzerPort"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{Number}"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"td"},"auto")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"8888"),"\u3002\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"server"),"\u6a21\u5f0f\u4e0b\u7528\u4e8e\u542f\u52a8 HTTP \u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"reportFilename"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{String}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"report.html"),"\u3002\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"static"),"\u6a21\u5f0f\u4e0b\u751f\u6210\u7684\u6346\u7ed1\u62a5\u544a\u6587\u4ef6\u7684\u8def\u5f84\u3002\u5b83\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u76f8\u5bf9\u4e8e\u6346\u7ed1\u8f93\u51fa\u76ee\u5f55\u7684\u8def\u5f84\uff08\u5728 webpack \u914d\u7f6e\u4e2d\u662f output.path\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"reportTitle"))),(0,l.kt)("td",{parentName:"tr",align:null},"`{String"),(0,l.kt)("td",{parentName:"tr",align:null},"function}`"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a\u8fd4\u56de\u6f02\u4eae\u6253\u5370\u7684\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\u7684\u51fd\u6570\u3002HTML",(0,l.kt)("inlineCode",{parentName:"td"},"title"),"\u5143\u7d20\u7684\u5185\u5bb9\uff1b\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"() => string"),"\u63d0\u4f9b\u5185\u5bb9\u7684\u5f62\u5f0f\u7684\u529f\u80fd\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultSizes"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e4b\u4e00\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"stat"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"parsed"),",",(0,l.kt)("inlineCode",{parentName:"td"},"gzip")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"parsed"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5728\u62a5\u544a\u4e2d\u663e\u793a\u7684\u6a21\u5757\u5927\u5c0f\u3002",(0,l.kt)("a",{parentName:"td",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer#size-definitions"},"\u5c3a\u5bf8\u5b9a\u4e49"),"\u90e8\u5206\u63cf\u8ff0\u4e86\u8fd9\u4e9b\u503c\u7684\u542b\u4e49\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"openAnalyzer"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{Boolean}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u3002\u5728\u9ed8\u8ba4\u6d4f\u89c8\u5668\u4e2d\u81ea\u52a8\u6253\u5f00\u62a5\u544a\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"generateStatsFile"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{Boolean}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", webpack stats JSON \u6587\u4ef6\u5c06\u5728 bundle \u8f93\u51fa\u76ee\u5f55\u4e2d\u751f\u6210"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"statsFilename"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{String}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"stats.json"),"\u3002\u5c06\u751f\u6210\u7684 webpack stats JSON \u6587\u4ef6\u7684\u540d\u79f0\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"td"},"generateStatsFile"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"true"),". \u5b83\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u76f8\u5bf9\u4e8e\u6346\u7ed1\u8f93\u51fa\u76ee\u5f55\u7684\u8def\u5f84\uff08\u5728 webpack \u914d\u7f6e\u4e2d\u662f output.path\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"statsOptions"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"td"},"{Object}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"null"),"\u3002\u65b9\u6cd5\u7684\u9009\u9879",(0,l.kt)("inlineCode",{parentName:"td"},"stats.toJson()"),"\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"source: false"),"\u9009\u9879\u4ece\u7edf\u8ba1\u6587\u4ef6\u4e2d\u6392\u9664\u6a21\u5757\u7684\u6765\u6e90\u3002",(0,l.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/stats/"},"\u5728\u6b64\u5904\u67e5\u770b\u66f4\u591a\u9009\u9879"),"\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"excludeAssets"))),(0,l.kt)("td",{parentName:"tr",align:null},"`{null"),(0,l.kt)("td",{parentName:"tr",align:null},"pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"pattern[]}",(0,l.kt)("inlineCode",{parentName:"td"},"\u5176\u4e2d"),"pattern",(0,l.kt)("inlineCode",{parentName:"td"},"\u7b49\u4e8e"),"{String"),(0,l.kt)("td",{parentName:"tr",align:null},"RegExp"),(0,l.kt)("td",{parentName:"tr",align:null},"function}`"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"null"),"\u3002\u5c06\u7528\u4e8e\u5339\u914d\u8d44\u4ea7\u540d\u79f0\u4ee5\u5c06\u5176\u4ece\u62a5\u544a\u4e2d\u6392\u9664\u7684\u6a21\u5f0f\u3002\u5982\u679c pattern \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5b83\u5c06\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"td"},"new RegExp(str)"),". \u5982\u679c\u6a21\u5f0f\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5e94\u8be5\u5177\u6709\u4ee5\u4e0b\u7b7e\u540d",(0,l.kt)("inlineCode",{parentName:"td"},"(assetName: string) => boolean"),"\u5e76\u4e14\u5e94\u8be5\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u6392\u9664",(0,l.kt)("em",{parentName:"td"},"\u5339\u914d"),"\u7684\u8d44\u4ea7\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u591a\u4e2a\u6a21\u5f0f\uff0c\u8d44\u4ea7\u5e94\u81f3\u5c11\u5339\u914d\u5176\u4e2d\u4e00\u4e2a\u4ee5\u88ab\u6392\u9664\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"logLevel"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e4b\u4e00\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"warn"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"error"),",",(0,l.kt)("inlineCode",{parentName:"td"},"silent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"info"),"\u3002\u7528\u4e8e\u63a7\u5236\u63d2\u4ef6\u8f93\u51fa\u591a\u5c11\u7ec6\u8282\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);