import React                  from 'react';
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

class ContentComponent extends React.Component {

  render() {
    return (
      <Content style={{ margin: '24px 16px 0' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </Content>
    )
  }
}

export default ContentComponent;
