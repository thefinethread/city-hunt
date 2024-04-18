import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage';
import Main from './components/Main';
import City from './components/City';
import Vehicle from './components/Vehicle';
import Result from './components/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/play',
        element: <Main />,
      },
      {
        path: '/:copId/select-city',
        element: <City />,
      },
      {
        path: '/:copId/select-vehicle',
        element: <Vehicle />,
      },
      {
        path: '/result',
        element: <Result />,
      },
    ],
  },
]);

export default router;
