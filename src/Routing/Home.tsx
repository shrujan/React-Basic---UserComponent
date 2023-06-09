import { Link } from "react-router-dom";
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={ styles['links'] }>
      <Link to="/exercise-1">Excercise 1</Link>
      <Link to="/use-effect-login">UseEffect Login</Link>
      <Link to="/basic-login">Basic Login Form</Link>
      <Link to="/use-reducer-login">UseReducer Login</Link>
      <Link to="/React-Menu">React menu - EX2</Link>
      <Link to="/star-wars">Star Wars APIs - EX3</Link>
      <Link to="/react-forms">React Forms</Link>
      <Link to="/reducer-user-list">React Reducer - User List</Link>
      <Link to="/redux-counter">React Redux - Counter</Link>
      <Link to="/redux-counter-toolkit">React Redux Toolkit - Counter</Link>
      <Link to="/redux-toolkit-cart">React Redux Toolkit - Cart</Link>
    </div>
  )
}
