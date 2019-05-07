import React from 'react';
import { Tabs, Icon, Row, Col } from 'antd';
import Category from './category';
import { connect } from 'dva';
import { getRootAndChild } from '@/services/PoetryService';
import Link from 'umi/link';


const TabPane = Tabs.TabPane;
// const namespace = 'poetryCategory';
//
// const mapStateToProps = (state) => {
//   const rootCategory = state[namespace].root;
//   return {
//     rootCategory,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDidMount: () => {
//       const action = {
//         type: `${namespace}/getRootList`,
//       };
//       dispatch(action);
//     },
//   };
// };
//
// @connect(mapStateToProps, mapDispatchToProps)
class MyLibrary extends React.Component {

  constructor(props){
    super(props);
    getRootAndChild().then((result)=>{
      console.log(result);
      this.setState({
        data:result.data
      })
    })
  }
  componentDidMount() {

  }

  state = {
    rootName:'',
    data:[]
  }


  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={(key)=>{
          this.setState({
            rootName:key
          })
        }}>
          {
            this.state.data.map( (data) =>{
              return(
                <TabPane tab={<span><Icon type="book" />{data.root.categoryName}</span>} key={data.root.categoryName}>
                  <Row gutter={16}>
                    {
                      data.child.map((child)=>{
                        return(
                          <Col align="center" className="gutter-row" span={6}>
                            <Link to={"/poetryList"}>
                              <div className="gutter-box">
                                <img height={200} width={150} src={child.imageUrl}/>
                                <div >{child.categoryName}</div>
                              </div>
                            </Link>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </TabPane>
              )
            })
          }
        </Tabs>
      </div>
    );
  };
}

export default MyLibrary;
