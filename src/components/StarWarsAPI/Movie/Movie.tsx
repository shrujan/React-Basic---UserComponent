import styles from './Movie.module.scss';

const Movie = ({ details }: any) => {
  console.log(details)
  return <div className={ styles['movie'] }>{ details.title }</div>
}

export default Movie;
