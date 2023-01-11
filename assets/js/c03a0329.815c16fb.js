"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"manifest.json \u8bf4\u660e",date:new Date("2021-12-13T00:00:00.000Z"),categories:["Google"],tags:["Google-Plugin"]},i="manifest.json\u914d\u7f6e\u8bf4\u660e",s={unversionedId:"chrome/manifest",id:"chrome/manifest",title:"manifest.json \u8bf4\u660e",description:"manifest.json \u6587\u4ef6\u662fGoogle\u5728\u8bc6\u522b\u63d2\u4ef6\u65f6\u7684\u552f\u4e00\u6807\u8bc6",source:"@site/docs/chrome/manifest.md",sourceDirName:"chrome",slug:"/chrome/manifest",permalink:"/blog/docs/chrome/manifest",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chrome/manifest.md",tags:[{label:"Google-Plugin",permalink:"/blog/docs/tags/google-plugin"}],version:"current",frontMatter:{title:"manifest.json \u8bf4\u660e",date:"2021-12-13T00:00:00.000Z",categories:["Google"],tags:["Google-Plugin"]},sidebar:"tutorialSidebar",previous:{title:"FunDebug",permalink:"/blog/docs/optimize/\u76d1\u63a7"},next:{title:"manifestV3",permalink:"/blog/docs/chrome/manifestV3"}},c={},l=[{value:"run_at",id:"run_at",level:3}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manifestjson\u914d\u7f6e\u8bf4\u660e"},"manifest.json\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("p",null,"manifest.json \u6587\u4ef6\u662fGoogle\u5728\u8bc6\u522b\u63d2\u4ef6\u65f6\u7684\u552f\u4e00\u6807\u8bc6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "webpack-google-ts",              // \u63d2\u4ef6\u540d\u79f0\n    "description": "webpack-google-ts init",  // \u63d2\u4ef6\u8bf4\u660e\n    "version": "1.0.1",                       // \u63d2\u4ef6\u7248\u672c\n    "manifest_version": 2,                    //  manifest\u6587\u4ef6\u7248\u672c\u53f7\u3002Chrome18\u5f00\u59cb\u5fc5\u987b\u4e3a2\n     "icons": {\n       "16": "image/icon-16.png",\n       "48": "image/icon-48.png",\n       "128": "image/icon-128.png"\n    },                                        //\u6269\u5c55\u56fe\u6807\u3002\u63a8\u8350\u5927\u5c0f16\uff0c48\uff0c12\n\n    "browser_action": {\n        "default_popup": "./html/index.html"     // \u70b9\u51fb\u63d2\u4ef6\u56fe\u6807\u663e\u793a\u7684\u9875\u9762\n    },\n\n    // \u6307\u5b9a\u6269\u5c55\u8fdb\u7a0b background \u7684\u8fd0\u884c\u73af\u5883\n    "background": {\n        "scripts": ["./js/bg.js"],               // background \u6ce8\u5165\u7684js \u6269\u5c55\n        "persistent": true\n    },\n   \n\n    "content_security_policy": "script-src \'self\' \'unsafe-eval\'; object-src \'self\'",\n    "content_scripts": [{\n\n        // \u6307\u5b9a \u53ef\u6ce8\u5165\u811a\u672c\u7684web\u7f51\u9875\n        "matches": [\n            "https://www.baidu.com/*"\n        ],\n\n        // \u6307\u5b9a\u7f51\u9875\u6ce8\u5165\u7684\u811a\u672c\n        "js": [\n            "./js/content.js"\n        ],\n        // \u6307\u5b9a content_scripts\u7684\u6ce8\u5165\u65f6\u673a  \u89c1\uff1arun_at \u8bf4\u660e\n        "run_at": "document_end"\n    }],\n    // //\u6743\u9650\n    "permissions": [\n        "tabs"\n\n    ],\n}\n')),(0,o.kt)("h3",{id:"run_at"},"run_at"),(0,o.kt)("p",null,"\u53ef\u9009  \u6307\u5b9a content_scripts\u7684\u6ce8\u5165\u65f6\u673a\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"document_start\uff1a\u6240\u6709css\u52a0\u8f7d\u5b8c\u6bd5\uff0c\u4f46DOM\u5c1a\u672a\u521b\u5efa\u65f6\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"document_end\uff1aDOM\u521b\u5efa\u5b8c\u6210\uff0c\u4f46\u56fe\u7247\u53caframe\u7b49\u5b50\u8d44\u6e90\u5c1a\u672a\u52a0\u8f7d\u65f6\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"document_idle\uff1adocument_end\u4e4b\u540e\uff0cwindow.onload\u4e4b\u524d\u3002"))))}p.isMDXComponent=!0}}]);