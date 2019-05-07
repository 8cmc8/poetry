
import React from 'react';
import PoetryList from '../components/library/poetryList';
import PoetryMenu from '../components/library/poetryMenu';
import {
  Layout, Menu, Breadcrumb, Icon, Card,
} from 'antd';
import { getAllSimpleList, getRootAndChild } from '@/services/PoetryService';
const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


class poetryList extends React.Component{

  constructor(props) {
    super(props);
    getRootAndChild().then((result)=>{
      this.setState({
        data:result.data
      })
    });
    getAllSimpleList().then((result)=>{
      this.setState({
        simpleList:result.data
      })
    })
  }


  state = {
    simpleList:[],
    key:'',
    data:[]
  };
  render() {
    return(
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={300} style={{ background: '#fff' }}>
              <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                {
                  this.state.data.map((data)=>{
                    return(
                      <SubMenu key={data.root.categoryName} title={<span><Icon type="book" /><span>{data.root.categoryName}</span></span>}>
                        {
                          data.child.map((child)=>{
                            return(
                              <Menu.Item key={child.categoryName} onClick={(key)=>{
                                this.setState({
                                  key:child.categoryName
                                })
                              }}>{child.categoryName}</Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  })
                }
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Card title={this.state.key}>
                {
                  this.state.simpleList.map((data)=>{
                    return(
                      <Card.Grid style={gridStyle}>
                        <div>
                          《{data.poetryName}》
                        </div>
                        <div>
                          【{data.dynasty}】
                        </div>
                        <div>
                          {data.author}
                        </div>
                      </Card.Grid>
                      )

                  })
                }
              </Card>
            </Content>
          </Layout>
        </Content>
    )
  }
}

export default poetryList;
