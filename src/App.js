import Img from "./image/place.png";
import { getMovieList, searchMovieList } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = (q) => {
    console.log(q);
  };

  console.log(popularMovies);

  const PrintPopularMovies = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='single_movie' key={i}>
          <h2 className='movie-title'>{movie.title}</h2>
          <div className='img-wrapper'>
            <img
              src={`${baseImgUrl}${movie.poster_path}`}
              alt=''
              className='movie-img'
            />
          </div>
          <h3 className='movie-release'>{movie.release_date}</h3>
          <h3 className='movie-rating'>{movie.vote_average}</h3>
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <h1 className='container_title'>Movie Selector</h1>
      <input
        type='text'
        name=''
        id='movie_search'
        placeholder='Input Movie Title'
        onChange={({ target }) => search(target.value)}
      />

      <div className='movie_wrapper'>
        <PrintPopularMovies />
      </div>
    </div>
  );
};

export default App;
