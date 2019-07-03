import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './app.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main">App</h1>
        <br/>
        <h2> React </h2>
        <br/>
        <h3> demo </h3>
      </div>
    );
  };
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
