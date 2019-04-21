import React from 'react';
import { List, Avatar, Icon,Tabs } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: '',
        title: `话题名称 ${i}`,
        avatar: '',
        description: '话题简介',
        content: '话题内容balabala',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);


const TabPane = Tabs.TabPane;

class MyCommunity extends React.Component {

    render() {
        return (

            <div className="card-container">
                <Tabs defaultActiveKey="1" type="line">
                    <TabPane tab={<span><Icon type="home" />社区</span>} key="1">
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={listData}
                            footer={<div></div>}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                    extra={<img width={272} alt="logo" src={require("../../assets/8.jpg")} />}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </TabPane>
                </Tabs>
            </div>
        );
    };
}

export default MyCommunity;