import React from 'react';

import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';

import user from '../../images/user.png';

import add from '../../images/add.png';

import './style.css';

const HabitProfile = (props) => {
  const { name } = props;
  return (
    <section className="habit-profile">
      <section className="habit-profile-header">
        <img src={user} alt="user" />
        <h2 className="habit-profile-header-name">{name}</h2>
      </section>
      <Link to="/profile"> Pending </Link>
      <Link to="/completed"> Completed </Link>
      <Link to="/new" className="habit-profile-add">
        <img src={add} alt="Add" />
      </Link>
      <section />
    </section>
  );
};

HabitProfile.propTypes = {
  name: PropTypes.string.isRequired,
};
export default HabitProfile;
