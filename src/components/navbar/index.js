import React from "react";
import styles from "../Navbar/styles.module.css";
import Redditlogo from "../../assets/Reddit-logo-name.png";
import MainButton from "../main-button/index.js";
import SecondaryButton from "../secondary-button/index.js";
export default function Nabvar() {
  return (<>
      <SecondaryButton
        style={{
          padding: "12px 0",
          width: "8%",
          height: "15%",
          marginTop: "10px",
        }}
      >
        Get App
      </SecondaryButton>
      <MainButton
        style={{
          padding: "12px 0",
          width: "8%",
          height: "15%",
          marginTop: "10px",
        }}
      >
        Join Reddit
      </MainButton>
    </>
  );
}
