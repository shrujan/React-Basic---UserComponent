import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/exercise-1">Excercise 1</Link>
      <Link to="/use-effect-login">UseEffect Login</Link>
      <Link to="/use-reducer-login">UseReducer Login</Link>
    </div>
  )
}
