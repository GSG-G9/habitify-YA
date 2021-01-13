import React from 'react';

import { Link, Route } from 'react-router-dom';

import HabitForm from '../HabitForm/index';

const AddHabit = (props) => {
  const { habits } = props;

  return (
    <div className="add-habit">
      <h3>Pick one habit to get started</h3>
      <h4>Most Popular Habits</h4>
      <section className="add-habit-cards">
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <Link
                to={habit.id === 0 ? '/newHabit/new' : `/newHabit/${habit.id}`}
              >
                {habit.habit}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AddHabit;
