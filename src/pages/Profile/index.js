import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import "./profile.css";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";

function Profile() {
  const isLoggedIn = localStorage.getItem("mail_ID");
  if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <div>
      <Header navItems={["home", "feedback"]}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "tomato",
          marginTop: "80px",
        }}
      >
        <Card
          headStyle={{
            backgroundColor: "#254000",
            textAlign: "center",
            color: "#ffffff",
          }}
          title="PROFILE DETAILS"
          bordered={true}
          style={{ width: 300, height: 250 }}
          hoverable={true}
        >
          <h1>Employee Details</h1>
          <p>
            <b>EmpName: JAYANT</b>
            <br />
            <b>Password: jay@Pass1</b>
            <br />
            <b>Email: jayant3787@gmail.com</b>
            <br />
            <b>Company: Adcuratio Media Inc</b>
          </p>{" "}
        </Card>
      </div>
    </div>
  );
}

export default Profile;
