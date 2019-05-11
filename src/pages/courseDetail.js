

import { Card, Col, Icon, List, Rate, Row, Tabs, Avatar, Button, Modal, message } from 'antd';
import React from 'react';
import { commitStar, courseCollection, getAllCourseList, getCourseDetailById } from '@/services/CourseService';
import picture from '../assets/teacher.png';
import router from 'umi/router';
import { getCookie } from '@/utils/cookie';
import { collection, getUserInfo } from '@/services/UserService';
// for (let i = 0; i < 2; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: this.state.courseDetail.courseName,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }
const confirm = Modal.confirm;
const desc = ['毫无收获', '内容差劲', '内容一般', '很棒', '收获极大'];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const { Meta } = Card;
const TabPane = Tabs.TabPane;
const data = [
  {
    title: 'Ant Design Title 1',
  },
];

class course extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      courseList:[],
      urlId:this.props.location.query.id,
      courseDetail:{},
      userInfo:{},
      data:[
        {
          title: ''
        }
      ],
      time:'',
      value:0
    }
    getUserInfo(getCookie('ACCESS_TOKEN')).then((result)=>{
      this.setState({
        userInfo:result.data
      })
    })
    getAllCourseList().then((result)=>{
      this.setState({
        courseList:result.data
      })
    });

    this.state.urlId === undefined ? console.log():
      getCourseDetailById(this.state.urlId).then((result)=>{
        this.setState({
          courseDetail:result.data,
          time:this.formatSeconds(result.data.totalTime),
          data:[
            {
              title:result.data.courseName
            }
          ]
        })
      });
  }
  handleChange = (value) => {
    this.setState({ value });
  }

  formatSeconds(value) {
    let theTime = parseInt(value);// 秒
    let theTime1 = 0;// 分
    let theTime2 = 0;// 小时
    if(theTime > 60) {
      theTime1 = parseInt(theTime/60);
      theTime = parseInt(theTime%60);
      if(theTime1 > 60) {
        theTime2 = parseInt(theTime1/60);
        theTime1 = parseInt(theTime1%60);
      }
    }
    let result = ""+parseInt(theTime)+"秒";
    if(theTime1 > 0) {
      result = ""+parseInt(theTime1)+"分"+result;
    }
    if(theTime2 > 0) {
      result = ""+parseInt(theTime2)+"小时"+result;
    }
    return result;
  }

  render() {
    const { value } = this.state;
    return (
      <div className="card-container">
        <Tabs defaultActiveKey="1" type="line">
          <TabPane tab={<span><Icon type="schedule" />课程</span>} key="1">
            <div align='center'>
              <List
                style={{width:600}}
                itemLayout="horizontal"
                dataSource={this.state.data}
                renderItem={item => (
                  <div>
                    <List.Item
                      extra={<img width={300} height={220} alt="logo" src={this.state.courseDetail.imageUrl} />}
                    >
                      <List.Item.Meta


                        title={item.title}
                        description= {
                          <div>
                            <div>
                              <br/>
                              <div>
                                <Avatar src={picture} />
                                主讲人：{this.state.courseDetail.teacher}
                              </div>
                              <br/>
                              <div>课程简介：{this.state.courseDetail.courseIntroduce}</div>
                              <br/>
                              <div>总时长：{this.state.time}</div>
                            </div>

                          </div>
                        }
                      />

                    </List.Item>
                    <br/>
                    <br/>
                    <Button type='primary' onClick={()=>{
                      window.location.href=this.state.courseDetail.videoUrl;
                    }}>开始学习</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span><a onClick={()=>{
                      let userInfo = getCookie('ACCESS_TOKEN');
                      if(userInfo === ''){
                        confirm({
                          title: '您尚未登录',
                          content: '登录后才能收藏，是否先登录？',
                          okText:"确认",
                          cancelText:"取消",
                          onOk() {
                            router.push('/login');
                          },
                          onCancel() {},
                        });
                      }else{
                        let userInfo={
                          userName:getCookie('ACCESS_TOKEN'),
                          courseId:this.state.urlId
                        }
                        courseCollection(userInfo).then((result)=>{
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
                    }}><Icon type='heart'/>&nbsp;&nbsp;收&nbsp;&nbsp;藏</a></span>
                    <br/>
                    <br/>
                    <br/>
                    <span>评&nbsp;&nbsp;分</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                      <Button type='link' onClick={()=>{
                        let userCourseStar = {
                          userId:this.state.userInfo.id,
                          courseId:this.state.courseDetail.id,
                          starLevel:this.state.value
                        }
                        commitStar(userCourseStar).then((result)=>{
                          if(result.code === '200'){
                            message.success(result.msg);
                          }else{
                            Modal.success({
                              title: '您已经评价过了',
                              okText:"知道了",
                            });
                          }
                        })
                      }
                      }>提交</Button>
                    </span>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                  </div>
                )}
              />

            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }


}

export default course;
