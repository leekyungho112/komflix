import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Company = ({ company }) => {
  return (
    <Container>
      {company &&
        company.length > 0 &&
        company.map((com) => (
          <Card key={com.id} imgUrl={com.logo_path} name={com.name} />
        ))}
    </Container>
  );
};

Company.propTypes = {
  logo_path: PropTypes.string,
  name: PropTypes.string,
};
export default Company;
