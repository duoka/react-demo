import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from '../containers/index/index';
import Admin from '../containers/admin/index';
import Login from '../containers/login/index';
import Layouts from "../components/layouts";

const LayoutRouter = (
    <Layouts>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
    </Layouts>
);

const BasicRoute = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/" render={ props => LayoutRouter}/>
      </Switch>
    </BrowserRouter>
);

export default BasicRoute;
