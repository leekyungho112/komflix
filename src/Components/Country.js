import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Ios = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(to left, #ec008c, #fc6767);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  transition: all 0.3s linear;
`;
const Title = styled.h2`
  margin-left: 10px;
  transition: all 0.3s linear;
`;
const List = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    ${Title} {
      color: #fbca36;
    }
    ${Ios} {
      color: #fbca36;
      border: 2px solid #fbca36;
    }
  }
`;

const Country = ({ country }) => {
  return (
    <Container>
      {country &&
        country.length > 0 &&
        country.map((c, index) => (
          <List key={index}>
            <Ios>{c.iso_3166_1}</Ios>
            <Title>{c.name}</Title>
          </List>
        ))}
    </Container>
  );
};

Country.propTypes = {
  iso_3166_1: PropTypes.string,
  name: PropTypes.string,
};
export default Country;
