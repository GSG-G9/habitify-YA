import React from 'react';

import { Link } from 'react-router-dom';

import user from '../../images/user.png';

import add from '../../images/add.png';

import './style.css';
// eslint-disable-next-line react/prefer-stateless-function
class HabitProfile extends React.Component {
  render() {
    return (
      <section className="habit-profile">
        <section className="habit-profile-header">
          <img src={user} alt="user" />
          <h2> Guest Name</h2>
        </section>
        <Link to="/habits"> Pending </Link>
        <Link to="/habits/completed"> Completed </Link>
        <Link to="/habits/new">
          <img src={add} alt="Add" />
        </Link>
        <section />
      </section>
    );
  }
}
export default HabitProfile;
