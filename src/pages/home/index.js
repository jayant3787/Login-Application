import React from "react";
import { cartItems } from "../../constants";
import { Button } from "antd";
import { Redirect } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import styles from "./styles.module.css";

const Home = () => {
  const [listItems, setListItems] = React.useState(cartItems);
  const handleClick = () => {
    setListItems([]);
  };

  const isLoggedIn = localStorage.getItem("mail_ID");
  if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <React.Fragment>
      <Header />
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>ENJOY YOUR SHOPPING</h1>
        <Button className={styles.clearBtn} onClick={() => handleClick()}>
          Clear
        </Button>
      </div>
      <div class="grid">
        {listItems.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
