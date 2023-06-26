import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Exercise1 } from './Routing/Excercise1';
import { Home } from './Routing/Home';
import { UseEffectLogin } from './Routing/UseEffectEx';
import { UseReducerLogin } from './Routing/UserReducerEx';
import { BasicLogin } from './Routing/LoginForm';
import { ReactMenu } from './Routing/Exercice2ReactMenu';
import StarWarsApi from './Routing/Exercise-API';
import BasicReactForms from './Routing/ReactForms';
import UserList from './Routing/UserList';
import ReduxCounterEx from './Routing/ReduxExHome';
import ReduxToolkitCounterEx from './Routing/ReduxToolkitExHome';
import ReduxToolkitCart from './Routing/ReduxToolkitCart';

const router = createBrowserRouter([
  { path: '/',                      element: <Home />                  },
  { path: '/basic-login',           element: <BasicLogin />            },
  { path: '/exercise-1',            element: <Exercise1 />             },
  { path: '/react-menu',            element: <ReactMenu />             },
  { path: '/use-effect-login',      element: <UseEffectLogin />        },
  { path: '/use-reducer-login',     element: <UseReducerLogin />       },
  { path: '/star-wars',             element: <StarWarsApi />           },
  { path: '/basic-react-forms',     element: <BasicReactForms />       },
  { path: '/reducer-user-list',     element: <UserList />              },
  { path: '/redux-counter',         element: <ReduxCounterEx />        },
  { path: '/redux-counter-toolkit', element: <ReduxToolkitCounterEx /> },
  { path: '/redux-toolkit-cart',    element: <ReduxToolkitCart />      }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
