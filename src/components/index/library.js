import React from 'react';
import { Tabs, Icon } from 'antd';
import Category from './category';

const TabPane = Tabs.TabPane;

class MyLibrary extends React.Component {
    render() {
        return (
                
                <div className="card-container">
                    <Tabs defaultActiveKey="1" type="line">
                    <TabPane tab={<span><Icon type="home" />选集</span>} key="1">
                        <Category/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="home" />主题</span>} key="2">
                        <Category/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="home" />写景</span>} key="3">
                        <Category />
                    </TabPane>
                    <TabPane tab={<span><Icon type="home" />节日</span>} key="4">
                        <Category />
                    </TabPane>
                    <TabPane tab={<span><Icon type="home" />节气</span>} key="5">
                        <Category />
                    </TabPane>
                    </Tabs>
                </div>
        );
    };
}

export default MyLibrary;