import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/index';

class App extends React.Component {
  state = {
    name: '',
  };
  
  HandleName = (newName) => {
    this.setState((previousState) => {
      return {
        name: newName,
      };
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <h1>Welcome to Habitify</h1>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => {
                return <Home HandleName={this.HandleName} {...props} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
