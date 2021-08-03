import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import HomeButton from 'Components/HomeButton';

const Container = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 100%;
  position: relative;
`;
const CHeader = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
`;

const Title = styled.h4`
  font-size: 20px;
  color: #fbca36;
`;

const Collection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 30px;
  gap: 10px;
`;

const CollectionPresenter = ({ collection, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <CHeader>
          {' '}
          <Title>{collection && collection.name}</Title>
          <HomeButton />
        </CHeader>

        <Collection>
          {collection &&
            collection.parts.length > 0 &&
            collection.parts.map((part) => (
              <Poster
                key={part.id}
                id={part.id}
                imageUrl={part.poster_path}
                title={part.title}
                rating={part.vote_average}
                year={part.release_date && part.release_date.substring(0, 7)}
                isMovie={true}
              />
            ))}
        </Collection>
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    </>
  );
};

CollectionPresenter.propTypes = {
  collection: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
export default CollectionPresenter;
