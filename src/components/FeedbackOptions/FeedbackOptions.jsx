import React from 'react';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="FeedbackOptions">
    {options.map(({ btnName, iconName, id }) => {
      const btnClassList = ['FeedbackOptions__btn', btnName].join(' ');
      const iconClassList = ['material-icons icon', 'icon', btnName].join(' ');

      return (
        <button
          key={id}
          className={btnClassList}
          type="button"
          onClick={onLeaveFeedback}
        >
          <span className={iconClassList}>{iconName}</span>
          {btnName}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;
