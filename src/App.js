import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './components/Home/index';

import HabitProfile from './components/HabitProfile/index';

import AddHabit from './components/AddHabit/index';

import logo from './images/logo.svg';

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
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home handleName={this.handleName} {...props} />}
          />

          <Route
            exact
            path="/profile"
            render={(props) => <HabitProfile name={name} {...props} />}
          />
          <Route
            exact
            path="/new"
            render={(props) => (
              <>
                <HabitProfile name={name} {...props} />
                <AddHabit {...props} />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
