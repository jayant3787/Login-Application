import 'antd/dist/antd.css';
import {  Avatar,Menu, Dropdown,Card  } from 'antd';
import { DownOutlined  } from '@ant-design/icons';
import React from 'react';
import './profile.css'
import logo from '../images/got3.png'

function Profile() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0
            }}
        />
    );
    const menu = (
        <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="./home">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="./feedback">
              Feedback
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="./login">
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
      
        
    return (
        <div>
            <img style={{marginLeft:30}} src={logo} alt="logo" />
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}>
                </Avatar>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> <DownOutlined />
    </a>
  </Dropdown>
            <ColoredLine color="#092b00" />
            <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'tomato',
          marginTop:'80px'
        }}>
            <Card headStyle={{backgroundColor:"#254000",textAlign: "center", color:'#ffffff'}} title="PROFILE DETAILS" bordered={true} style={{ width: 300, height:250 }} hoverable={true}>
            <h1>Employee Details</h1>
            <p>
            <b>EmpName: JAYANT</b><br/>
            <b>Password: jay@Pass1</b><br/>
            <b>Email: jayant3787@gmail.com</b><br/>
            <b>Company: Adcuratio Media Inc</b>
            </p> </Card></div>
        </div>
        
    )
}

export default Profile;