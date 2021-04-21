import React from 'react';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="FeedbackOptions">
    {options.map(({ btnName, iconName, id }) => {
      const btnClassList = ['FeedbackOptions__btn', btnName].join(' ');
      const iconClassList = ['material-icons icon', 'icon', btnName].join(' ');

      return (
        <button
          className={btnClassList}
          type="button"
          onClick={onLeaveFeedback}
        >
          <span className={iconClassList}>{iconName}</span>
          {btnName}
        </button>
      );
    })}

    {/* <button
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
    </button> */}
  </div>
);

export default FeedbackOptions;
