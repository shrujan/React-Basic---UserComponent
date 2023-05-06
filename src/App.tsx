import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Exercise1 } from './Routing/Excercise1';
import { Home } from './Routing/Home';
import { UseEffectLogin } from './Routing/UseEffectEx';
import { UseReducerLogin } from './Routing/UserReducerEx';
import { BasicLogin } from './Routing/LoginForm';
import { ReactMenu } from './Routing/Exercice2ReactMenu';
import StarWarsApi from './Routing/Exercise-API';

const router = createBrowserRouter([
  { path: '/',                  element: <Home />           },
  { path: '/basic-login',       element: <BasicLogin />     },
  { path: '/exercise-1',        element: <Exercise1 />      },
  { path: '/react-menu',        element: <ReactMenu />      },
  { path: '/use-effect-login',  element: <UseEffectLogin /> },
  { path: '/use-reducer-login', element: <UseReducerLogin />},
  { path: '/star-wars',         element: <StarWarsApi />    },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
