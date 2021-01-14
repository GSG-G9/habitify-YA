import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

class Home extends React.Component {
  state = {
    name: ' ',
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    const {
      handleName,
      history: { push },
    } = this.props;

    const { name } = this.state;
    event.preventDefault();
    if (name === ' ') {
      this.setState({ name: 'Guest' });
    } else {
      handleName(name);
      push('/profile');
    }
  };

  render() {
    const { name } = this.state;
    return (
      <div className="home-container">
        <div className="home">
          <h1>Welcome to Habitify</h1>
          <form onSubmit={this.handleSubmit} className="home-form">
            <label htmlFor="username">
              Enter your name
              <input
                className="home-form-text"
                type="text"
                id="username"
                value={name}
                placeholder="username"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Start" className="home-form-submit" />
          </form>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  handleName: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Home;
