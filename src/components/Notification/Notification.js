import propTypes from 'prop-types';
import { Message } from './Notifications.styled';

export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
