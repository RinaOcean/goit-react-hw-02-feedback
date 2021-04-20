import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notifications from '../Notifications';

class StatisticsCounter extends Component {
  // static defaultProps;

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const currValue = event.target.innerText;

    if (currValue === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
      return;
    }
    if (currValue === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
      return;
    }
    if (currValue === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
      return;
    }
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.ceil((this.state.good * 100) / total);
    return percentage;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notifications message="No feedback given"></Notifications>
          )}
        </Section>
      </>
    );
  }
}

export default StatisticsCounter;
