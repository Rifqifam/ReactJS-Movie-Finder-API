import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movies = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movies.data.results;
};

export const searchMovieList = async (q) => {
  const search = await axios.get(q);
  return;
};
