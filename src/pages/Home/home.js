import 'antd/dist/antd.css';
import {  Avatar,Input, Space,Menu, Dropdown, Card,Form  } from 'antd';
import { DownOutlined,AudioOutlined  } from '@ant-design/icons';
import './home.css'
import logo from '../images/got3.png'
import logo1 from '../images/got_sword.jpg'
import logo2 from '../images/shield2.png'
import logo3 from '../images/got_shield.png'
import logo4 from '../images/got_psoter1.jpg'
import logo5 from '../images/got_dragon.png'

import React from 'react';
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
      
      <Form>
        
                <img style={{marginLeft:30}}src={logo} alt="logo" />
                
                
                <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}>
                </Avatar>
                <Dropdown overlay={menu}>
               <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> <DownOutlined />
               </a>
               </Dropdown><br/>
               <ColoredLine color="#092b00" />
                
                
                <div><span><h1 class='h1'>ENJOY YOUR SHOPPING</h1></span></div>
                <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'tomato'
        }} class="site-card-border-less-wrapper">
                <Card 
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={logo1} />}
  >
    <Meta title="Assassin Sword" description="Colour: Steel grey" />
  </Card>
  <Card 
    hoverable
    style={{ width: 240,marginLeft:30 }}
    cover={<img alt="example" src={logo2} />}
  >
    <Meta title="Ancient Brooch Shield" description="Colour: Silver" />
  </Card>
  <Card 
    hoverable
    style={{ width: 240,marginLeft:30 }}
    cover={<img alt="example" src={logo3} />}
  >
    <Meta title="Vintage Brooch Shield" description="Colour: Gold" />
  </Card>
  <Card 
    hoverable
    style={{ width: 240,marginLeft:30 }}
    cover={<img alt="example" src={logo4} />}
  >
    <Meta title="House of Stark Poster" description="Colour: Black" />
  </Card>
  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo5} />}
  >
    <Meta title="Dragon Poster" description="Colour: Steel Grey" />
  </Card>
  </div>
  </Form>
                

        

    );
}
export default Home;
