import 'antd/dist/antd.css';
import {  Card,Form, Input, Button, Checkbox,Spin, Space   } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,LoadingOutlined } from '@ant-design/icons';
import './Login.css';
import logo from './images/a2.png';
import React from 'react'
      const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
      const Demo = () =>{
      
        const onFinish = (values: any) => {
          console.log('Success:', values);
          window.location.href='/Home';
        };
      
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
        const ColoredLine = ({ color }) => (
          <hr
              style={{
                  color: color,
                  backgroundColor: color,
                  height: 2
              }}
          />
      );
      
        return (
          <Form
            {...layout}
            name="basic"
            initialValues={{remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
          <img class="center" src={logo} alt="Logo" />
          <ColoredLine color="black" /><br/><br/><br/><br/>

          <div 
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'tomato'
        }} class="site-card-border-less-wrapper">
      <Card headStyle={{backgroundColor:"#f0f0f0",textAlign: "center"}} title="LOGIN" bordered={true} style={{ width: 450, height:320 }} hoverable={true}>
            <Form.Item
             label="Email"
             name="Email"
             rules={[{ required: true, message: 'Please enter your Email'},{type:'email', message:'Please enter a valid Email'}]}>
            <Input />
            </Form.Item>
            
      
            <Form.Item
             label="Password"
              name="password"
              rules={[{required: true, message: 'Please enter your Password!' }]}>
              <Input.Password />
            </Form.Item>
      
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit 
              </Button>
            </Form.Item>
            </Card>
           </div>
          </Form>
        );
      
    };


export default Demo;
const FormItem = Form.Item;
