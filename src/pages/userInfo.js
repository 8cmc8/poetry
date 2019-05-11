import moment from 'moment/moment';
import React from 'react';
import "../components/css/index.css";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import styles from './css/register.css';
import {
  LocaleProvider, Layout, Menu, Breadcrumb, Icon, Tabs, Form, Tooltip, Input, Checkbox, Button, Select, DatePicker, message,
} from 'antd';
import { getCookie, setCookie } from '@/utils/cookie';
import { getUserInfo, register, updateUser } from '@/services/UserService';
import router from 'umi/router';
import { Link } from 'umi';

moment.locale('zh-cn');
const TabPane = Tabs.TabPane;

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
const { Option } = Select;
class userInfo extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      collapsed: false,
      userInfo:{}
    }
    getUserInfo(getCookie('ACCESS_TOKEN')).then((result)=>{
      console.log(result)
      this.setState({
        userInfo:result.data
      })
    })
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      let user = {}
      if(values.gender === undefined && values.birthday === undefined){
        user = {
          id: this.state.userInfo.id,
          userName: values.userName,
          password: values.password,
          gender: this.state.userInfo.gender,
          birthday: null
        }
      }else if(values.gender === undefined && values.birthday !== undefined){
        let d = new Date(values.birthday._d);
        let datetime = d.getFullYear() + '-' + (d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1):d.getMonth()+1) + '-' + (d.getDate() < 10?'0'+d.getDate():d.getDate());
        user = {
          id: this.state.userInfo.id,
          userName: values.userName,
          password: values.password,
          gender: this.state.userInfo.gender,
          birthday: datetime
        }
      }else if(values.gender !== undefined && values.birthday === undefined){
        user = {
          id: this.state.userInfo.id,
          userName: values.userName,
          password: values.password,
          gender: values.gender === "男" ? 1 : 0,
          birthday: null
        }
      }else {
        let d = new Date(values.birthday._d);
        let datetime = d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        user = {
          id: this.state.userInfo.id,
          userName: values.userName,
          password: values.password,
          gender: values.gender === "男" ? 1 : 0,
          birthday: datetime
        }
      }
      let temp = values;
      if (temp.userName === undefined || temp.password === undefined || temp.confirm === undefined) {
        return;
      }
      let passwordLength = temp.password.length;
      if (passwordLength < 8 || passwordLength > 13) {
        message.error('密码长度应在8-12位！');
        return;
      }
      updateUser(user).then((result) => {
        if (result.code === '200') {
          message.success('更新成功');
          setCookie("ACCESS_TOKEN", user.userName);
          router.push('/userInfo');
        } else {
          message.error(result.msg);
        }
      })
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render(){
    let date = moment(this.state.userInfo.birthday).format("YYYY-MM-DD");
    const { getFieldDecorator } = this.props.form;
    return(
      <LocaleProvider locale={zh_CN}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
                <Tabs onChange="" type="card">
                  <TabPane tab="我的信息" key="1" >
                    <Form align='center' >
                      <div>
                        <span>用户名：</span><Input style={{width: 200}} value={this.state.userInfo.userName}
                                                placeholder="Enter your username"
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

                      />
                      </div>
                      <br/>
                      <div>
                        <span>&nbsp;密&nbsp;&nbsp;码：&nbsp;</span><Input.Password style={{width: 200}} value={this.state.userInfo.password} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Password" visibilityToggle="true" />
                      </div>
                      <br/>
                      <div>
                        <span>&nbsp;性&nbsp;&nbsp;别：&nbsp;</span><Select style={{width: 200}} value={this.state.userInfo.gender === 1 ? "男":"女"}
                                                                        placeholder="选择性别"
                                                                        onChange={this.handleSelectChange}
                      >
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                      </Select>
                      </div>
                      <br/>
                      <div>
                        <span>&nbsp;生&nbsp;&nbsp;日：&nbsp;</span>
                        <Input style={{ width: 200 }} value={date}/>
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane tab="修改信息" key="2">
                    <Form align='center' onSubmit={this.handleUpdate}>
                      <Form.Item
                      ><span>用户名:&nbsp;&nbsp;</span>
                        {getFieldDecorator('userName', {
                          rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
                        })(
                          <Input style={{width:200}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          />
                        )}
                      </Form.Item>
                      <Form.Item
                      ><span>新密码:&nbsp;&nbsp;</span>
                        {getFieldDecorator('password', {
                          rules: [{
                            required: true, message: '请输入密码!',
                          }, {
                            validator: this.validateToNextPassword,
                          }],
                        })(
                          <Input.Password type="password" style={{width:200}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}/>
                        )}
                      </Form.Item>
                      <Form.Item
                      ><span>确认密码:&nbsp;&nbsp;</span>
                        {getFieldDecorator('confirm', {
                          rules: [{
                            required: true, message: '请确认密码!',
                          }, {
                            validator: this.compareToFirstPassword,
                          }],
                        })(
                          <Input.Password type="password" onBlur={this.handleConfirmBlur} style={{width:200}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}/>
                        )}
                      </Form.Item>
                      <Form.Item
                      ><span>性&nbsp;&nbsp;别:&nbsp;&nbsp;</span>
                        {getFieldDecorator('gender', {
                          rules: [{ required: false, message: '请输入性别!', whitespace: true }],
                        })(
                          <Select style={{width: 200}}
                                  placeholder="下拉选择性别"
                                  onChange={this.handleSelectChange}
                          >
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                          </Select>
                        )}
                      </Form.Item>
                      <Form.Item
                      ><span>生&nbsp;&nbsp;日:&nbsp;&nbsp;</span>
                        {getFieldDecorator('birthday', {

                        })(
                          <DatePicker placeholder="请选择时间" style={{ width: 200 }} />
                        )}
                      </Form.Item>
                      <Button htmlType="submit">
                        提交修改
                      </Button>
                    </Form>
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
export default Form.create()(userInfo);


