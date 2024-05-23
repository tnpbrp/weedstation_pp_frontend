// import { Menu } from 'antd';
// import { MailOutlined } from '@ant-design/icons';
import logoWeedStaion from '../assets/images/Weed_Station.jpg';
// import LINE_icon from '../assets/images/LINE_icon.png'
// const { SubMenu } = Menu;

const navbarStyle = {
    backgroundColor: '#212529',
    // display: 'flex',
    // justifyContent: 'space-between',
    verticalAlign: "center",
    height: 'inherit',
    width: '100%',
};

const logoStyle = {
    width: '50px',
    // maxWidth: '100%',
    maxWidth: '150px',
    height: "auto",
    borderRadius: '50%',
    marginRight: '30px',
    fontSize: '24px',
}

const frist_navStyle = {
    height:'55px',
    display:'flex',
    alignItems: 'center',
    justifyContent:'center'
};

const second_navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '100%',
    border: '1px solid #A8A9AE',
};

const contactIcon_style = {
    fontSize: '25px', 
    color: 'white',
    padding:'0 14px'
};



function Navbar() {
    return (
        <nav style={navbarStyle}>
            <div className='frist-nav' style={frist_navStyle}>
                <span style={{ fontSize: '22px', color: 'white' }}>Weed Station P&P Shop</span>
                {/* <span>Lang. TH</span> */}
            </div>

            <div style={second_navStyle}>
                <img src={logoWeedStaion} alt="WeedStaionPP" style={logoStyle} />

                <div className='clickContact'>
                    <span className='' style={{ ...contactIcon_style}}>
                        <a href="tel:+66909929671" style={{ color: 'white' }}>
                            <i className="fas fa-phone" style={{ color: 'black' }}></i>
                        </a>
                    </span>
                    <span className='' style={{ ...contactIcon_style }}>
                        <a href="https://line.me/ti/p/9P3vcSl0BF" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            {/* <i className="fab fa-line" style={{color:'#39CD00',backgroundColor:'white',}}></i> */}
                            <i class="fa-brands fa-line" style={{ color: '#39CD00', backgroundColor: 'transparent', }}></i>
                            {/* <img src={LINE_icon} style={{width:30,paddingBlockStart:17}}/> */}
                        </a>
                    </span>
                </div>

            </div>

            {/* <Menu mode="horizontal" color='red'>
                <SubMenu key="contact" icon={''} title="Contact" >
                    <Menu.Item key="phone">Phone</Menu.Item>
                    <Menu.Item key="Line">Line</Menu.Item>
                </SubMenu>
            </Menu> */}
        </nav>
    );
}

export default Navbar;