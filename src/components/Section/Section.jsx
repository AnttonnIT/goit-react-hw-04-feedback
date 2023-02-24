import PropTypes from 'prop-types';
import { SectionStyled, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyled>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
