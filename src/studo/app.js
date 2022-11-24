 function init() {

  const source =  new EventSource("https://www.baidu.com/");
  console.log();

  source.onopen = function () {
      console.log("连接成功", this.readyState);

  }

  source.onmessage = function (event) {
      console.log('服务器---', event.data)
  }

  source.onerror = function () {
      console.log('error');
  }
}

init()


