import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import noPoster from 'assets/noPosterSmall.png';
import Rating from './Rating';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 125px;
  height: 180px;
  background-size: cover;
  background-position: center center;
  transition: transform 0.2s linear;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  &:hover {
    ${Image} {
      transform: scale(1.2);
      z-index: 100;
      -webkit-box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
      box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  color: #fbca36;
`;
const Year = styled.span`
  font-size: 10px;
  color: #6b7b8c; ;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster
            }
          />
          <Rating
            rating={rating}
            size={40}
            strokeWidth={4}
            circleOneStroke="#204429"
          />
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
