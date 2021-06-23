import React from "react";
import { Button, Avatar, Input, Menu, Dropdown, Card, Form } from "antd";
import { DownOutlined, AudioOutlined } from "@ant-design/icons";
import {
  SettingOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { cartItems } from "../../constants";
import logo from "../../assets/images/got3.png";
import "./styles.css";

const Home = () => {
  const renderCard = (card, index) => {
    return (
      <div
        style={{
          display: "inline-grid",
          justifyContent: "center",
        }}
      >
        <Card
          hoverable
          style={{ width: 270, marginLeft: 87, marginTop: 15 }}
          cover={<img alt="example" src={card.Image} />}
          key={index}
          className="box"
        >
          <Meta title={card.Title} description={card.Text} />
          <div>
            <Button type="primary" style={{ marginTop: 15, marginLeft: 18 }}>
              Buy now
            </Button>
            <Button type="primary" style={{ marginLeft: 10 }}>
              Add to cart
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  const { Meta } = Card;

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0,
      }}
    />
  );
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);
  const menu = (
    <Menu>
      <Menu.Item>
        <SmileOutlined />
        <a rel="noopener noreferrer" href="./profile">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <SettingOutlined />
        <a rel="noopener noreferrer" href="./feedback">
          Feedback
        </a>
      </Menu.Item>
      <Menu.Item>
        <LogoutOutlined />
        <a rel="noopener noreferrer" href="./login">
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Form>
      <img style={{ marginLeft: 30 }} src={logo} alt="logo" />
      <Avatar
        style={{
          marginLeft: "1300px",
          color: "#f56a00",
          backgroundColor: "#fde3cf",
        }}
      >
        <b>{localStorage.getItem("mail_ID").charAt(0)}</b>
      </Avatar>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {" "}
          <DownOutlined />
        </a>
      </Dropdown>
      <ColoredLine color="#092b00" />

      {/* <div><Button>Clear All</Button></div> */}
      <div>
        <span>
          <h1 className="h1">ENJOY YOUR SHOPPING</h1>
        </span>
      </div>
      <div class="grid">{cartItems.map(renderCard)}</div>
    </Form>
  );
};
export default Home;
// export default renderTrails;
