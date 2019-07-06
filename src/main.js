import React from 'react';
import ReactDOM from 'react-dom';
import BasicRoute from './router/index';
import './main.less'

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <BasicRoute/>,
  document.getElementById('root')
);
