import { trendApi } from 'api';
import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const [trend, setTred] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await trendApi.treding();
        setTred(results);
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
      <HomePresenter trend={trend} error={error} loading={loading} />
    </div>
  );
};

export default HomeContainer;
