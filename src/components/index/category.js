import React from 'react';
import { Row, Col } from 'antd';
import '../css/index.css';

class Category extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                </Row>
                <br/><br/><br/>
                <Row gutter={16}>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                    <Col align="center" className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <img height="200" width="200" alt="" src={require("../../assets/5.jpg")}></img>
                        </div>
                        <div>子类目名</div>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default Category;