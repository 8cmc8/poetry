import moment from 'moment/moment';
import React from 'react';
import "../components/css/index.css";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import styles from './css/register.css';
import {
  LocaleProvider,
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Tabs,
  Form,
  Tooltip,
  Input,
  Checkbox,
  Button,
  Select,
  DatePicker,
  message,
  Collapse, Modal, Empty,
} from 'antd';
import { getCookie, setCookie } from '@/utils/cookie';
import {
  collection,
  deleteCollectedPoetry,
  getAllCollectedPoetry,
  getUserInfo,
  register,
  updateUser,
} from '@/services/UserService';
import router from 'umi/router';
import { Link } from 'umi';

moment.locale('zh-cn');
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
const { Panel } = Collapse;

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

function callback(key) {
  // console.log(key);
}


class collectionPoetry extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      expandIconPosition: 'left',
      collapsed: false,
      userInfo:{},
      collectedPoetry:[]
    }



    getUserInfo(getCookie('ACCESS_TOKEN')).then((result)=>{
      this.setState({
        userInfo:result.data
      })
    })
    getAllCollectedPoetry(getCookie('ACCESS_TOKEN')).then((result)=>{
      this.setState({
        collectedPoetry:result.data
      })
    })
  }


  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }



  render(){
    return(
      <LocaleProvider locale={zh_CN}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark"
                  defaultSelectedKeys={['2']}
                  defaultOpenKeys={['sub1']}
                  mode="inline">
              <Menu.Item key="1" onClick={()=>{
                router.push('/userInfo');
              }}>
                <Icon type="user" />
                <span>个人信息</span>
              </Menu.Item>



              <SubMenu
                key="sub1"
                title={<span><Icon type="heart" /><span>我的收藏</span></span>}
              >
                <Menu.Item key="2"><Link to='/collectionPoetry'>诗词</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/collectionCourse'>课程</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/collectionTopic'>话题</Link></Menu.Item>
              </SubMenu>
              <Menu.Item key="5">
                <Icon type="fire" />
                <span>我的关注</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="fork" />
                <span>我的粉丝</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 30px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Tabs onChange="">
                  <TabPane tab="全部收藏" key="1" >
                    <div align='center'>
                      <Collapse style={{width:700}}  onChange={callback} expandIconPosition={this.state.expandIconPosition}>
                        {this.state.collectedPoetry === null ? <Empty/>:
                          this.state.collectedPoetry.map((poetry, key) => {
                            let poetryName = poetry.poetryName;
                            let poetryId = poetry.id;
                            let dynasty = poetry.dynasty;
                            let author = poetry.author;
                            let head = poetryName + '  [' + dynasty + '] ' + author;
                            return (
                              <Panel header={head} key={key + 1}>
                                <div align='center'>
                                  <div>
                                    {poetry.content}
                                  </div>
                                  <br/>
                                  <div>
                                    <img style={{ width: 400, height: 250 }} src={poetry.imageUrl}/>
                                  </div>
                                  <div>
                                    <a className="a"><span onClick={() => {
                                      let userAndPoetry = {
                                        userId: this.state.userInfo.id,
                                        poetryId: poetryId
                                      }
                                      confirm({
                                        title: '确定要取消收藏吗',
                                        okText: "确认",
                                        cancelText: "取消",
                                        onOk() {
                                          deleteCollectedPoetry(userAndPoetry).then((result) => {
                                            if (result.code === '200') {
                                              message.success(result.msg);
                                            } else {
                                              message.error(result.msg);
                                            }
                                          })
                                          window.location.reload();
                                        },
                                        onCancel() {
                                        },
                                      });


                                    }}><Icon
                                      type="frown"
                                    />取消收藏
                                    </span></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a><span onClick={() => {
                                      router.push('/poetryDetail?rootName=undefined&childName=undefined&id=' + poetryId)
                                    }}><Icon type="export"/>诗词详情</span></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a><span onClick={() => {

                                    }}><Icon type="plus-circle"/>加入诗单</span></a>
                                  </div>
                                </div>
                              </Panel>
                            )
                          })
                        }
                      </Collapse>

                      <br />
                    </div>
                  </TabPane>
                  <TabPane tab="我的诗单" key="2">

                  </TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </Layout>
      </LocaleProvider>
    )
  }
}
export default Form.create()(collectionPoetry);


