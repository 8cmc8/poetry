
import React from 'react';
import Link from 'umi/link';
import {
  Layout, Menu, Breadcrumb, Icon, Card,
} from 'antd';
import { getAllSimpleList, getAllSimpleListByName, getRootAndChild } from '@/services/PoetryService';
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
    this.state = {
      urlKey:this.props.location.query.name,
      simpleList:[],
      key:'',
      childKey:'',
      data:[]
    };
    getRootAndChild().then((result)=>{
      this.setState({
        data:result.data
      })
    });
    getAllSimpleList().then((result)=>{
      this.setState({
        simpleList:result.data
      })
    });
  }

  getAllByName(name){
    getAllSimpleListByName(name).then((result)=>{
      this.setState({
        simpleList:result.data
      })
    })
  }


  render() {
    return(
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={300} style={{ background: '#fff' }}>
            <Menu
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={[this.state.urlKey]}
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
                              });
                              this.getAllByName(child.categoryName)
                            }
                            }>{child.categoryName}</Menu.Item>
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
                    <Link to={'/poetryDetail?id='+ data.id}>
                    <Card.Grid style={gridStyle} >
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
                    </Link>
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
