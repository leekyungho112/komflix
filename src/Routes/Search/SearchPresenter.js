import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import { IoSearch } from 'react-icons/io5';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;
const SearchBox = styled.div`
  position: relative;
  margin: 100px 0;
`;

const Input = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  line-height: 40px;
  width: 0px;
  transition: all 0.3s linear;
  &::placeholder {
    color: #fbca36;
  }
`;
const SearchBtn = styled.div`
  cursor: pointer;
  color: #fc6767;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 12px;
  background: #fbca36;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  background: linear-gradient(to left, #ec008c, #fc6767);
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
  border-radius: 40px;

  &:hover {
    ${Input} {
      width: 240px;
      padding: 0 6px;
    }
    ${SearchBtn} {
      background: white;
    }
  }
`;

const SearchPresenter = ({
  multiResult,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => {
  return (
    <Container>
      <Helmet>
        <title>Search | Komflix</title>
      </Helmet>
      <SearchBox>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="제목,사람,장르"
            value={searchTerm}
            onChange={updateTerm}
          />
          <SearchBtn>
            {' '}
            <IoSearch />
          </SearchBtn>
        </Form>
      </SearchBox>
      {loading ? (
        <Loader />
      ) : (
        <>
          {multiResult && multiResult.length > 0 && (
            <Section title="검색과 관련된 영화컨텐츠">
              {multiResult.map(
                (item) =>
                  item.media_type === 'movie' && (
                    <Poster
                      key={item.id}
                      id={item.id}
                      imageUrl={item.poster_path}
                      title={item.title}
                      rating={item.vote_average}
                      year={item.release_date.substring(0, 7)}
                      isMovie={true}
                    />
                  )
              )}
            </Section>
          )}
          {multiResult && multiResult.length > 0 && (
            <Section title="검색과 관련된 Tv컨텐츠">
              {multiResult.map(
                (item) =>
                  item.media_type === 'tv' && (
                    <Poster
                      key={item.id}
                      id={item.id}
                      imageUrl={item.poster_path}
                      title={item.name}
                      rating={item.vote_average}
                      year={item.first_air_date.substring(0, 7)}
                    />
                  )
              )}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
          {multiResult && multiResult.length === 0 && (
            <Message
              text={`입력하신 검색어 ${searchTerm}와 일치하는 결과가 없습니다.`}
              color="#909090"
            />
          )}
        </>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  multiResult: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
