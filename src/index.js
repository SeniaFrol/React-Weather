import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/main.js';
import Weather from './components/weather.js';
import About from './components/about.js';
import Examples from './components/examples.js';

class App extends Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
          </Route>
      </Router>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
