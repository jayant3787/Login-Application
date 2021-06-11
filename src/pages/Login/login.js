import React from 'react';
import 'antd/dist/antd.css';
import {  Card,Form, Input, Button, Checkbox,Spin, Space   } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,LoadingOutlined } from '@ant-design/icons';
import './login.css';
import logo from '../images/got3.png';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { render } from '@testing-library/react';
export const validatePassword = (password) => {
  if (!password) return false;

  const regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})([A-Za-z\d@$!%*?&])(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,25}$/;
  if (!regex.test(password)) return false;

  return true;
};
export const PASSWORD_MESSAGE =
'lenth should be at least 8 characters, and have 1 number, 1 special symbol,1 upper and lower case';
export const formatNumber = (value) => new Intl.NumberFormat('en-US', {}).format(value);
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
      
        const ColoredLine = ({ color }) => (
          <hr
              style={{
                  color: color,
                  backgroundColor: color
              }}
          />
      );
      // constructor(props){
      //   super(props);
      //   this.state = {
      //     disabled:true
      //   }
      //   this.onChange = this.handleChange.bind(this);
      // }
      
      
      // handleChange = (e) =>{
      //   if(e.target.value.length >=6){
      //     this.setState({
      //       disabled:false
      //     });
      //   }
      //   else {
      //       this.setState({
      //         disabled:true
      //       });
          
      //   }
      //   // this.onChange = this.handleChange.bind(this);
      // }
      const { Meta } = Card;

        return (
          <Form
            {...layout}
            name="basic"
            initialValues={{remember: true }}
            onFinish={onFinish}
          >
          <img style={{marginLeft:30}} src={logo} alt="Logo" />

          <ColoredLine color="#092b00" /><br/><br/><br/><br/>

          <div 
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'tomato'
        }} class="site-card-border-less-wrapper">
      <Card headStyle={{backgroundColor:"#254000",textAlign: "center", color:'#ffffff'}} title="LOGIN" bordered={true} style={{ width: 450, height:300,boxShadow:10}} hoverable={true}>
            <Form.Item
             label="Email"
             name="Email"
             rules={[{ required: true, message: 'Please enter your Email'},{type:'email', message:'Please enter a valid Email'}]}
            //  onChange={this.handleChange}
             >
            <Input  />
            </Form.Item>
            
      
            <Form.Item
             label="Password"
              name="password"
              rules={[{required: true, message: 'Please enter your Password!' },
              () => ({
                  validator(_, value) {
                    if (!value || validatePassword(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(PASSWORD_MESSAGE);
                  },
                }),
                ]}
                has feedback
                // onChange={this.handleChange}
                >
              <Input.Password />
            </Form.Item><br/>
      
            <Form.Item {...tailLayout}>
              <Button
              // disabled={this.state.disabled}
               type="primary" htmlType="submit">
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
