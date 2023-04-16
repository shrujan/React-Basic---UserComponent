import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Exercise1 } from './Routing/Excercise1';
import { Home } from './Routing/Home';
import { UseEffectLogin } from './Routing/UseEffectEx';
import { UseReducerLogin } from './Routing/UserReducerEx';
import { BasicLogin } from './Routing/LoginForm';

const router = createBrowserRouter([
  { path: '/',                 element: <Home />           },
  { path: '/exercise-1',       element: <Exercise1 />      },
  { path: '/use-effect-login', element: <UseEffectLogin /> },
  { path: '/use-reducer-login', element: <UseReducerLogin />},
  { path: '/basic-login', element: <BasicLogin />}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
