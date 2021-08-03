import { moviesApi } from 'api';
import React, { useEffect, useState } from 'react';
import MoviePresenter from './MoviePresenter';

const MovieContainer = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();

        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch {
        setError('영화 정보를 찾을수 없습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  return (
    <div>
      <MoviePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default MovieContainer;
