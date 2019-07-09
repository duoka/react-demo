import React     from 'react';
import { Layout, Icon, Dropdown, Avatar, Menu} from "antd";
import "./index.less"

const { Header } = Layout;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      DropdownList: ""
    }
  };

  componentDidMount() {
    this.setState({
      DropdownList: this.renderDropdownList(),
    });
  };

  renderDropdownList = () => {
    return (
        <Menu>
          <Menu.Item
              key='edit'
          >
            <Icon type='edit'/>
            个人设置
          </Menu.Item>
          <Menu.Item
              key='logout'
          >
            <Icon type='logout'/>
            退出登录
          </Menu.Item>
        </Menu>
    );
  };

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="header-right">
          <div
            className='dropdown-wrap'
            id='dropdown-wrap'
          >
            <Dropdown
              getPopupContainer={() => document.getElementById('dropdown-wrap')}
              overlay={this.state.DropdownList}
            >
              <div className="wrap">
                <Icon type='user'/>
                <span className="wrap-content">
                  {this.state.username}
                </span>
                <Icon
                  style={{color:'rgba(0,0,0,.3)'}}
                  type="caret-down"
                />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    )
  }
}

export default HeaderComponent;
