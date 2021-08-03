import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import noPoster from 'assets/noPosterSmall.png';

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  position: relative;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center center;
  transition: transform 0.2s linear;
  border-radius: 50%;
  border: 2px solid white;
`;
const Container = styled.div`
  font-size: 12px;
  margin: 0px 15px;
  background: transparent;
  min-width: 125px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  filter: grayscale(100%);
  transition: all 0.3s linear;
  &:hover {
    filter: grayscale(0);
    color: #fbca36;
    ${Image} {
      border: 2px solid #fbca36;
    }
  }
`;

const UserName = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;
const Character = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const Card = ({ id, imgUrl, name, character }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : noPoster}
        />
      </ImageContainer>
      <UserName>{name}</UserName>
      <Character>{character ? character : null}</Character>
    </Container>
  );
};

Card.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
};

export default Card;
