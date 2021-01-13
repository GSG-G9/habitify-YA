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

import HabitForm from './components/HabitForm';

import logo from './images/logo.svg';

class App extends React.Component {
  state = {
    name: '',
    habits: [
      { id: 0, habit: 'Create your own ' },
      { id: 1, habit: 'read Books' },
      { id: 2, habit: 'Running' },
      { id: 3, habit: 'Swimming' },
      { id: 4, habit: 'Wear a mask' },
      { id: 5, habit: 'Drink Water' },
    ],
  };

  handleName = (newName) => {
    this.setState({ name: newName });
  };

  render() {
    const { name, habits } = this.state;
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
                <AddHabit habits={habits} {...props} />
              </>
            )}
          />
          <Route
            exact
            path="/newHabit/:habitId"
            render={(props) => <HabitForm habits={habits} {...props} />}
          />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
