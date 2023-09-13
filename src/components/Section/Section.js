import propTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    {children}
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
