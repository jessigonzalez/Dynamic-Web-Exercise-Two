import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';

import Home from './containers/Home/index.js'
import PageWrapper from './components/PageWrapper/index.js'
import { faCloud, faSun, faCloudRain} from '@fortawesome/free-solid-svg-icons'

import WeatherIcon from './components/WeatherIcon/index.js'
library.add(fas,faCloud,faSun,faCloudRain);

class App extends Component {
    render(){
        return(
            <div className="App">
              <Router>
                  <Route exact path="/" component={Home} />
              </Router>
            </div>
        );
    }
}
export default App;
