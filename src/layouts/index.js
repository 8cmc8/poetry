import React from 'react';
import { Layout, Menu, Input, Row, Col, Divider, BackTop,Icon,Modal,message } from 'antd';
import Link from 'umi/link';
import { getCookie,delCookie } from '../utils/cookie.js';
import router from 'umi/router';
const confirm = Modal.confirm;
const Search = Input.Search;
const {
  Header, Footer, Content
} = Layout;
 class BasicLayout extends React.Component {
   constructor(props){
     super(props);
   }

   render(){
     return (
       <Layout style={{ background: '#fff' }} >
         <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
           <Menu mode="horizontal" style={{ background: '#0050844', textAlign: 'center', padding: 0 }} theme="light">
             <Menu.Item style={{ paddingLeft: 140 }} />
             <Menu.Item key="x" >
               <Link to="/">
                 <div style={{ fontSize: 25 }}>
                   诗词鉴赏平台
                 </div>
               </Link>
             </Menu.Item>
             <Menu.Item style={{ paddingLeft: 130 }} />
             <Menu.Item key="home">
               <Link to="/">首页</Link>
             </Menu.Item>
             <Menu.Item key="library">
               <Link to="/poetryList">文库</Link>
             </Menu.Item>
             <Menu.Item key="course" >
               <Link to="/course">课程</Link>
             </Menu.Item>
             <Menu.Item key="community">
               <Link to="/community">社区</Link>
             </Menu.Item>
             <Menu.Item key="game">
               <Link to="/game">娱乐</Link>
             </Menu.Item>

             <Menu.Item style={{ paddingLeft: 60 }} />
             <Menu.Item>
               <Search
                 placeholder="请输入搜索内容"
                 onSearch={value => console.log(value)}
                 style={{ width: 150 }}
               />
             </Menu.Item>
             <Menu.Item style={{ paddingLeft: 30 }} />
             {
               getCookie('ACCESS_TOKEN') !== undefined && getCookie('ACCESS_TOKEN') !== '' ?
                 <Menu.Item key="user">
                   <Link to="/userInfo"><span><Icon type="home" /></span>{getCookie('ACCESS_TOKEN')}，欢迎您</Link>
                 </Menu.Item>
                 :
                 <Menu.Item key="login">
                   <Link to="/login"><Icon type="login"/>登录</Link>
                 </Menu.Item>
             }
             {
               getCookie('ACCESS_TOKEN') !== undefined && getCookie('ACCESS_TOKEN') !== '' ?
                 <Menu.Item key="logout">
                   <div onClick={()=>{
                     let userInfo = getCookie('ACCESS_TOKEN');
                     if(userInfo !== ''){
                       confirm({
                         title: '确定要退出吗',
                         okText:"确认",
                         cancelText:"取消",
                         onOk() {
                           delCookie('userName');
                           delCookie('ACCESS_TOKEN');
                           delCookie('admin');
                           message.success("注销成功");
                           router.push('/');
                         },
                         onCancel() {},
                       });
                     }
                   }}><Icon type="logout"/>退出</div>
                 </Menu.Item>
                 :
                 <Menu.Item key="register">
                   <Link to="/register"><Icon type="right-square" />注册</Link>
                 </Menu.Item>
             }
           </Menu>
         </Header>
         <Content >
           <div style={{ paddingTop: 25, paddingLeft: 100, paddingRight: 100, background: '#fff', minHeight: 400 }}>
             {this.props.children}
           </div>
         </Content>
         <Divider />
         <Footer style={{ background: '#fff' }}>
           <div style={{ background: '#ffffff' }}>

             <Row>
               <Col span={14} align='middle'>
                 <div style={{ fontSize: 30 }}>
                   欢迎与我们一起加入诗词文化学习之路
                 </div>
               </Col>
               <Col span={6}>
                 <Col>联系我们</Col>
                 <Col>电话：155 5819 9225</Col>
                 <Col>地址：浙江工商大学</Col>
               </Col>
             </Row>
           </div>
         </Footer>
         <div>
           <BackTop />
           <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}/>
         </div>
       </Layout>
     )
   }

}

export default BasicLayout;
