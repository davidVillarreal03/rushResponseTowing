import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
// import Reviews from './pages/Reviews/Reviews';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />,

      },
      {
        path: '/login', 
        element: <Login />,
      },
      {
        path: '/about', 
        element: <About />,
      },
      {
        path: '/services', 
        element: <Services />,
      },
      {
        path: '/contact', 
        element: <Contact />,
      },
      // {
      //   path: '/reviews', 
      //   element: <Reviews />,
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)