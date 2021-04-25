import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import './Statistics.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const nowGood = positivePercentage;
  const nowNeutral = Math.ceil((neutral * 100) / total);
  const nowBad = Math.ceil((bad * 100) / total);
  return (
    <>
      <ProgressBar variant="success" now={nowGood} label={`${nowGood}%`} />
      <p className="Statistics__item">Good: {good}</p>
      <ProgressBar
        variant="warning"
        now={nowNeutral}
        label={`${nowNeutral}%`}
      />
      <p className="Statistics__item">Neutral: {neutral}</p>
      <ProgressBar variant="danger" now={nowBad} label={`${nowBad}%`} />
      <p className="Statistics__item">Bad: {bad}</p>
      <p className="Statistics__item">Total: {total}</p>
      <p className="Statistics__item">
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
