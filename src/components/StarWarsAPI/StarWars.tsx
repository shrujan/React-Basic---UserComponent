import { useEffect, useState } from 'react';
import MoviesList from './MovieList/MovieList';
import styles from './StarWars.module.scss';

const StarWars = () => {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  const [ movieList, setMovieList ] = useState([]);

  const fetchMovies = () => {
    fetch('https://swapi.dev/api/films')
    .then((response) => {
      return response.json()
    })
    .then((data: any) => {
      if (data) {
        console.log(data)
        setMovieList(data.results)
      }
    })
  }

  useEffect(() => {
    fetchMovies();
  }, [])
  
  return (
    <main className={ styles['star-wars'] }>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={ movieList } />
      </section>
    </main>
  )
}

export default StarWars;
