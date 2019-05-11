

import { Card, Col, Icon, List, Rate, Row, Tabs, Avatar } from 'antd';
import React from 'react';
import { getAllCourseList, getCourseDetailById } from '@/services/CourseService';
import picture from '../assets/teacher.png';
import router from 'umi/router';
// for (let i = 0; i < 2; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: this.state.courseDetail.courseName,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

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
      data:[
        {
          title: ''
        }
      ]
    }
    getAllCourseList().then((result)=>{
      this.setState({
        courseList:result.data
      })
    });
    this.state.urlId === undefined ? console.log():
      getCourseDetailById(this.state.urlId).then((result)=>{
        this.setState({
          courseDetail:result.data,
          data:[
            {
              title:result.data.courseName
            }
          ]
        })
      });

  }

  render() {
    return (
      <div className="card-container">
        <Tabs defaultActiveKey="1" type="line">
          <TabPane tab={<span><Icon type="schedule" />课程</span>} key="1">
            <div align='center'>
              {this.state.urlId === undefined ?
                <React.Fragment>
                  <Row gutter={16}>
                    {
                      this.state.courseList.map((course,key)=>{
                        return(
                          <Col align="center" className="gutter-row" span={6}>
                            <Card
                              hoverable
                              style={{ width: 300 }}
                              cover={<img style={{ height: 220 }} src={course.imageUrl} />}
                              onClick={()=>{
                                router.push('/courseDetail?id='+course.id)
                              }}
                            >
                              <Meta
                                title={course.courseName}
                              />
                              <br/>
                              <div>
                                <Icon style={{ paddingLeft: 15 }} />评分：
                                <Rate disabled defaultValue={course.starLevel} />
                              </div>
                              <div style={{ paddingTop: 5 }}>
                                <Icon type='user' style={{ paddingLeft: 15 }} />收藏人数&nbsp;&nbsp;{course.collectionNums}
                              </div>
                            </Card>
                          </Col>
                        )
                      })
                    }

                  </Row>
                </React.Fragment>
                :
                <List
                  style={{width:600}}
                  itemLayout="horizontal"
                  dataSource={this.state.data}
                  renderItem={item => (

                    <List.Item
                      extra={<img width={300} alt="logo" src={this.state.courseDetail.imageUrl} />}
                    >
                      <List.Item.Meta


                        title={item.title}
                        description= {
                          <div>
                            <br/>
                            <div>
                              <Avatar src={picture} />
                              主讲人：{this.state.courseDetail.teacher}
                            </div>
                            <br/>
                            <div>课程简介：{this.state.courseDetail.courseIntroduce}</div>
                            <br/>
                            <div>总时长：{this.state.courseDetail.totalTime}分钟</div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              }

            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }


}

export default course;
