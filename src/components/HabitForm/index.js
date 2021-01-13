import { PropTypes } from 'prop-types';

import React from 'react';

import './style.css';

class HabitForm extends React.Component {
  state = {
    hobiName: '',
    repetition: 'daily',
    reminder: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState(() => ({
      hobiName: e.target.value,
    }));
  };

  handleChangeSelect = (e) => {
    e.preventDefault();
    this.setState(() => ({
      repetition: e.target.value,
    }));
  };

  handleChangeReminder = (e) => {
    e.preventDefault();
    this.setState(() => ({
      reminder: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    const {
      history: { push },
      handleHabitData,
    } = this.props;
    const { hobiName, repetition, reminder } = this.state;

    e.preventDefault();
    handleHabitData(hobiName, repetition, reminder);
    push('/profile');
  };

  handleDiscard = (e) => {
    const {
      history: { push },
    } = this.props;
    e.preventDefault();
    push('/new');
  };

  render() {
    const {
      match: {
        params: { habitId },
      },
      habits,
    } = this.props;
    const { hobiName } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="habitName">
            Habit Name
            <input
              type="text"
              name="habit name"
              id="habitName"
              placeholder={habitId === 'new' ? hobiName : habits[habitId].habit}
              onChange={(e) => this.handleChange(e)}
              value={hobiName}
            />
          </label>
          <label htmlFor="repetition">
            repetition
            <select
              name="repetition"
              id="repetition"
              onChange={(e) => this.handleChangeSelect(e)}
            >
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>
          <label htmlFor="reminder">
            reminder
            <input
              type="datetime-local"
              id="reminder"
              name="reminder"
              onChange={(e) => this.handleChangeReminder(e)}
            />
          </label>
          <input type="submit" name="Apply" />
          <input
            type="button"
            name="Discard"
            value="Discard"
            onClick={this.handleDiscard}
          />
        </form>
      </div>
    );
  }
}
HabitForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.func.isRequired,
  }).isRequired,
  handleHabitData: PropTypes.func.isRequired,
  habits: PropTypes.shape.isRequired,
};
export default HabitForm;
