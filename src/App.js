import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './components/Home/index';

import HabitProfile from './components/HabitProfile/index';

class App extends React.Component {
  state = {
    name: '',
  };

  handleName = (newName) => {
    this.setState({ name: newName });
  };

  render() {
    const { name } = this.state;
    return (
      <Router>
        <div className="App">
          <h1>Welcome to Habitify</h1>
          <Switch>
            <Route exact path="/">
              <Home handleName={this.handleName} />
            </Route>
            <Route exact path="/profile">
              <HabitProfile name={name} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
