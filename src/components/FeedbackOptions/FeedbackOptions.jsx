const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button
      className="SectionFeedbackOptions__btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className="SectionFeedbackOptions__btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className="SectionFeedbackOptions__btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </>
);

export default FeedbackOptions;
