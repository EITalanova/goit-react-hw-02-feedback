import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countlGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  countlNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  countlBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = Math.round(
      this.countPositiveFeedbackPercentage()
    );
    return (
      <div>
        <p className={css.title}>Pleace leave feedback</p>
        <ul className={css.list}>
          <li>
            <button className={css.btn} onClick={this.countlGoodFeedback}>
              Good
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={this.countlNeutralFeedback}>
              Neutral
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={this.countlBadFeedback}>
              Bad
            </button>
          </li>
        </ul>
        <p className={css.title}>Statistics</p>
        <ul className={css.list}>
          <li>
            <span>Good </span>
            <span>{this.state.good}</span>
          </li>
          <li>
            <span>Neutral </span>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad </span>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <span>Total </span>
            <span>{total}</span>
          </li>
          <li>
            <span>Positive feedbak </span>
            <span>{positiveFeedbackPercentage}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
