import React from 'react';

import { Link } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import './style.css';

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
AddHabit.propTypes = {
  habits: PropTypes.shape.isRequired,
};
export default AddHabit;
