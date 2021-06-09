import 'antd/dist/antd.css';
import {  Avatar,Input, Space,Menu, Dropdown  } from 'antd';
import { DownOutlined,AudioOutlined  } from '@ant-design/icons';
import './Home.css'
import logo from './images/a2.png'
function Home(){
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
        <a target="_blank" rel="noopener noreferrer" href="./Profile">
          Profile
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
    
    return(
        <form><div>
                <img src={logo} alt="logo" /></div>
                <Avatar style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}><b>J</b>
                </Avatar>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> <DownOutlined />
    </a>
  </Dropdown>
                <ColoredLine color="black" />
                <br/>
                <div>
                <Space direction="vertical">
                <Search style={{marginLeft:'400px'}}
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
                />
               </Space>
                </div>
        </form>

    );
}
export default Home;
