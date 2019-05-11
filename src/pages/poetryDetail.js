
import React from 'react';
import Link from 'umi/link';
import {
  Layout, Menu, Breadcrumb, Icon, Card, Avatar, Divider, Tag, Button, Row, Col,Modal
} from 'antd';
import {
  getAllChildCategoryById,
  getAllSimpleListByName,
  getDetailById,
  getRootAndChild,
} from '@/services/PoetryService';
import { getCookie } from '@/utils/cookie';
import router from 'umi/router';
import { collection } from '@/services/UserService';
const { SubMenu } = Menu;
const confirm = Modal.confirm;
const {
  Header, Content, Footer, Sider,
} = Layout;
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


class poetryList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      urlId: this.props.location.query.id,
      urlKey: this.props.location.query.name,
      childName:this.props.location.query.childName,
      rootName:this.props.location.query.rootName,
      detail: [],
      key: '',
      childKey: '',
      data: [],
      childCategory: [],
      simpleList:[],
      flag:1
    };

    getDetailById(this.state.urlId).then((result) => {
      this.setState({
        detail: result.data
      })
    })
    getAllChildCategoryById(this.state.urlId).then((result) => {
      this.setState({
        childCategory: result.data
      })
    })

    getRootAndChild().then((result) => {
      this.setState({
        data: result.data
      })
    });
  }
  // getAllSimpleList().then((result)=>{
  //   this.setState({
  //     simpleList:result.data
  //   })
  // });
  success(id){
    let userInfo = getCookie('ACCESS_TOKEN');
    if(userInfo === ''){
      confirm({
        title: '您尚未登录',
        content: '登录后才能收藏，是否先登录？',
        okText:"确认",
        cancelText:"取消",
        onOk() {
          router.push('/login?id='+id);
        },
        onCancel() {},
      });
    }else{
      let userInfo={
        userName:getCookie('ACCESS_TOKEN'),
        poetryId:this.state.urlId
      }
      collection(userInfo).then((result)=>{
        if(result.code === '200'){
          Modal.success({
            title: '收藏成功',
            okText:"知道了",
          });
        }else{
          Modal.success({
            title: '您已经收藏过了',
            okText:"知道了",
          });
        }
      });
    }
  }

  getAllByName(name){
    getAllSimpleListByName(name).then((result)=>{
      this.setState({
        simpleList:result.data
      })
    })
  }


  render() {
    if(this.state.flag === 1) {
      return (
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={300} style={{ background: '#fff' }}>
              <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={[this.state.childName]}
                defaultOpenKeys={[this.state.rootName]}
                mode="inline"
              >
                {
                  this.state.data.map((data) => {
                    return (
                      <SubMenu key={data.root.categoryName}
                               title={<span><Icon type="book"/><span>{data.root.categoryName}</span></span>}>
                        {
                          data.child.map((child) => {
                            return (
                              <Menu.Item key={child.categoryName} onClick={(key) => {
                                console.log(data.root.categoryName);
                                this.setState({
                                  key: child.categoryName,
                                  rootName: data.root.categoryName
                                });
                                this.getAllByName(child.categoryName)
                                router.push('/poetryList?name='+child.categoryName+'&rootName='+data.root.categoryName)
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
              <Card>
                <div align="center">
                  <div style={{ fontSize: 20 }}>{this.state.detail.poetryName}</div>
                  <div>【{this.state.detail.dynasty}】</div>
                  <div>{this.state.detail.author}</div>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'rgba(0, 0, 0, 0.85)',
                      marginBottom: 16,
                      fontWeight: 500,
                    }}
                  >
                    {this.state.detail.content}
                  </p>
                  <img src={this.state.detail.imageUrl}/>
                </div>
                <Divider/>

                <Card
                  type="inner"
                  title="注释"
                  extra={<a href="#"></a>}
                >
                  {this.state.detail.annotation}
                </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="译文"
                  extra={<a href="#"></a>}
                >
                  {this.state.detail.trans}
                </Card>
                <Divider/>
                <Row>
                  <Col span={2}/>
                  <Col span={16}>
                    <Button type="danger" shape="circle" icon="star" onClick={() => {
                      this.success(this.state.urlId);
                    }}/>&nbsp;&nbsp;&nbsp;收 藏
                  </Col>
                  <Col>
                    {
                      this.state.childCategory.map((child) => {
                        return (
                          <Tag><Link to={'/poetryList?name=' + child.categoryName}><a href="">#{child.categoryName}</a></Link></Tag>
                        )
                      })
                    }
                  </Col>
                </Row>
              </Card>
            </Content>
          </Layout>
        </Content>
      )
    }

  }

}

export default poetryList;
