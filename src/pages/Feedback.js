import 'antd/dist/antd.css';
import {  Progress,  Avatar, Menu, Dropdown  } from 'antd';
import { DownOutlined  } from '@ant-design/icons';
import './Feedback.css'
import logo from './images/a2.png'
import React from 'react'

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
            <a target="_blank" rel="noopener noreferrer" href="./Home">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="./Profile">
              Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="./Login">
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
        <div>
            <img src={logo} alt="logo" />
            <Avatar style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}><b>J</b>
                </Avatar>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> <DownOutlined />
    </a>
  </Dropdown>
            <ColoredLine color="black" />
            <h1>Feedback Progress</h1>
     <div>
   <p> <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} /></p>
    </div>
    </div>
    )
}

export default Feedback;
