import { useCallback, useEffect, useState } from 'react';
import MoviesList from './MovieList/MovieList';
import styles from './StarWars.module.scss';
import MoviesForm from './MovieForm/MovieForm';

const StarWars = () => {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [ movieList, setMovieList ] = useState<string[]>([]);

  const fetchMovies = useCallback(() => { // keep this function constant always
    console.log('fetchinf')
    fetch('https://movielist-d0550-default-rtdb.firebaseio.com/movies.json')
    .then((response) => {
      return response.json()
    })
    .then((data: any) => {
      if (data) {
        const movieList = [];
        for (let key in data) {
          movieList.push(data[key])
        }
        setMovieList(movieList)
      }
    })
  }, [])

  useEffect(() => {
    fetchMovies();
  }, [ fetchMovies ])
  
  return (
    <main className={ styles['star-wars'] }>
      <section>
        <MoviesForm />
      </section>
      <section>
        <button onClick={ fetchMovies }>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={ movieList } />
      </section>
    </main>
  )
}

export default StarWars;
