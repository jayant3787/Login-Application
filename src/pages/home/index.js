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
      <Header navItems={["profile"]} />
      <div class="grid">
        {listItems.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
