import React from "react";
import {Button, Divider, Table, Input} from "antd";
import users from "./data";
import "./index.less"

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '姓名',
    dataIndex: 'real_name',
    key: 'real_name',
  },
  {
    title: '角色',
    dataIndex: 'role_name',
    key: 'role_name',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '最后登录时间',
    dataIndex: 'last_login_time',
    key: 'last_login_time',
  },
  {
    title: '最后登录IP',
    dataIndex: 'last_login_ip',
    key: 'last_login_ip',
  },
  {
    title: '活跃状态',
    dataIndex: 'active',
    key: 'active',
    render: text => (
        <span>{text?"活跃":"随眠"}</span>
    ),
  },
  {
    title: '开启状态',
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

class AdminUser extends React.Component {
  render() {
    return(
        <div>
          <div className="admin-user-list">
            <div className="admin-user-list-search">
              <Input addonBefore="用户名:" placeholder="请输入用户名" />
              <Input addonBefore="姓名:" placeholder="请输入用姓名" />
              <Input addonBefore="角色:" placeholder="请输入角色名" />
              <Input addonBefore="手机号:" placeholder="请输入手机号" />
              <Button type="primary" icon="search">查询</Button>
            </div>
            <div className="admin-user-list-search">
              <Button type="primary" size="small" icon="user-add">
                添加
              </Button>
            </div>
          </div>
          <Table
            rowKey={(record) => `complete${record.id}`}
            columns={columns}
            dataSource={users}
            bordered
            size="middle"
          />
        </div>
    );
  };
}

export default AdminUser;
