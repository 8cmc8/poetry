import React from 'react';
import { Card, Icon, Row, Col, Rate } from 'antd';
import { getAllCourseList } from '@/services/CourseService';
import router from 'umi/router';


const { Meta } = Card;

class MyCourseList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courseList:[],
    }
    getAllCourseList().then((result)=>{
      this.setState({
        courseList:result.data
      })
    });
  }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Row gutter={16}>
                      {
                        this.state.courseList.map((course,key)=>{
                          if (key < 4){
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
                          }
                        })
                      }

                    </Row>
                </React.Fragment>
            </div>

        );
    };
}

export default MyCourseList;
