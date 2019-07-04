import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Layout from './components/layout/index';
import Index from './containers/index/index';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route component={Index}/>
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/" render={ props => LayoutRouter}/>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
