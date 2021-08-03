import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'afd07a29753271380c387af2799cf64e',
    language: 'ko-KR',
  },
});

export const trendApi = {
  treding: () => api.get('trending/all/day'),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  latest: () => api.get('tv/latest'),
  credits: (id) => api.get(`tv/${id}/credits`),
  similar: (id) => api.get(`tv/${id}/similar`),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  credits: (id) => api.get(`movie/${id}/credits`),
  similar: (id) => api.get(`movie/${id}/similar`),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  collection: (id) => api.get(`collection/${id}`),
};

export const searchApi = {
  search: (term) =>
    api.get('search/multi', {
      params: {
        query: term,
      },
    }),
};
