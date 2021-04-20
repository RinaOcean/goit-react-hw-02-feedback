import React from 'react';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="FeedbackOptions">
    <button
      className="FeedbackOptions__btn good"
      type="button"
      onClick={onLeaveFeedback}
    >
      <span className="material-icons icon good">mood</span>
      Good
    </button>
    <button
      className="FeedbackOptions__btn neutral"
      type="button"
      onClick={onLeaveFeedback}
    >
      <span className="material-icons icon neutral">sentiment_neutral</span>
      Neutral
    </button>
    <button
      className="FeedbackOptions__btn bad"
      type="button"
      onClick={onLeaveFeedback}
    >
      <span className="material-icons icon bad">
        sentiment_very_dissatisfied
      </span>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
