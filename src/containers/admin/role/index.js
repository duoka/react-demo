import React from "react";
import { Table, Divider, Tag, Input, Button } from 'antd';
import data from "./data";
import './index.less';
const { Search } = Input;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '角色描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    render: text => (
      <span>{text?"开启":"禁用"}</span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="primary" size="small">
          编辑
        </Button>
      <Divider type="vertical" />
        <Button type="danger" size="small">
          {record.status?"禁用":"开启"}
        </Button>
    </span>
    ),
  },
];

class Role extends React.Component {
  render() {
    return(
      <div>
        <div className="role-list">
          <div className="role-list-search">
            <Search
              placeholder="请输入角色名称"
              style={{ width: 200 }}
              enterButton
            />
          </div>
          <div className="role-list-search">
            <Button type="primary" size="small" icon="user-add">
              添加
            </Button>
          </div>

        </div>
        <Table
          rowKey={(record) => `complete${record.id}`}
          columns={columns}
          dataSource={data}
          bordered
          size="middle"
        />
      </div>
    );
  };
}

export default Role;
