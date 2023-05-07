import { useRef } from 'react';
import styles from './MovieForm.module.scss';

const MoviesForm = ({ movies } : any) => {
  const movieNameRef = useRef<any>('');

  const addMovieHandler = (event: any) => {
    event?.preventDefault();
    console.log(event)
    const movieData = {
      title: movieNameRef.current.value
    }

    fetch('https://movielist-d0550-default-rtdb.firebaseio.com/movies.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movieData)
    })
      .catch(error => error)
  }

  return <section className={ styles['movies-form'] }>
    <form onSubmit={ addMovieHandler }>
      <input type="text" name='movie-name' ref={ movieNameRef } />
      <button type='submit'>Add</button>
    </form>
  </section>
}

export default MoviesForm;