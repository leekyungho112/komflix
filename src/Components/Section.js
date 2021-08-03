import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0%{
    transform: translateY(-20px); 
    opacity: 0;
  }
 100%{
    transform: translateY(0px); 
    opacity: 1;
  }
`;

const Container = styled.div`
  :first-child {
    animation: ${slideIn} 1s ease-in forwards 0.5s;
    transform: translateY(-20px);
    opacity: 0;
  }
  :nth-child(2) {
    animation: ${slideIn} 3s ease-in forwards 1s;
    transform: translateY(-20px);
    opacity: 0;
  }
  :last-child {
    animation: ${slideIn} 5s ease-in forwards 2s;
    transform: translateY(-20px);
    opacity: 0;
  }
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #f22b7c;
`;
const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 20px;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
