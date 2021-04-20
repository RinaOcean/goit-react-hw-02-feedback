import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

export default Section;
