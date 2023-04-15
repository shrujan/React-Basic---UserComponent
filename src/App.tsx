import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Exercise1 } from './Routing/Excercise1';
import { Home } from './Routing/Home';

const router = createBrowserRouter([
  { path: '/',           element: <Home />      },
  { path: '/exercise-1', element: <Exercise1 /> },
  // { path: '/exercise-1', element: <Exercise1 /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
