"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=i(r),s=a,k=u["".concat(o,".").concat(s)]||u[s]||m[s]||p;return r?n.createElement(k,l(l({ref:t},f),{},{components:r})):n.createElement(k,l({ref:t},f))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const p={},l="JS | reflect",c={unversionedId:"\u524d\u7aef/javaScript/reflect",id:"\u524d\u7aef/javaScript/reflect",title:"JS | reflect",description:"Reflect\u5bf9\u8c61\u662f\u4e00\u4e2a\u5168\u5c40\u7684\u666e\u901a\u7684\u5bf9\u8c61\u3002Reflect\u7684\u539f\u578b\u5c31\u662fObject.",source:"@site/docs/\u524d\u7aef/javaScript/reflect.md",sourceDirName:"\u524d\u7aef/javaScript",slug:"/\u524d\u7aef/javaScript/reflect",permalink:"/blog/docs/\u524d\u7aef/javaScript/reflect",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef/javaScript/reflect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JS | MutationObserver",permalink:"/blog/docs/\u524d\u7aef/javaScript/mutationObserver"},next:{title:"JS | stringify",permalink:"/blog/docs/\u524d\u7aef/javaScript/stringify"}},o={},i=[{value:"Reflect \u5c5e\u6027\u65b9\u6cd5",id:"reflect-\u5c5e\u6027\u65b9\u6cd5",level:2},{value:"Object.freeze()",id:"objectfreeze",level:2},{value:"\u6df1\u51bb\u7ed3",id:"\u6df1\u51bb\u7ed3",level:3},{value:"Object.getOwnPropertyNames()",id:"objectgetownpropertynames",level:3},{value:"Object.freeze \u6027\u80fd\u4f18\u5316",id:"objectfreeze-\u6027\u80fd\u4f18\u5316",level:2},{value:"javascript\u5bf9\u8c61\u89e3\u51bb",id:"javascript\u5bf9\u8c61\u89e3\u51bb",level:2},{value:"\u9501\u5b9a\u5bf9\u8c61\u7684\u65b9\u6cd5",id:"\u9501\u5b9a\u5bf9\u8c61\u7684\u65b9\u6cd5",level:2},{value:"Object.preventExtensions()",id:"objectpreventextensions",level:3},{value:"Object.seal()",id:"objectseal",level:3},{value:"Object.freeze()",id:"objectfreeze-1",level:3}],f={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js--reflect"},"JS | reflect"),(0,a.kt)("p",null,"Reflect\u5bf9\u8c61\u662f\u4e00\u4e2a\u5168\u5c40\u7684\u666e\u901a\u7684\u5bf9\u8c61\u3002Reflect\u7684\u539f\u578b\u5c31\u662fObject."),(0,a.kt)("p",null,"Reflect\u662fES6\u4e3a\u4e86\u64cd\u4f5c\u5bf9\u8c61\u800c\u65b0\u589e\u7684API, \u4e3a\u4ec0\u4e48\u8981\u6dfb\u52a0Reflect\u5bf9\u8c61\u5462\uff1f\u5b83\u8fd9\u6837\u8bbe\u8ba1\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u4ec0\u4e48\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06Object\u5bf9\u8c61\u7684\u4e00\u4e9b\u660e\u663e\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5(\u6bd4\u5982Object.defineProperty)\uff0c\u653e\u5230Reflect\u5bf9\u8c61\u4e0a\uff0c\u90a3\u4e48\u4ee5\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u4eceReflect\u5bf9\u8c61\u4e0a\u53ef\u4ee5\u62ff\u5230\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4f7f\u7528\u5bf9\u8c61\u7684 Object.defineProperty(obj, name, {})\u65f6\uff0c\u5982\u679c\u51fa\u73b0\u5f02\u5e38\u7684\u8bdd\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u9700\u8981\u4f7f\u7528try catch\u53bb\u6355\u83b7\uff0c\u4f46\u662f\u4f7f\u7528 Reflect.defineProperty(obj, name, desc) \u5219\u4f1a\u8fd4\u56defalse\u3002"))),(0,a.kt)("h2",{id:"reflect-\u5c5e\u6027\u65b9\u6cd5"},"Reflect \u5c5e\u6027\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.get(target, name, receiver)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8bfb\u53d6\u5bf9\u8c61\u5c5e\u6027\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.set(target,name,value,receiver)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8bbe\u7f6e\u5bf9\u8c61\u5c5e\u6027\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.apply(target,thisArg,args)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u7684\u542b\u4e49\u662f\uff1a\u901a\u8fc7\u6307\u5b9a\u7684\u53c2\u6570\u5217\u8868\u5bf9\u8be5\u76ee\u6807\u51fd\u6570\u7684\u8c03\u7528\u3002\u8be5\u65b9\u6cd5\u7c7b\u4f3c\u4e8e\u6211\u4eec\u4e4b\u524d\u7684 Function.prototype.apply \u65b9\u6cd5\u7684\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.construct(target,args","[, newTarget]",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.defineProperty(target,name,desc)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u4e0eObject.defineProperty\u65b9\u6cd5\u7c7b\u4f3c\u7684\uff0c\u4e0d\u8fc7\u552f\u4e00\u7684\u533a\u522b\u662f Reflect.defineProperty\u8fd4\u56de\u503c\u662f\u4e00\u4e2aBoolean\u7684\u503c\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.deleteProperty(target,name)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u7528\u4e8e\u5220\u9664\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\uff0c\u5b83\u548cdelete\u64cd\u4f5c\u7b26\u7c7b\u4f3c\u7684\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.has(target,name)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u7684\u542b\u4e49\u662f\uff1a\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u662f\u5426\u542b\u6709\u7279\u5b9a\u7684\u5c5e\u6027\u3002\u76f8\u5f53\u4e8ees5\u4e2d\u7684in\u64cd\u4f5c\u7b26\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.ownKeys(target)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u51fd\u6570\u7684\u4f5c\u7528\u662f\uff1a\u8fd4\u56de\u7531\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027\u952e\u7ec4\u6210\u7684\u6570\u7ec4\u3002\u5982\u679c\u8fd9\u4e2a\u76ee\u6807\u5bf9\u8c61\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u8bdd\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u5c31\u4f1a\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.preventExtensions(target)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u963b\u6b62\u65b0\u7684\u5c5e\u6027\u6dfb\u52a0\u5230\u5bf9\u8c61\u4e2d\u53bb\u3002target\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5426\u5219\u7684\u8bdd\u4f1a\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.isExtensible(target)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u53ef\u4ee5\u6269\u5c55\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u5bf9\u8c61\u91cc\u9762\u662f\u5426\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.getOwnPropertyDescriptor(target, name)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u7684\u53c2\u6570\u5982\u4e0b\u89e3\u6790\uff1a\n  target: \u8868\u793a\u7684\u662f\u76ee\u6807\u5bf9\u8c61\u3002\n  name\uff1a \u8868\u793a\u76ee\u6807\u5bf9\u8c61\u7684\u5c5e\u6027\n  \u8be5\u65b9\u6cd5\u7684\u5177\u4f53\u542b\u4e49\u662f\uff1a\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u5b58\u5728\u7684\u8bdd\uff0c\u5c31\u8fd4\u56de\u8fd9\u4e2a\u5c5e\u6027\u63cf\u8ff0\u7b26\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c31\u8fd4\u56deundefined\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.getPrototypeOf(target)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"   \u8be5\u65b9\u6cd5\u662f\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u5185\u90e8\u7684 [[Prototype]] \u5c5e\u6027\u7684\u503c\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reflect.setPrototypeOf(target, prototype)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  \u8be5\u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u8bbe\u7f6e\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u3002\u5982\u679c\u8bbe\u7f6e\u6210\u529f\u7684\u8bdd\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u8fd4\u56de\u4e00\u4e2atrue\uff0c\u5982\u679c\u8bbe\u7f6e\u5931\u8d25\u7684\u8bdd\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u8fd4\u56de\u4e00\u4e2afalse\u3002\n")))),(0,a.kt)("h2",{id:"objectfreeze"},"Object.freeze()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Object.freeze() \u65b9\u6cd5\u7528\u4e8e\u51bb\u7ed3\u5bf9\u8c61\uff0c\u7981\u6b62\u5bf9\u4e8e\u8be5\u5bf9\u8c61\u7684\u5c5e\u6027\u8fdb\u884c\u4fee\u6539\uff08\u7531\u4e8e\u6570\u7ec4\u672c\u8d28\u4e5f\u662f\u5bf9\u8c61\uff0c\u56e0\u6b64\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5bf9\u6570\u7ec4\u4f7f\u7528\uff09\n    \u8be5\u5c5e\u6027\u662f\u6d45\u51bb\u7ed3 \u4e0d\u80fd\u51bb\u7ed3\u6df1\u5c42\u5bf9\u8c61\n")),(0,a.kt)("h3",{id:"\u6df1\u51bb\u7ed3"},"\u6df1\u51bb\u7ed3"),(0,a.kt)("p",null,"\u8981\u5b8c\u5168\u51bb\u7ed3\u5177\u6709\u5d4c\u5957\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u60a8\u53ef\u4ee5\u7f16\u5199\u81ea\u5df1\u7684\u5e93\u6216\u4f7f\u7528\u5df2\u6709\u7684\u5e93\u6765\u51bb\u7ed3\u5bf9\u8c61\uff0c\u5982Deepfreeze\u6216immutable-js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6df1\u51bb\u7ed3\u51fd\u6570.\nfunction deepFreeze(obj) {\n\n  // \u53d6\u56de\u5b9a\u4e49\u5728obj\u4e0a\u7684\u5c5e\u6027\u540d\n  var propNames = Object.getOwnPropertyNames(obj);\n\n  // \u5728\u51bb\u7ed3\u81ea\u8eab\u4e4b\u524d\u51bb\u7ed3\u5c5e\u6027\n  propNames.forEach(function(name) {\n    var prop = obj[name];\n\n    // \u5982\u679cprop\u662f\u4e2a\u5bf9\u8c61\uff0c\u51bb\u7ed3\u5b83\n    if (typeof prop == 'object' && prop !== null)\n      deepFreeze(prop);\n  });\n\n  // \u51bb\u7ed3\u81ea\u8eab(no-op if already frozen)\n  return Object.freeze(obj);\n}\n\n")),(0,a.kt)("h3",{id:"objectgetownpropertynames"},"Object.getOwnPropertyNames()"),(0,a.kt)("p",null,"\u5176\u5b9e\u5c31\u662f\u4e2a\u7b80\u5355\u7684\u9012\u5f52\u65b9\u6cd5\u3002\u4f46\u662f\u6d89\u53ca\u5230\u4e00\u4e2a\u5f88\u91cd\u8981\uff0c\u4f46\u662f\u5728\u5199\u4e1a\u52a1\u903b\u8f91\u7684\u65f6\u5019\u5f88\u5c11\u7528\u7684\u77e5\u8bc6\u70b9 Object.getOwnPropertyNames(obj) \u3002\u6211\u4eec\u90fd\u77e5\u9053\u5728 JS \u7684 Object \u4e2d\u5b58\u5728\u539f\u578b\u94fe\u5c5e\u6027\uff0c\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u6240\u6709\u7684\u975e\u539f\u578b\u94fe\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"objectfreeze-\u6027\u80fd\u4f18\u5316"},"Object.freeze \u6027\u80fd\u4f18\u5316"),(0,a.kt)("p",null,"\u65e2\u7136Object.freeze \u589e\u5bf9\u5bf9\u8c61\u8fdb\u884c\u51bb\u7ed3\uff0c\u4f7f\u5176\u4e0d\u80fd\u8fdb\u884c\u5c5e\u6027\u6539\u53d8\u3002\n\u5728vue\u54cd\u5e94\u5f0f\u4e2d\u3002\u521d\u59cb\u5316\u65f6\uff0cvue\u4f1a\u5bf9data\u505agetter\u3001setter\u6539\u9020\u3002Vue \u5c06\u904d\u5386\u6b64\u5bf9\u8c61\u6240\u6709\u7684\u5c5e\u6027\uff0c\u5e76\u4f7f\u7528 \xa0Object.defineProperty\xa0 \u628a\u8fd9\u4e9b\u5c5e\u6027\u5168\u90e8\u8f6c\u4e3a getter/setter\uff0c\u8fd9\u4e9b getter/setter \u5bf9\u7528\u6237\u6765\u8bf4\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4f46\u662f\u5728\u5185\u90e8\u5b83\u4eec\u8ba9 Vue \u8ffd\u8e2a\u4f9d\u8d56\uff0c\u5728\u5c5e\u6027\u88ab\u8bbf\u95ee\u548c\u4fee\u6539\u65f6\u901a\u77e5\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u4f46vue \u5728\u9047\u5230 Object.freeze() \u8fd9\u6837\u88ab\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u914d\u7f6e\u7684\u5bf9\u8c61\u5c5e\u6027\u65f6\uff0c\u4e0d\u4f1a\u4e3a\u5bf9\u8c61\u52a0\u4e0asetter getter \u7b49\u6570\u636e\u52ab\u6301\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"javascript\u5bf9\u8c61\u89e3\u51bb"},"javascript\u5bf9\u8c61\u89e3\u51bb"),(0,a.kt)("p",null,"\u5728javascript \u4e2d\uff0c\u5bf9\u8c61\u51bb\u7ed3\u540e\uff0c\u662f\u6ca1\u6709\u529e\u6cd5\u518d\u89e3\u51bb\u7684\u3002\u53ea\u80fd\u901a\u8fc7\u514b\u9686\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u5c5e\u6027\u7684\u65b0\u5bf9\u8c61\uff0c\u901a\u8fc7\u4fee\u6539\u65b0\u7684\u5bf9\u8c61\u5c5e\u6027\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u5b9e\u73b0\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Object.assign({}, frozenObject);\n\n")),(0,a.kt)("h2",{id:"\u9501\u5b9a\u5bf9\u8c61\u7684\u65b9\u6cd5"},"\u9501\u5b9a\u5bf9\u8c61\u7684\u65b9\u6cd5"),(0,a.kt)("h3",{id:"objectpreventextensions"},"Object.preventExtensions()"),(0,a.kt)("p",null,"\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55\uff0c\u65e2\u4e0d\u53ef\u4ee5\u65b0\u589e\u5c5e\u6027\u6216\u65b9\u6cd5\u3002\u4f46\u53ef\u4ee5\u4fee\u6539/\u5220\u9664"),(0,a.kt)("h3",{id:"objectseal"},"Object.seal()"),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u57fa\u7840\u4e0a\uff0c\u5bf9\u8c61\u5c5e\u6027\u4e0d\u53ef\u5220\u9664, \u4f46\u53ef\u4ee5\u4fee\u6539"),(0,a.kt)("h3",{id:"objectfreeze-1"},"Object.freeze()"),(0,a.kt)("p",null," \u5728\u4e0a\u9762\u7684\u57fa\u7840\u4e0a\uff0c\u5bf9\u8c61\u6240\u6709\u5c5e\u6027\u53ea\u8bfb, \u4e0d\u53ef\u4fee\u6539"))}m.isMDXComponent=!0}}]);