import 'antd/dist/antd.css';
import {  Avatar,Input, Space,Menu, Dropdown, Card,Form  } from 'antd';
import { DownOutlined,AudioOutlined  } from '@ant-design/icons';
import './home.css'
import logo from '../images/got3.png'
import logo1 from '../images/sword.jpg'
import React from 'react';
import card from '../card/card';
function Home(){
  const { Meta } = Card;

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0
            }}
        />
    );
    const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="./profile">
          Profile
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
    
    return(
      
      <form>
        <div>
                <img style={{marginLeft:30}}src={logo} alt="logo" />
                
                
                <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}>
                </Avatar>
                <Dropdown overlay={menu}>
               <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> <DownOutlined />
               </a>
               </Dropdown><br/>
               <ColoredLine color="#092b00" />
                
                </div>
                <div><h1 class='h1'>ENJOY YOUR SHOPPING</h1></div>
                </form>
                

        

    );
}
export default Home;
