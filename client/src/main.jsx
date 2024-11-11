import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)