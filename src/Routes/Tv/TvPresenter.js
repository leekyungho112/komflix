import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;

const TvPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Tv | Komflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Helmet>
            <title>Tv | Komflix</title>
          </Helmet>
          {topRated && topRated.length > 0 && (
            <Section title="보고 또 봐도 좋은 명작 Tv프로그램">
              {topRated.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.name}
                  rating={tv.vote_average}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 7)}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="인기 콘텐츠">
              {popular.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.name}
                  rating={tv.vote_average}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 7)}
                />
              ))}
            </Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section title="새로운 에피소드">
              {airingToday.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.name}
                  rating={tv.vote_average}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 7)}
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
