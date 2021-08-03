import { moviesApi, tvApi } from 'api';
import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({
  location: { pathname },
  match: {
    params: { id },
  },
  history: { push },
}) => {
  const [result, setResult] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie] = useState(pathname.includes('/movie/'));
  useEffect(() => {
    const fetchUrl = async () => {
      const numberId = Number(id);
      if (isNaN(numberId)) {
        return push('/');
      }
      try {
        setLoading(true);
        if (isMovie) {
          const { data } = await moviesApi.movieDetail(numberId);
          const { data: credits } = await moviesApi.credits(numberId);
          const {
            data: { results: similar },
          } = await moviesApi.similar(numberId);

          setResult(data);
          setCredits(credits);
          setSimilar(similar);
        } else {
          const { data } = await tvApi.tvDetail(numberId);
          const { data: credits } = await tvApi.credits(numberId);
          const {
            data: { results: similar },
          } = await tvApi.similar(numberId);
          setResult(data);
          setCredits(credits);
          setSimilar(similar);
        }
        setLoading(false);
      } catch {
        setError('정보를 찾을수 없습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchUrl();
  }, [id, isMovie, push]);

  return (
    <div>
      <DetailPresenter
        result={result}
        credits={credits}
        similar={similar}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    </div>
  );
};

export default DetailContainer;
