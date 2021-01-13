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
    myHobies: [
      {
        id: Date.now(),
        hobiName: 'CA Meeting',
        repetition: 'daily',
        reminder: '2021-01-13T08:59',
        checkDone: false,
      },
    ],
  };

  handleName = (newName) => {
    this.setState({ name: newName });
  };

  handleHabitData = (hobiName, repetition, reminder) => {
    this.setState((previousState) => ({
      myHobies: [
        ...previousState.myHobies,
        {
          id: Date.now(),
          hobiName,
          repetition,
          reminder,
          checkDone: false,
        },
      ],
    }));
  };

  render() {
    const { name, habits, myHobies } = this.state;
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
            render={(props) => (
              <HabitForm
                habits={habits}
                handleHabitData={this.handleHabitData}
                myHobies={myHobies}
                {...props}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
