import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoHome, IoCopySharp } from 'react-icons/io5';
import Season from './Season';

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px 20px;
`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
  color: #fbca36;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Item = styled.span`
  color: #f22b7c;
  font-size: 13px;
  transition: color 0.2s linear;

  &:hover {
    color: white;
  }
`;

const SLink = styled.a``;

const Divider = styled.span`
  color: #fbca36;
  margin: 0px 3px;
`;

const OverView = styled.p`
  font-size: 12px;
  line-height: 1.5;
  display: block;
  color: #6b7b8c;
`;

const Detail = ({ result, isMovie }) => {
  return (
    <Data>
      <Title>{result.title ? result.title : result.name}</Title>
      <ItemContainer>
        <Item>
          {result.release_date
            ? result.release_date.substring(0, 7)
            : result.first_air_date.substring(0, 7)}
        </Item>
        <Divider>-</Divider>
        <Item>{result.adult ? '🔞' : '전체관람가'}</Item>
        <Divider>-</Divider>
        <Item>
          {result.genres &&
            result.genres.map((gene, index) =>
              index === result.genres.length - 1 ? gene.name : `${gene.name} / `
            )}
        </Item>
        <Divider>-</Divider>
        <Item>
          {result.runtime ? result.runtime : result.episode_run_time[0]} min
        </Item>
        <Divider>-</Divider>
        <Item>
          {result.imdb_id ? (
            <SLink
              href={`https://www.imdb.com/title/${result.imdb_id}/`}
              target="_blank"
            >
              IMDB
            </SLink>
          ) : (
            <SLink href={result.homepage} target="_blank">
              <IoHome />
            </SLink>
          )}
        </Item>
        {result && result.belongs_to_collection && (
          <>
            <Divider>-</Divider>
            <Item>
              <Link to={`/movie/collection/${result.belongs_to_collection.id}`}>
                <IoCopySharp />
              </Link>
            </Item>
          </>
        )}
        {!isMovie && result && result.seasons && (
          <>
            <Divider>-</Divider>
            <Item>
              <Link
                to={{
                  pathname: `/tv/${result.id}/season`,
                  state: { season: result.seasons },
                }}
              >
                <IoCopySharp />
              </Link>
            </Item>
          </>
        )}
      </ItemContainer>
      <OverView>{result.overview.substring(0, 180)}...</OverView>
    </Data>
  );
};

Detail.propTypes = {
  result: PropTypes.object,
  isMovie: PropTypes.bool,
};

export default Detail;
