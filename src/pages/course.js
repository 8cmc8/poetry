
import CourseList from '../components/index/courseList';
import { Icon, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default function () {
    return (
        <div className="card-container">
            <Tabs defaultActiveKey="1" type="line">
                <TabPane tab={<span><Icon type="schedule" />课程</span>} key="1">
                    <CourseList />
                    <br /><br />
                    <CourseList />
                    <br /><br />
                    <CourseList />
                </TabPane>
            </Tabs>
        </div>
    );
}
