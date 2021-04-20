import React from 'react';
import PropTypes from 'prop-types';

import Section from '../components/Section';
import FeedbackOptions from '../components/FeedbackOptions';
import Statistics from '../components/Statistics';
import Notification from '../components/Notififcation';

class StatisticsCounter extends React.Component {
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

  // handleGood = event => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

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
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          // onNeutral={this.onLeaveFeedback}
          // onBad={this.onLeaveFeedback}
        />
        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    );
  }
}

export default StatisticsCounter;
