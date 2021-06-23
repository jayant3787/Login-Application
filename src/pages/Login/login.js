import React from "react";
import "antd/dist/antd.css";
import { Card, Form, Input, Button } from "antd";
import "./login.css";
import logo from "../../assets/images/got3.png";

export const validatePassword = (password) => {
  if (!password) return false;

  const regex =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})([A-Za-z\d@$!%*?&])(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,25}$/;
  if (!regex.test(password)) return false;

  return true;
};
export const PASSWORD_MESSAGE =
  "Password length should be at least 8 characters, and have 1 number, 1 special symbol,1 upper and lower case";
export const formatNumber = (value) =>
  new Intl.NumberFormat("en-US", {}).format(value);
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const useStateWithLocalStorage = (localStorageKey) => {
  const [value1, setValue1] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value1);
  }, [value1]);

  return [value1, setValue1];
};

const Demo = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);

    window.location.href = "/home";
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
      }}
    />
  );

  const { Meta } = Card;

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value1, setValue1] = useStateWithLocalStorage("mail_ID");
  const onChange1 = (event) => setValue1(event.target.value);

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <img style={{ marginLeft: 30 }} src={logo} alt="Logo" />

      <ColoredLine color="#092b00" />
      <br />
      <br />
      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "tomato",
        }}
        className="site-card-border-less-wrapper"
      >
        <Card
          headStyle={{
            backgroundColor: "#254000",
            textAlign: "center",
            color: "#ffffff",
          }}
          title="LOGIN"
          bordered={true}
          style={{ width: 450, height: 300, boxShadow: 10 }}
          hoverable={true}
        >
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
            value={value}
            onChange={handleChange}
          >
            <Input value1={value1} type="text" onChange={onChange1} />
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
            value={value}
            onChange={handleChange}
            has
            feedback
          >
            <Input.Password />
          </Form.Item>
          <br />

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" disabled={!value}>
              Submit
            </Button>
          </Form.Item>
        </Card>
      </div>
    </Form>
  );
};

export default Demo;
