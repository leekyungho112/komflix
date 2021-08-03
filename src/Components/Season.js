import React from 'react';
import styled from 'styled-components';
import noPoster from 'assets/noPosterSmall.png';
import PropTypes from 'prop-types';
import HomeButton from './HomeButton';

const Container = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 100%;
`;
const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Content = styled.div``;
const ImgPoster = styled.img`
  width: 125px;
  height: 180px;
  margin-right: 10px;
  border-radius: 5px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Episode = styled.span`
  margin: 7px;
  color: #fbca36;
  font-size: 18px;
`;
const Year = styled.span`
  margin-bottom: 7px;
  font-size: 11px;
  color: #6b7b8c;
`;
const EpiCouter = styled.span`
  color: #f22b7c;
  font-size: 14px;
`;

const Season = ({
  location: {
    state: { season },
  },
}) => {
  return (
    <Container>
      <SHeader>
        {' '}
        <HomeButton />
      </SHeader>

      <Wrap>
        {season.map((season) => (
          <Content key={season.id}>
            <ImgPoster
              src={
                season.poster_path
                  ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                  : noPoster
              }
            />
            <Info>
              <Episode>{season.name}</Episode>
              <Year>{season.air_date && season.air_date.substring(0, 7)}</Year>
              <EpiCouter>{`회차 : ${season.episode_count}`}</EpiCouter>
            </Info>
          </Content>
        ))}
      </Wrap>
    </Container>
  );
};
Season.propTypes = {
  season: PropTypes.array,
};

export default Season;
