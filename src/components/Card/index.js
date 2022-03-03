import React from "react";
import { Card } from "antd";
import styles from "./styles.module.css";

export default function CardComp({ item }) {
  const { Meta } = Card;
  return (
    <div className={styles.cardContainer}>
      <Card
        hoverable
        className={styles.cardRoot}
        cover={<img alt="example" src={item.Image} />}
        key={item.id}
      >
        <Meta title={item.Title} description={item.Text} />
      </Card>
    </div>
  );
}
