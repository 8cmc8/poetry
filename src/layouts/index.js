
import { Layout, Menu, Input, Row, Col, Divider, BackTop,Icon } from 'antd';
import Link from 'umi/link';
import { getCookie,delCookie } from '../utils/cookie.js';

const Search = Input.Search;
const {
  Header, Footer, Content
} = Layout;
function logout() {

  delCookie('userName');
  delCookie('ACCESS_TOKEN');
  delCookie('admin');
}
 const BasicLayout = (props)=> {

  return (
    <Layout style={{ background: '#fff' }} >
      <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
        <Menu mode="horizontal" style={{ background: '#0050844', textAlign: 'center', padding: 0 }} theme="light">
          <Menu.Item style={{ paddingLeft: 100 }} />
          <Menu.Item key="x" >
            <Link to="/">
              <div style={{ fontSize: 25 }}>
                诗词鉴赏平台
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ paddingLeft: 100 }} />
          <Menu.Item key="home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="library">
            <Link to="/poetryList">文库</Link>
          </Menu.Item>
          <Menu.Item key="course">
            <Link to="/course">课程</Link>
          </Menu.Item>
          <Menu.Item key="community">
            <Link to="/community">社区</Link>
          </Menu.Item>
          <Menu.Item key="game">
            <Link to="/game">娱乐</Link>
          </Menu.Item>

          <Menu.Item style={{ paddingLeft: 150 }} />
          <Menu.Item>
            <Search
              placeholder="请输入搜索内容"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
            />
          </Menu.Item>
          <Menu.Item style={{ paddingLeft: 50 }} />
          {
            getCookie('ACCESS_TOKEN') !== undefined && getCookie('ACCESS_TOKEN') !== '' ?
              <Menu.Item key="userInfo">
                <Link to="/userInfo">{getCookie('ACCESS_TOKEN')}，欢迎您</Link>
              </Menu.Item>
              :
              <Menu.Item key="login">
                <Link to="/login">登录</Link>
              </Menu.Item>
          }
          {
            getCookie('ACCESS_TOKEN') !== undefined && getCookie('ACCESS_TOKEN') !== '' ?
              <Menu.Item key="logout">
                <Link to='/' onClick={logout}>退出</Link>
              </Menu.Item>
              :
              <Menu.Item key="register">
                <Link to="/register">注册</Link>
              </Menu.Item>
          }
        </Menu>
      </Header>
      <Content >
        <div style={{ paddingTop: 25, paddingLeft: 100, paddingRight: 100, background: '#fff', minHeight: 400 }}>
          {props.children}
        </div>
      </Content>
      <Divider />
      <Footer style={{ background: '#fff' }}>
        <div style={{ background: '#ffffff' }}>

          <Row align="center">
            <Col span={12} >
              <div style={{ fontSize: 30 }}>

              </div>

            </Col>
            <Col span={8}>
              <div>
                footer
              </div>
            </Col>
            <Col span={8}>

            </Col>
          </Row>
        </div>
      </Footer>
      <div>
        <BackTop />
        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}/> 
      </div>
    </Layout>
  );
}

export default BasicLayout;
