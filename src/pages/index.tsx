import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "../css/styles.css"
import "tailwindcss/tailwind.css"
import writeOneByOne from "./writeOneByOne"



export default class Home extends React.Component {
  state = {};

  render(): React.ReactNode {
    return (
      <Layout>
        <div className={clsx(styles.mainBox)}>
         <div>
           <HomepageHeader />
          </div>
          <div>
            <ContentRight />
          </div>
        </div>
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    );
  }

  async componentDidMount() {
    const home = document.querySelector("#htmlS");
    // await writeOneByOne("嗨哟。", "h2", home, { interval: 150, sleep: 300 })
    // await writeOneByOne("我是 YUZEJIA，", "h4", home, { interval: 150, sleep: 300})
    // await writeOneByOne("一名前端开发工程师~。", "p", home, { sleep: 400 })
  }
}

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

function ContentRight() {
  return ( 
    <div className="text-purple-600">right</div>
  )
}
