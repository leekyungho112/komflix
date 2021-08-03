import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from './Loader';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  opacity: 0.6;
  z-index: 0;
`;

const Video = ({ videoId }) => {
  return (
    <Container>
      <iframe
        title="movie and Tv"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

Video.propTypes = {
  videoId: PropTypes.string,
};

export default Video;
