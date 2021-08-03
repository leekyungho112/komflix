import { searchApi } from 'api';
import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {
  const [multiResult, setmultiResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== '') {
      searchByTerm();
    }
  };
  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: multiResult },
      } = await searchApi.search(searchTerm);

      setmultiResult(multiResult);
    } catch {
      setError('검색 결과를 찾을수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchPresenter
        multiResult={multiResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={handleSubmit}
        updateTerm={updateTerm}
      />
    </div>
  );
};

export default SearchContainer;
