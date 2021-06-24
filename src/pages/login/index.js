import React from "react";
import { Card, Form, Input, Button } from "antd";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export const validatePassword = (password) => {
  if (!password) return false;

  const regex =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})([A-Za-z\d@$!%*?&])(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,25}$/;
  if (!regex.test(password)) return false;

  return true;
};
 const PASSWORD_MESSAGE =
  "Password length should be at least 8 characters, and have 1 number, 1 special symbol,1 upper and lower case";
 const formatNumber = (value) =>
  new Intl.NumberFormat("en-US", {}).format(value);
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = (props) => {
  const onFinish = (values: any) => {
    localStorage.setItem("mail_ID", email);
    window.location.href = "/home";
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isLoggedIn = localStorage.getItem("mail_ID");

  if (isLoggedIn) return <Redirect to="/home" />;
  return (
    <React.Fragment>
      <Header isLogin={true} />
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className={styles.loginContainer}>
          <Card
            className={styles.loginCard}
            headStyle={{
              backgroundColor: "#254000",
              textAlign: "center",
              color: "#ffffff",
            }}
            title="LOGIN"
            bordered={true}
            hoverable={true}
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Input type="text" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your Password!" },
                () => ({
                  validator(_, value) {
                    if (!value || validatePassword(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(PASSWORD_MESSAGE);
                  },
                }),
              ]}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              has
              feedback
            >
              <Input.Password />
            </Form.Item>
            <br />

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!email || !password}
              >
                Submit
              </Button>
            </Form.Item>
          </Card>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Demo;
