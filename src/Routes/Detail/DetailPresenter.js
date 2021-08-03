import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import noPoster from 'assets/noPosterSmall.png';
import Tab from 'Components/Tab';
import Video from 'Components/Video';
import Message from 'Components/Message';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import Poster from 'Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
`;
const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  grid-gap: 10px;
`;
const CoverWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cover = styled.div`
  width: 300px;
  height: 400px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
  opacity: 0.5;
`;
const TagLine = styled.div`
  text-align: center;
  height: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  color: #e71a10;
  opacity: 0.4;
`;

const Data = styled.div`
  width: 100%;
`;

const SimilarContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin: 20px 40px;
  color: #f22b7c;
`;
const Similar = styled.div`
  height: 100%;
  margin-bottom: 50px;
  transform: translate3d(-${(p) => p.current * 135}px, 0, 0);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1) 0s;
`;
const PrevButton = styled.button`
  z-index: 10;
  width: 40px;
  height: 180px;
  background: #141414;
  color: #fbca36;
  border: 2px solid #fbca36;
  top: 0;
  border-radius: 5px;
  position: absolute;
  transition: all 0.2s linear;
  &:hover {
    color: white;
    border: 2px solid white;
    background: transparent;
  }
`;
const NextButton = styled.button`
  z-index: 10;
  width: 40px;
  height: 180px;
  background: #141414;
  color: #fbca36;
  border: 2px solid #fbca36;
  position: absolute;
  border-radius: 5px;
  right: 0;
  top: 0;
  transition: all 0.2s linear;
  &:hover {
    color: white;
    border: 2px solid white;
    background: transparent;
  }
`;
const Slide = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  transform: translate3d(40px, 0, 0);
`;

const DetailPresenter = ({
  result,
  credits,
  similar,
  error,
  loading,
  isMovie,
}) => {
  const [current, setCurrent] = useState(0);
  const length = similar.length;
  const slideRef = useRef(0);

  const handleClick = (direction) => {
    if (direction === 'right') {
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else {
      setCurrent(current > 0 ? current - 1 : length - 1);
    }
  };

  return loading ? (
    <>
      <Helmet>
        <title>Loading | Komflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | Komflix</title>
      </Helmet>
      <DetailContainer>
        {result.videos && result.videos.results[0] ? (
          <Video videoId={result.videos.results[0].key} />
        ) : (
          <Backdrop
            bgImage={
              result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                : noPoster
            }
          />
        )}
        <Content>
          <CoverWrap>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w300${result.poster_path}`
                  : noPoster
              }
            >
              {' '}
              <TagLine>{result.tagline ? result.tagline : null}</TagLine>
            </Cover>
          </CoverWrap>
          <Data>
            <Tab
              result={result}
              credits={credits}
              loading={loading}
              isMovie={isMovie}
            />
          </Data>
        </Content>

        {error && <Message color="#e74c3c" text={error} />}
      </DetailContainer>
      <Title>비슷한컨텐츠</Title>
      <SimilarContainer>
        <PrevButton onClick={() => handleClick('left')}>
          <IoArrowBackOutline />
        </PrevButton>
        <Similar ref={slideRef} current={current}>
          <Slide>
            {similar &&
              similar.length > 0 &&
              similar.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={isMovie ? movie.title : movie.name}
                  rating={Math.floor(movie.vote_average)}
                  year={
                    isMovie
                      ? movie.release_date.substring(0, 4)
                      : movie.first_air_date.substring(0, 4)
                  }
                  isMovie={isMovie}
                />
              ))}
          </Slide>
        </Similar>
        <NextButton onClick={() => handleClick('right')}>
          <IoArrowForwardOutline />
        </NextButton>
      </SimilarContainer>
    </Container>
  );
};

DetailPresenter.propTypes = {
  similar: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
export default DetailPresenter;
