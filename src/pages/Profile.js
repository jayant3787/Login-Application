import 'antd/dist/antd.css';
import {  Avatar,Menu, Dropdown  } from 'antd';
import { DownOutlined  } from '@ant-design/icons';
import React from 'react'
import './Profile.css'
import logo from './images/a2.png'

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
            <a target="_blank" rel="noopener noreferrer" href="./Home">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="./Feedback">
              Feedback
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
            <h1>Profile Details</h1>
            <p>
            <b>EmpName: JAYANT</b><br/>
            <b>Password: 123456</b><br/>
            <b>Email: jayant3787@gmail.com</b><br/>
            <b>Company: Adcuratio Media Inc</b>
            </p>
        </div>
        
    )
}

export default Profile;
