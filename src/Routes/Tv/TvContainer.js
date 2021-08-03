import { tvApi } from 'api';
import React, { useEffect, useState } from 'react';
import TvPresenter from './TvPresenter';

const TvContainer = () => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {
          data: { results: topRated },
        } = await tvApi.topRated();
        const {
          data: { results: popular },
        } = await tvApi.popular();
        const {
          data: { results: airingToday },
        } = await tvApi.airingToday();

        setTopRated(topRated);
        setPopular(popular);
        setAiringToday(airingToday);
        setLoading(false);
      } catch {
        setError('Tv목록을 찾을수 없습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      fetchData();
      setLoading(false);
    };
  }, []);

  return (
    <div>
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default TvContainer;
