"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6199],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,v=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(v,c(c({ref:r},p),{},{components:t})):n.createElement(v,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8740:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={},u="node\u6587\u4ef6\u6253\u5305",l={unversionedId:"\u5de5\u7a0b\u5316/node/archiver",id:"\u5de5\u7a0b\u5316/node/archiver",title:"node\u6587\u4ef6\u6253\u5305",description:"archiver",source:"@site/docs/\u5de5\u7a0b\u5316/node/archiver.md",sourceDirName:"\u5de5\u7a0b\u5316/node",slug:"/\u5de5\u7a0b\u5316/node/archiver",permalink:"/blog/docs/\u5de5\u7a0b\u5316/node/archiver",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5de5\u7a0b\u5316/node/archiver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Robots",permalink:"/blog/docs/\u5de5\u7a0b\u5316/node/Robots"},next:{title:"koa2",permalink:"/blog/docs/\u5de5\u7a0b\u5316/koa/"}},p={},s=[{value:"archiver",id:"archiver",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7f16\u5199\u6587\u4ef6",id:"\u7f16\u5199\u6587\u4ef6",level:2}],d={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node\u6587\u4ef6\u6253\u5305"},"node\u6587\u4ef6\u6253\u5305"),(0,a.kt)("h2",{id:"archiver"},"archiver"),(0,a.kt)("p",null,"npm ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-archiver"},"https://www.npmjs.com/package/node-archiver")),(0,a.kt)("p",null,"\u4ee5\u6570\u636e\u6d41\u7684\u5f62\u5f0f \u5bf9\u6587\u4ef6\u8fdb\u884c\u538b\u7f29"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install archiver --save\n")),(0,a.kt)("h2",{id:"\u7f16\u5199\u6587\u4ef6"},"\u7f16\u5199\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    // \u7b2c\u4e00\u6b65\uff0c\u5bfc\u5165\u5fc5\u8981\u7684\u6a21\u5757\n    const fs = require('fs');\n    const archiver = require('archiver');\n\n    // \u7b2c\u4e8c\u6b65\uff0c\u521b\u5efa\u53ef\u5199\u6d41\u6765\u5199\u5165\u6570\u636e\n    const output = fs.createWriteStream(__dirname + \"/hello.zip\");// \u5c06\u538b\u7f29\u5305\u4fdd\u5b58\u5230\u5f53\u524d\u9879\u76ee\u7684\u76ee\u5f55\u4e0b\uff0c\u5e76\u4e14\u538b\u7f29\u5305\u540d\u4e3atest.zip\n    const archive = archiver('zip', {zlib: {level: 9}});// \u8bbe\u7f6e\u538b\u7f29\u7b49\u7ea7\n\n    // \u7b2c\u4e09\u6b65\uff0c\u5efa\u7acb\u7ba1\u9053\u8fde\u63a5\n    archive.pipe(output);\n\n    // \u7b2c\u56db\u6b65\uff0c\u538b\u7f29\u76ee\u5f55\u5230\u538b\u7f29\u5305\u4e2d\n    archive.directory('route/', false);\n\n    // \u7b2c\u4e94\u6b65\uff0c\u5b8c\u6210\u538b\u7f29\n    archive.finalize();\n")),(0,a.kt)("p",null,"ok ~"))}f.isMDXComponent=!0}}]);