# JS | 监听localStorage

重写 setItem 方法进行监听操作

```javaScript
var orignalSetItem = localStorage.setItem;

   localStorage.setItem = function(key,newValue){

       var setItemEvent = new Event("setItemEvent");
       setItemEvent.key=key;
       setItemEvent.newValue = newValue;
       window.dispatchEvent(setItemEvent);
       orignalSetItem.apply(this,arguments);
   }
```
