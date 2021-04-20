import PropTypes from 'prop-types';

const Notifications = ({ message }) => (
  <p className="Notifications">{message}</p>
);

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string,
};
