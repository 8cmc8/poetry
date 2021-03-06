import React from 'react';
import { Carousel, Row, Col, Pagination, Icon } from 'antd';
import News from './news';

class MyCarousel extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <div align="center" style={{fontSize:20, fontFamily: "Gill Sans"}}>资讯通告&nbsp;&nbsp;&nbsp;<Icon type="sound" theme="filled" /></div>
            <div><News/><div align="center" ><Pagination simple defaultCurrent={1} total={50} /></div></div>
          </Col>
          <Col span={16}>
            <Carousel autoplay effect="fade"><div ><img height="400" width="800" alt="" src={require("../../assets/2.jpg")} /></div>
              <div><img height="400" width="800" alt="" src={require("../../assets/4.jpg")} /></div>
              <div><img height="400" width="800" alt="" src={require("../../assets/8.jpg")} /></div>
              <div><img height="400" width="800" alt="" src={require("../../assets/1.jpg")} /></div>
            </Carousel>
          </Col>
        </Row>
      </div>

    );
  };
}

export default MyCarousel;
