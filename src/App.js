import React from 'react';

import {BrowserRouter as Router, Link, Route , Switch} from "react-router-dom";

import Home from './components/Home/index';

class App extends React.Component{

  state ={
    name: 'Guest'
  };
  

  render(){
      return(
        <Router>
            <div className="App">
            <h1>Welcome to Habitify</h1>
              <Switch>
                  <Route exact path='/'>
                    <Home/>
                  </Route>
              </Switch>
          </div>
        </Router>
      )
  }
}

export default App;