import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import TestPage from './pages/TestPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <Router history={createBrowserHistory()}>
                  <div>
                      <NavigationBar/>
                      <div className="row">
                          {/*<div className="col-md-3">*/}
                          {/*</div>*/}
                          <div className="col-md-6 col-md-offset-3">
                              <Route exact path="/" component={Home}/>
                              <Route path="/about" component={About}/>
                              <Route path="/test" component={TestPage}/>
                          </div>
                          {/*<div className="col-md-3">*/}
                          {/*</div>*/}
                      </div>
                  </div>
              </Router>
          </div>

          <div className="footer">

          </div>
      </div>
    );
  }
}

export default App;
