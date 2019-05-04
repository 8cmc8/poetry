import React from 'react';
import { Row, Col } from 'antd';
import '../css/index.css';
import Link from 'umi/link';
import { connect } from 'dva';

const namespace = 'poetryCategoryChild';

const mapStateToProps = (state) => {
  const childCategory = state[namespace].child;
  return {
    childCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: (rootName) => {
      const action = {
        type: `${namespace}/getChildList`,
        payload: rootName
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Category extends React.Component {

  componentDidMount() {
    this.props.onDidMount(this.props.rootName);
  }


  render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                  {
                    this.props.childCategory.map((child,key)=>{
                      return(<Col align="center" className="gutter-row" span={6}>
                        <Link to={'/poetryList?name='+child.childCategoryName}>
                          <div className="gutter-box">
                            <img height="200" width="150" alt="" src={child.imageUrl}></img>
                          </div>
                          <div>{child.childCategoryName}</div>
                        </Link>
                      </Col>)
                    })
                  }
                </Row>
            </div>
        );
    };
}

export default Category;
