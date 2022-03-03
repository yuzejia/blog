# 监听 localStorage 变化

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