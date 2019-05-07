import React from 'react';
import { List, Avatar,Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
const data = [
  {
    title: '春晓',
  },
  {
    title: '元日',
  },

];

class poetryList extends React.Component{
  render() {
    return(
      <Card title="Card Title">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
// {/*      <List*/}
// {/*        itemLayout="horizontal"*/}
// {/*        dataSource={data}*/}
// {/*        renderItem={item => (*/}
// {/*          <List.Item>*/}
// {/*            <List.Item.Meta*/}
// {/*              avatar={<Avatar src="" />}*/}
// {/*              title={<a href="https://ant.design">{item.title}</a>}*/}
// {/*              description="爆竹声中一岁除，春风送暖入屠苏。*/}
//
// {/*千门万户曈曈日，总把新桃换旧符。"*/}
// {/*            />*/}
// {/*          </List.Item>*/}
// {/*        )}*/}
// {/*      />*/}
    )
  }
}
export default poetryList;
