import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'afd07a29753271380c387af2799cf64e',
    language: 'ko-KR',
  },
});

api.get('tv/popular');

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  latest: () => api.get('tv/latest'),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_plauying'),
  upcoming: () => api.get('movie/upcoming'),
  latest: () => api.get('movie/latest'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
};

export const searchApi = {
  search: (term) => {
    api.get('search/multi', {
      params: {
        query: term,
      },
    });
  },
};
