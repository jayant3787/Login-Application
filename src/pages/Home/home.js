import 'antd/dist/antd.css';
import { Button,  Avatar,Input, Space,Menu, Dropdown, Card,Form  } from 'antd';
import { DownOutlined,AudioOutlined  } from '@ant-design/icons';
import './home.css'
// import num from '../Home/home';
import logo from '../images/got3.png'
import logo1 from '../images/vegetable_basket.jpg'
import logo3 from '../images/screw.jpg'
import logo5 from '../images/red_stripes.jpg'
import logo7 from '../images/Car_Poster.jpg'
import logo8 from '../images/white_badheet.jpg'
import logo9 from '../images/paint_brush.jpg'
import logo10 from '../images/jute_thread.jpg'
import logo11 from '../images/cindrella_hat.jpg'
import logo12 from '../images/pot.jpg'
import logo13 from '../images/sweater.jpg'






import React from 'react';
function Home(props){
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
        <a  rel="noopener noreferrer" href="./profile">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  rel="noopener noreferrer" href="./feedback">
          Feedback
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  rel="noopener noreferrer" href="./login">
          Logout
          
        </a>
      </Menu.Item>
    </Menu>
  );
    
    return(
      
      <Form>
        
                 <img style={{marginLeft:30}}src={logo} alt="logo"/>
                
                
               {/* <p style={{marginLeft:'1250px'}}>{this.props.value1}</p> */}
               <Avatar style={{marginLeft: '1300px',color: '#f56a00', backgroundColor: '#fde3cf' }}><b>J</b>
                </Avatar>
                <Dropdown overlay={menu}>
               <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> <DownOutlined />
               </a>
               </Dropdown>
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
    style={{ width: 240, border:2, borderStyle:'groove', backgroundColor:'#fde3cf'}}
    cover={<img alt="example" src={logo1} />}
  >
    <Meta title="Vegetable Basket" description="Colour: Olive" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:1.8}}>Add to cart</Button></div>
  </Card>
  
  <Card 
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:5 }}
    cover={<img alt="example" src={logo3} />}
  >
    <Meta title="Star Screw" description="Colour: Black" />
    <div>
  <Button type="primary"style={{marginTop:15}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>
  
  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo5} />}
  >
    <Meta title="Stripes Wallpaper" description="Colour: Red & Black" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>

  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo7} />}
  >
    <Meta title="Black Tesla Wallpaper" description="Colour: Brown & Black" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>

  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo9} />}
  >
    <Meta title="25mm Paint brush" description="Colour: White" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>
  </div>
  {/* <div >
  <Button type="primary"style={{marginLeft:120,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  </div> */}

  <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'tomato',
          marginTop: 20 ,
          marginRight: 27
          }}>
  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo11} />}
  >
    <Meta title="Cindrella Hat" description="Colour: White" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>

  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo12} />}
  >
    <Meta title="Flower Pot" description="Colour: White" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>

  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo8} />}
  >
    <Meta title="Queen Size Badsheet" description="Colour: White" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>

  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo13} />}
  >
    <Meta title="Chain Pattern Sweater" description="Colour: Grey" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>

  <Card class="card"
    hoverable
    style={{ width: 240,marginLeft:30,boxShadow:"7 10 12 -5 #092b00"}}
    cover={<img alt="example" src={logo10} />}
  >
    <Meta title="Jute Thread Mat" description="Colour: olive" />
    <div>
  <Button style={{marginTop:15}}>Buy now</Button>
  <Button style={{marginLeft:3.8}}>Add to cart</Button></div>
  </Card>
  
  </div>
  {/* <div >
  <Button type="primary"style={{marginLeft:120,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  <Button type="primary"style={{marginLeft:65,marginTop:7}}>Buy now</Button>
  <Button type="primary"style={{marginLeft:18,marginTop:7}}>Add to cart</Button>
  </div> */}
  </Form>
                

        

    );
}
export default Home;
