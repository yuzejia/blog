"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5681],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,v=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},534:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},l="JS | \u76d1\u542clocalStorage",u={unversionedId:"\u524d\u7aef/javaScript/localStorage",id:"\u524d\u7aef/javaScript/localStorage",title:"JS | \u76d1\u542clocalStorage",description:"\u91cd\u5199 setItem \u65b9\u6cd5\u8fdb\u884c\u76d1\u542c\u64cd\u4f5c",source:"@site/docs\\\u524d\u7aef\\javaScript\\localStorage.md",sourceDirName:"\u524d\u7aef/javaScript",slug:"/\u524d\u7aef/javaScript/localStorage",permalink:"/y-blog/docs/\u524d\u7aef/javaScript/localStorage",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef/javaScript/localStorage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JS | \u5f3a\u5236\u7c7b\u578b\u8f6c\u6362",permalink:"/y-blog/docs/\u524d\u7aef/javaScript/js-type-conversion"},next:{title:"map",permalink:"/y-blog/docs/\u524d\u7aef/javaScript/map"}},p={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js--\u76d1\u542clocalstorage"},"JS | \u76d1\u542clocalStorage"),(0,o.kt)("p",null,"\u91cd\u5199 setItem \u65b9\u6cd5\u8fdb\u884c\u76d1\u542c\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javaScript"},'var orignalSetItem = localStorage.setItem;\n\n   localStorage.setItem = function(key,newValue){\n\n       var setItemEvent = new Event("setItemEvent");\n       setItemEvent.key=key;\n       setItemEvent.newValue = newValue;\n       window.dispatchEvent(setItemEvent);\n       orignalSetItem.apply(this,arguments);\n   }\n')))}f.isMDXComponent=!0}}]);