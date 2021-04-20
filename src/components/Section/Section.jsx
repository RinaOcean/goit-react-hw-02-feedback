import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className="Section">
    <h1 className="Section__title">{title}</h1>
    {children}
  </section>
);

export default Section;

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
