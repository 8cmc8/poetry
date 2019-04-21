import React from 'react';
import { Card, Icon, Row, Col } from 'antd';


const { Meta } = Card;

class MyCourseList extends React.Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Row gutter={16}>
                        <Col align="center" className="gutter-row" span={6}>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="" style={{ height: 200 }} src={require("../../assets/6.jpg")} />}
                            >
                                <Meta
                                    title="课程名"
                                />
                                <div style={{ paddingTop: 5 }}>
                                    ￥88.88
                    <Icon type='user' style={{ paddingLeft: 20 }} />111
                    <Icon type="star" theme="filled" style={{ color: 'yellow', paddingLeft: 20 }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                </div>

                            </Card>
                        </Col>
                        <Col align="center" className="gutter-row" span={6}>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="" style={{ height: 200 }} src={require("../../assets/7.jpg")} />}
                            >
                                <Meta
                                    title="课程名"
                                />
                                <div style={{ paddingTop: 5 }}>
                                    ￥88.88
                    <Icon type='user' style={{ paddingLeft: 20 }} />111
                    <Icon type="star" theme="filled" style={{ color: 'yellow', paddingLeft: 20 }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                </div>

                            </Card>
                        </Col>
                        <Col align="center" className="gutter-row" span={6}>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="" style={{ height: 200 }} src={require("../../assets/6.jpg")} />}
                            >
                                <Meta
                                    title="课程名"
                                />
                                <div style={{ paddingTop: 5 }}>
                                    ￥88.88
                    <Icon type='user' style={{ paddingLeft: 20 }} />111
                    <Icon type="star" theme="filled" style={{ color: 'yellow', paddingLeft: 20 }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                </div>

                            </Card>
                        </Col>
                        <Col align="center" className="gutter-row" span={6}>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="" style={{ height: 200 }} src={require("../../assets/7.jpg")} />}
                            >
                                <Meta
                                    title="课程名"
                                />
                                <div style={{ paddingTop: 5 }}>
                                    ￥88.88
                    <Icon type='user' style={{ paddingLeft: 20 }} />111
                    <Icon type="star" theme="filled" style={{ color: 'yellow', paddingLeft: 20 }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                    <Icon type="star" theme="filled" style={{ color: 'yellow' }} />
                                </div>

                            </Card>
                        </Col>
                    </Row>
                </React.Fragment>
            </div>

        );
    };
}

export default MyCourseList;