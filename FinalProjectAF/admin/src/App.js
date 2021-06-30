import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import homepage from './components/HomePage'


class App extends Component{

  render() {
    return(
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={homepage}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;