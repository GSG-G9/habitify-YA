import { func } from 'prop-types';
import React from 'react';

import './style.css';

// const emptyValue = (props) => {
//   const { match } = props;
//   return (
//     <label htmlFor="habitName">
//       Habit Name
//       <input type="text" name="habit name" id="habitName" value=" " />
//     </label>
//   );
// };

// const habitValue = (props) => {
//   const { match } = props;
//   const {
//     params: { habit },
//   } = match;
//   return (
//     <label htmlFor="habitName">
//       Habit Name
//       <input type="text" name="habit name" id="habitName" value={habit} />
//     </label>
//   );
// };

// const valueCondition = (props) => {
//   const { match } = props;
//   const {
//     params: { habit },
//   } = match;
//   if (habit === 'Create your own') {
//     return <emptyValue />;
//   }
//   return <habitValue />;
// };
const HabitForm = (props) => {
  const { match, habits } = props;
  const {
    params: { habitId },
  } = match;
  console.log('my habit:', habitId);
  return (
    <div>
      <form>
        <label htmlFor="habitName">
          Habit Name
          <input
            type="text"
            name="habit name"
            id="habitName"
            value={
              habitId === 'new' ? 'Enter your Habit' : habits[habitId].habit
            }
          />
        </label>
        <label htmlFor="repetition">
          repetition
          <select name="repetition" id="repetition">
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
        <label htmlFor="reminder">
          reminder
          <input type="datetime-local" id="reminder" name="reminder" />
        </label>
        <input type="submit" name="Apply" />
        <input type="button" name="Discard" />
      </form>
    </div>
  );
};
export default HabitForm;
