import React from 'react';
import { Tabs, Icon } from 'antd';
import Category from './category';
import { connect } from 'dva';

const TabPane = Tabs.TabPane;
const namespace = 'poetryCategory';

const mapStateToProps = (state) => {
  const rootCategory = state[namespace].root;
  return {
    rootCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      const action = {
        type: `${namespace}/getRootList`,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class MyLibrary extends React.Component {

  componentDidMount() {
    this.props.onDidMount();
  }



  render() {
        return (
                
                <div className="card-container">
                    <Tabs defaultActiveKey="0" type="line" >
                      {
                        this.props.rootCategory.map( (root,key) =>{
                          return(
                            <TabPane tab={<span><Icon type="book" />{root.rootCategoryName}</span>} key={key}>
                              <Category rootName={root.rootCategoryName}/>
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
