
import React from 'react';
import PoetryList from '../components/library/poetryList';
import PoetryMenu from '../components/library/poetryMenu';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;


class poetryList extends React.Component{
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
    root:[],
    child:[]
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return(
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>文库</Breadcrumb.Item>
            <Breadcrumb.Item>选集</Breadcrumb.Item>
            <Breadcrumb.Item>唐诗</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={300} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>选集</span></span>}>
                  <Menu.Item key="1">唐诗</Menu.Item>
                  <Menu.Item key="2">宋词</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>写景</span></span>}>
                  <Menu.Item key="5">梅</Menu.Item>
                  <Menu.Item key="6">菊</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <PoetryList />

            </Content>
          </Layout>
        </Content>
    )
  }
}

export default poetryList;
