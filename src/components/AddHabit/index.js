import React from 'react';

import { Link } from 'react-router-dom';

class AddHabit extends React.Component {
  state = {
    habits: [
      { id: 1, habit: 'Create your own ' },
      { id: 2, habit: 'read Books' },
      { id: 3, habit: 'Running' },
      { id: 4, habit: 'Swimming' },
      { id: 5, habit: 'Wear a mask' },
      { id: 6, habit: 'Drink Water' },
    ],
  };

  render() {
    const { habits } = this.state;

    return (
      <div className="add-habit">
        <h3>Pick one habit to get started</h3>
        <h4>Most Popular Habits</h4>
        <section className="add-habit-cards">
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>
                <Link to="/new/habit">{habit.habit}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default AddHabit;
