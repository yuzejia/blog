const writeOneByOne = (text: string | string[], dom: string, container: Element, opt: { interval?: unknown; sleep: unknown; }) => {
    const el = document.createElement(dom);
    const bar = document.createElement("span");
    bar.className = "write-vertical-bar";
    el.appendChild(bar);
    container.appendChild(el);

    let timer = null, currentIndex = 0
    const sleep = opt.sleep || 0;

    return new Promise((resolve) => {
      function next() {
        const textNode = document.createTextNode(text[currentIndex]);
        el.insertBefore(textNode, bar);
        currentIndex++;

        if (currentIndex < text.length) {
          timer = setTimeout(() => {
            next();
          }, 100);
        } else {
          timer = setTimeout(() => {
            el.removeChild(bar);
            clearTimeout(timer);
            resolve("");
          }, sleep);
        }
      }

      next();
    });
  }

  export default writeOneByOne