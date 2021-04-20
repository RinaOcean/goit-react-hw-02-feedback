import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import './Statistics.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const now = positivePercentage;

  return (
    <>
      <ProgressBar variant="success" now={now} label={`${now}%`} />
      <p className="Statistics__item">Good: {good}</p>
      <ProgressBar variant="warning" now={now} label={`${now}%`} />
      <p className="Statistics__item">Neutral: {neutral}</p>
      <ProgressBar variant="danger" now={now} label={`${now}%`} />
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
