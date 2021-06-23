import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import {
  SettingOutlined,
  SmileOutlined,
  LogoutOutlined,
  DownOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/got3.png";

const color = "#092b00";

export default function Header({ isLogin }) {
  const menuItems = (
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
      <Menu.Item onClick={() => localStorage.removeItem("mail_ID")}>
        <LogoutOutlined />
        <a rel="noopener noreferrer" href="./login">
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <a href="/home">
        <img style={{ marginLeft: 30 }} src={logo} alt="logo" />
      </a>
      {!isLogin && (
        <div style={{ float: "right", marginTop: "20px", marginRight: "17px" }}>
          <span>{localStorage.getItem("mail_ID")}</span>
          <Avatar
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            <b>{localStorage.getItem("mail_ID").charAt(0)}</b>
          </Avatar>
          <Dropdown overlay={menuItems}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {" "}
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      )}
      <hr
        style={{
          backgroundColor: color,
          height: 0,
        }}
      />
    </React.Fragment>
  );
}
