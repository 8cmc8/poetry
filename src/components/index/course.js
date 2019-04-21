import React from 'react';
import { Icon, Tabs, Button } from 'antd';
import CourseList from './courseList';

const TabPane = Tabs.TabPane;

class MyCourse extends React.Component {
    render() {
        return (
            <div className="card-container">
                <Tabs defaultActiveKey="1" type="line">
                    <TabPane tab={<span><Icon type="home" />课程</span>} key="1">
                        <CourseList />
                    </TabPane>
                </Tabs>
                <br/><br/>
                <div align="center">
                <Button type="dashed">显示更多</Button>
                </div>
            </div>
        );
    };
}

export default MyCourse;