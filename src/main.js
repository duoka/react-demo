import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import './main.less'
import routers from "router";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutContainer                  from "containers/layout";
import Login                            from "containers/login";

if (module.hot) {
  module.hot.accept();
}

class Main extends React.Component {
  render() {
    let LayoutRouter = (
        <LayoutContainer>
          <Switch>
            {
              routers.map(item => {
                return(
                  <Route exact key={item.path} path={item.path} component={item.component}/>
                )
              })
            }
          </Switch>
        </LayoutContainer>
    );
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={props => LayoutRouter}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
