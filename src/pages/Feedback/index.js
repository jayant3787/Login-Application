import "antd/dist/antd.css";
import { Progress, Card } from "antd";
import "./feedback.css";
import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";

function Feedback() {
  const isLoggedIn = localStorage.getItem("mail_ID");
  if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <div>
      <Header navItems={["home", "profile"]} />
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
          title="FEEDBACK"
          bordered={true}
          style={{ width: 700, height: 260 }}
          hoverable={true}
        >
          <h1>Feedback Progress</h1>

          <p>
            {" "}
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Feedback;
