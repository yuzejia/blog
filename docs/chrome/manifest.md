---
title: manifest.json 说明
date: 2021-12-13
categories: 
 - Google
tags:
 - Google-Plugin
---

# manifest.json配置说明
manifest.json 文件是Google在识别插件时的唯一标识

```json
{
    "name": "webpack-google-ts",              // 插件名称
    "description": "webpack-google-ts init",  // 插件说明
    "version": "1.0.1",                       // 插件版本
    "manifest_version": 2,                    //  manifest文件版本号。Chrome18开始必须为2
     "icons": {
       "16": "image/icon-16.png",
       "48": "image/icon-48.png",
       "128": "image/icon-128.png"
    },                                        //扩展图标。推荐大小16，48，12

    "browser_action": {
        "default_popup": "./html/index.html"     // 点击插件图标显示的页面
    },

    // 指定扩展进程 background 的运行环境
    "background": {
        "scripts": ["./js/bg.js"],               // background 注入的js 扩展
        "persistent": true
    },
   

    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
    "content_scripts": [{

        // 指定 可注入脚本的web网页
        "matches": [
            "https://www.baidu.com/*"
        ],

        // 指定网页注入的脚本
        "js": [
            "./js/content.js"
        ],
        // 指定 content_scripts的注入时机  见：run_at 说明
        "run_at": "document_end"
    }],
    // //权限
    "permissions": [
        "tabs"

    ],
}
```

### run_at
可选  指定 content_scripts的注入时机。

+ document_start：所有css加载完毕，但DOM尚未创建时。

+ document_end：DOM创建完成，但图片及frame等子资源尚未加载时。

+ document_idle：document_end之后，window.onload之前。
