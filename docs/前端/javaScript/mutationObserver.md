# JS | MutationObserver

你可能不知道 MutationObserver

做 Google 插件开发的时候 需要动态监听 dom 变化来进行 dom 节点的增加。

先看下 MutationObserver 是干什么用的。

**MutationObserver 接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。**

<img src={require('@site/static/img/javaScript/20220228182754.png').default} />

## 构造函数
MutationObserver()
创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。


### 语法

```javascript
    var observer = new MutationObserver(callback);
```

#### callback
一个回调函数，每当被指定的节点或子树以及配置项有Dom变动时会被调用。
回调函数拥有两个参数：
一个是描述所有被触发改动的 MutationRecord 对象数组，
一个是调用该函数的MutationObserver 对象。

示例
### 回调函数
```javascript
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch(mutation.type) {
      case 'childList':
        /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与
           mutation.removedNodes */
        break;
      case 'attributes':
        /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，
           该属性之前的值为 mutation.oldValue */
        break;
    }
  });
}
```

### 创建并使用 observer
使用以下代码设置一个观察进程。
```javascript
    var targetNode = document.querySelector("#someElement");
    var observerOptions = {
        childList: true,  // 观察目标子节点的变化，是否有添加或者删除
        attributes: true, // 观察属性变动
        subtree: true     // 观察后代节点，默认为 false
    }

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);

```

使用 ID someElement 来获取目标节点树。 observerOptions 中设定了观察者的选项，通过设定 childList 和 attributes 为 true 来获取所需信息。

当 observer 实例化时，指定 callback() 函数。之后指定目标节点与记录选项，我们开始观察使用 observe() 指定的 DOM 节点。

从现在开始直到调用 disconnect() ，每次以 targetNode 为根节点的 DOM 树添加或移除元素时，以及这些元素的任意属性改变时，callback() 都会被调用。

### MutationObserver 实例方法
#### disconnect()
阻止 MutationObserver 实例继续接收的通知，直到再次调用其observe()方法，该观察者对象包含的回调函数都不会再被调用。

**示例**

下面的示例创建了一个观察者，接着与之断开连接，让它可以重复使用。

```javascript
    var targetNode = document.querySelector("#someElement");
    var observerOptions = {
    childList: true,
    attributes: true
    }

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);

    /* some time later... */

    observer.disconnect();
```
#### observe()
配置MutationObserver在DOM更改匹配给定选项时，通过其回调函数开始接收通知。

**示例**

在此例子中，将为你演示如何在实例 MutationObserver 中调用observe() 方法，一旦设置后，会传给他一个目标元素和一个 MutationObserverInit 配置对象。

```javascript

    // 得到要观察的元素
    var elementToObserve = document.querySelector("#targetElementId");

    // 创建一个叫 `observer` 的新 `MutationObserver` 实例，
    // 并将回调函数传给它
    var observer = new MutationObserver(function() {
        console.log('callback that runs when observer is triggered');
    });

    // 在 MutationObserver 实例上调用 `observe` 方法，
    // 并将要观察的元素与选项传给此方法
    observer.observe(elementToObserve, {subtree: true, childList: true});

```

#### takeRecords()
从MutationObserver的通知队列中删除所有待处理的通知，并将它们返回到MutationRecord对象的新Array中。

**示例**

下面的示例展示了在断开观察者之前如何通过调用takeRecords()来处理任何未传递的MutationRecord。

```javascript
    var targetNode = document.querySelector("#someElement");
    var observerOptions = {
    childList: true,
    attributes: true
    }

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);

    /* ...later, when it's time to stop observing... */

    /* handle any still-pending mutations */

    var mutations = observer.takeRecords();

    if (mutations) {
    callback(mutations);
    }

    observer.disconnect();
```