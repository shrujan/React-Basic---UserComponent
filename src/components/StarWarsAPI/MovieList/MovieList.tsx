import Movie from '../Movie/Movie';
import styles from './MovieList.module.scss';

const MoviesList = ({ movies } : any) => {
  return <section className={ styles['movies-list'] }>
    { movies && movies.map((movie: any) => <Movie key={ movie.id } details={ movie }></Movie>) }
  </section>
}

export default MoviesList