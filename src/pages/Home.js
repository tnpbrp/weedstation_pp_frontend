import React from 'react';
import { Layout, FloatButton, Image } from 'antd';
import Navbar from '../components/Navbar';
import ProductMenu from '../components/Menu';
import imgCover from '../assets/images/ws_pp.jpg';
import scanQR from '../assets/images/Line_scan_qr.jpg';
const { Header, Footer, Sider, Content } = Layout;

const themeColor = '#212529';

const layoutStyle = {
  // borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 0px)',
  maxWidth: 'calc(100% - 0px)',
};

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 'auto',
  paddingInline: 48,
  lineHeight: 'auto',
  padding: 0,
  // backgroundColor: themeColor,
};

const contentStyle = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '100vh',
  color: '#fff',
  backgroundColor: '#f5f5f5',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: themeColor,
};

const contentDivStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '85%',
};

const footerImgStyle = {
  maxWidth: '100%',
  height: '100px',
  padding: '0 20px'
};


function Home() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Navbar />
      </Header>

      <Content style={contentStyle}>
        <div style={contentDivStyle}>
          <ProductMenu />
        </div>

        {/* <FloatButton icon={<img src={telImg} />} /> */}
      </Content>
      <Footer style={footerStyle}>
        Weed Station P&P
        {/* <Image src={imgCover} style={footerImgStyle} preview={false} />
        <Image src={scanQR} style={footerImgStyle} alt='' /> */}
      </Footer>
    </Layout>
  );
}

export default Home;
