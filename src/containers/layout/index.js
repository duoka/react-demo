import React                     from "react";
import {Route, Switch}           from "react-router-dom";
import { Layout, BackTop }       from "antd";
import HeaderComponent           from "components/header";
import SiderComponent            from "components/sider";
import FooterComponent           from "components/footer";
import ContentComponent          from "components/content";
import routes                    from "router/index";
import "./index.less"

class LayoutContainer extends React.Component {
  render() {
    return (
      <Layout className="wrap-layout">
        <SiderComponent/>
        <Layout>
          <HeaderComponent/>
          <ContentComponent/>
          <div className="wrap-layout-content">
            <Switch>
              {
                routes.map(item => {
                  return (
                    <Route
                      component={item.component}
                      key={item.path}
                      path={item.path}
                    />
                  );
                })
              }
            </Switch>
          </div>
          <FooterComponent/>
          <BackTop />
        </Layout>
      </Layout>
    );
  };
}

export default LayoutContainer;
