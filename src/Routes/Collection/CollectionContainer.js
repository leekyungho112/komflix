import { moviesApi } from 'api';
import React, { useEffect, useState } from 'react';
import CollectionPresenter from './CollectionPresenter';

const CollectionContainer = (props) => {
  const {
    location: { pathname },
  } = props;
  const [collection, setCollection] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie] = useState(pathname.includes('/movie/'));

  useEffect(() => {
    const fetchData = async () => {
      const {
        match: {
          params: { id },
        },
        history: { push },
      } = props;
      const numberId = Number(id);
      if (isNaN(numberId)) {
        return push('/');
      }

      try {
        if (isMovie) {
          const { data } = await moviesApi.collection(numberId);
          setCollection(data);
        }
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
  }, [isMovie, props]);

  return (
    <div>
      <CollectionPresenter
        collection={collection}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default CollectionContainer;
