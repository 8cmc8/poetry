import React from 'react';
import { List, Avatar, Icon, Tabs, Card } from 'antd';


const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);


const TabPane = Tabs.TabPane;

class MyCommunity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content:'sd',
      listData:[]
    }
    for (let i = 0; i < 10; i++) {
      this.state.listData.push({
        href: '',
        title: `话题名称 ${i}`,
        avatar: '',
        description: '发起人：mike 发布时间：2019-05-10',
        content: this.state.content,
      });
    }
  }


    render() {
        return (

            <div className="card-container" >
                <Tabs defaultActiveKey="1" type="line" >
                    <TabPane tab={<span><Icon type="usergroup-add" />社区</span>} key="1">
                        <List
                          align='center'
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 4,
                            }}
                            dataSource={this.state.listData}
                            footer={<div></div>}
                            renderItem={item => (
                                <Card align='center' style={{width:1000}}>
                                  <List.Item
                                    key={item.title}
                                    actions={[<IconText type="heart-o" text="113" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                    extra={<Card><img width={272} alt="logo" src={require("../../assets/8.jpg")} /></Card>}
                                >
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                                </Card>
                            )}
                        >
                          <br/>
                        </List>
                    </TabPane>
                </Tabs>
            </div>
        );
    };
}

export default MyCommunity;
