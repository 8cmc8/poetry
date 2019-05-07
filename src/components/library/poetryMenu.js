import { Menu, Icon } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { getRootAndChild } from '@/services/PoetryService';

const SubMenu = Menu.SubMenu;
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
class PoetryMenu extends React.Component {

  constructor(props){
    super(props);
    getRootAndChild().then((result)=>{
      this.setState({
        data:result.data
      })
    });
  }

  state = {
    data:[],
  };


  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {
          this.state.data.map((data)=>{
            return(
              <SubMenu key={data.root.categoryName} title={<span><Icon type="book" /><span>{data.root.categoryName}</span></span>}>
                {
                  data.child.map((child)=>{
                    return(
                      <Menu.Item key={child.categoryName}>{child.categoryName}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    );
  }
}

export default PoetryMenu;
