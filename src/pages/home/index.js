import React from "react";
import Layout from "../../components/layout/index.js";
import styles from "./styles.module.css";
import TrendingCard from "../../components/trending-today-card/index.js";
import MainMenu from '../../components/main-menu/index.js'
export default function home() {
  return (
    <Layout>
      <span className={styles.sectionsTitle} style={{ display: "block" }}>
        Trending today
      </span>
      <TrendingCard />
      <span className={styles.sectionsTitle} style={{ display: "block" }}>
        Popular posts
      </span>
      {/* <div className={styles.layoutMenus}> */}
      <MainMenu />
      {/* </div> */}
     
    </Layout>
  );
}
