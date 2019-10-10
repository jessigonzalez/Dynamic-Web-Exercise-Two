import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

import Home from './containers/Home/index.js'
import PageWrapper from './components/PageWrapper/index.js'
class App extends Component {
    render(){
        return(
            <div className="App">
              <Router>
                  <Route exact path="/" component={Home} />
                  <Route path="/PageWrapper/:id" component={PageWrapper} />
              </Router>
            </div>
        );
    }
}
export default App;
