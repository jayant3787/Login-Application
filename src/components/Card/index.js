import React from "react";
import { Button, Card } from "antd";
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
        <div>
          <Button type="primary" className={styles.buyBtn}>
            Buy now
          </Button>
          <Button type="primary" className={styles.cartBtn}>
            Add to cart
          </Button>
        </div>
      </Card>
    </div>
  );
}
