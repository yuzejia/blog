import React, { useEffect, useState, ReactDOM } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader({ count }) {
  let html = { __html: count };
  return <div id="htmlS" dangerouslySetInnerHTML={html}></div>;
}

function AddDom({ el, t }) {
  let [txt, setTxt] = useState<string>(t);
  // setTimeout(() => {
  //   setTxt(txt + "333");
  //   console.log(1111);
  // }, 1000);
  let e = React.createElement("h1", null, txt);
  console.log(e);

  return e;
}

const Home: React.FC = () => {
  const str = "你好，YUZEJIA.";
  let [index, setIndex] = useState<number>(0);
  const [counts, setCount] = useState<string>(`<h1>${index}</h1>`);

  let html = { __html: counts };
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <AddDom el={"h1"} txt={"xxxxx"} />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
