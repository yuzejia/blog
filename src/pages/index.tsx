import React, { useEffect, useState, ReactDOM } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
function HomepageHeader() {
  return (
    <div className={clsx(styles.content)}>
      <div id="htmlS" className={clsx(styles.contentBox)}>
      </div>
      <div className={clsx(styles.contentBoxRight)}>
      </div>
    </div>
    
  );
}

export default class Home extends React.Component {
  state = {};

  render(): React.ReactNode {
    return (
      <Layout>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    );
  }

  componentDidMount(): void {
    const home = document.querySelector("#htmlS");
    this.writeOneByOne("嗨哟。", "h2", home, { interval: 150, sleep: 300 })
      .then(() =>
        this.writeOneByOne("我是 YUZEJIA，", "h4", home, {
          interval: 150,
          sleep: 300,
        })
      )
      .then(() =>
        this.writeOneByOne("一名前端开发工程师，HAHA~。", "p", home, {
          sleep: 400,
        })
      );
  }

  writeOneByOne(text: string | any[], dom: string, container: Element, opt: { interval?: any; sleep: any; }) {
    const el = document.createElement(dom);
    const bar = document.createElement("span");
    bar.className = "write-vertical-bar";
    el.appendChild(bar);
    container.appendChild(el);

    let timer = null,
      currentIndex = 0,
      interval = opt.interval || 100,
      sleep = opt.sleep || 0;

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
}
