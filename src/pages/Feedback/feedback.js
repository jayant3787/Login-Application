import 'antd/dist/antd.css';
import {  Progress,  Avatar, Menu, Dropdown,Card  } from 'antd';
import { DownOutlined  } from '@ant-design/icons';
import './feedback.css'
import logo from '../images/got3.png'
import React from 'react';

function Feedback() {
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
            <a  rel="noopener noreferrer" href="./home">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a  rel="noopener noreferrer" href="./profile">
              Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a rel="noopener noreferrer" href="./login">
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
        <div>
            <a href="./home"><img style={{marginLeft:30}} src={logo} alt="logo" /></a>
            <Avatar style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}><b>J</b>
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
            <Card headStyle={{backgroundColor:"#254000",textAlign: "center", color:'#ffffff'}} title="FEEDBACK" bordered={true} style={{ width: 700, height:260 }} hoverable={true}>

            <h1>Feedback Progress</h1>
     
   <p> <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} /></p></Card></div>
    
    </div>
    )
}

export default Feedback;
