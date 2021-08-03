import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  overflow-y: hidden;
`;

const Crew = ({ credits }) => {
  console.log(credits.id);
  return (
    <Container>
      {credits &&
        credits.cast.length > 0 &&
        credits.cast.map(
          (cast, index) =>
            index < 10 && (
              <Card
                key={cast.id}
                character={cast.character}
                name={cast.name}
                imgUrl={cast.profile_path}
              />
            )
        )}
    </Container>
  );
};

Crew.propTypes = {
  credits: PropTypes.object,
};

export default Crew;
