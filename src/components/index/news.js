import React from 'react';
import { List, Avatar } from 'antd';

const data = [
    {
        title: '资讯标题1',
    },
    {
        title: '资讯标题2',
    },
    {
        title: '资讯标题3',
    },
    {
        title: '资讯标题4',
    },
    {
        title: '资讯标题5',
    },
];
class News extends React.Component {
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={require("../../assets/logo1.jpg")} />}
                            title={<a href="">{item.title}</a>}
                            description="[2019-3-4]"
                        />
                    </List.Item>
                )}
            />
            
        );
    }

}

export default News;