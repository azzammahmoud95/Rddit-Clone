import React from "react";
import styles from "./styles.module.css";
import { trendingTodayItem } from "./trending-today-info.js";

export default function TrendingCard() {
  return (
    <section className={styles.cardWrapper}>
      {trendingTodayItem.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={styles.card}
          style={{
            background: `url(${item.imageBackGround}) center center / cover no-repeat rgb(255, 255, 255)`,
            backgroundSize: "cover",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 500, lineHeight: "22px", zIndex: "120" }}>
            {item.title}
          </h2>
          <div
            style={{
              fontFamily: "Noto Sans, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "8px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "20px",
              maxHeight: "40px",
              zIndex: "190",
            }}
          >
            {item.description}
          </div>
          <div className={styles.accountInfoWrapper}>
            <img
              src={item.accountImage}
              width="20px"
              style={{ zIndex: "190" }}
              alt="imagesomething"
            />
            <span style={{ zIndex: "190", fontSize: "13px" }}>{item.accountName}</span>
          </div>
        </a>
      ))}
    </section>
  );
}
