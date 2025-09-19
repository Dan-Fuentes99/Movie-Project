const API_KEY = '859ab710';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  return data.Search || [];
};

export const fetchMovieById = async (id) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await res.json();
  return data;
};