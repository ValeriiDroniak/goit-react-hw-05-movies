import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const API_KEY = '13cdcd26729e61411a8c9e61f7e5bd47';

axios.defaults.baseURL = BASE_URL;

export const createPosterUrl = path => BASE_URL_POSTER + path;

export const getTrendigDays = async (page = 1) => {
  axios.defaults.params = {
    api_key: API_KEY,
    page,
  };

  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

export const getSearchMovies = async (query, page = 1) => {
  axios.defaults.params = {
    api_key: API_KEY,
    page,
    query,
  };
  const response = await axios.get('/search/movie');
  return response.data.results;
};

export const getMovieDetails = async id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  const response = await axios(`/movie/${id}`);
  return response.data;
};

export const getCast = async id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };

  const response = await axios(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getReviews = async (id, page = 1) => {
  axios.defaults.params = {
    page,
    api_key: API_KEY,
  };

  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};
