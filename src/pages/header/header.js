import 'antd/dist/antd.css';
import { Form,  Progress,  Avatar, Menu, Dropdown,Card  } from 'antd';
import { DownOutlined  } from '@ant-design/icons';
import logo from '../images/got3.png'
import React from 'react';
import { HomeOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons';
const Header = () =>{
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color
            }}
        />
    );
return(
    <Form>
   <img style={{marginLeft:30}} src={logo} alt="Logo" />

   <ColoredLine color="#092b00" /><br/><br/><br/><br/>
</Form>
)
}
export default Header();