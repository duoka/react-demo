import React                  from "react";
import { Link }               from "react-router-dom"
import { Layout, Menu, Icon } from "antd";
import menus                  from "router/menus";

const { Sider }   = Layout;
const { SubMenu } = Menu;
const MenuItem    = Menu.Item;

class SiderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      menuNode: '',
    };
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  componentDidMount() {
    this.setState({
      menuNode: this.renderMenu(menus),
    });
  };

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.child) {
        return (
          <SubMenu
            key={"sub"+item.id}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.child)}
          </SubMenu>
        );
      } else {
        return (
            <MenuItem key={item.id}>
              <Link to={item.path}>
                {item.icon?<Icon type={item.icon}/>:""}
                <span>{item.title}</span>
              </Link>
            </MenuItem>
        );
      }

    });
  };

  render() {
    return (
      <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {this.state.menuNode}
        </Menu>
      </Sider>
    )
  }
}

export default SiderComponent;
