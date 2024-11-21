import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './src/components/pages/Error/ErrorPage';
import Home from './src/components/pages/Home/Home';
import Login from './src/components/pages/Login/Login';
import About from './src/components/pages/About/About';
import Services from './src/components/pages/Services/Services';
import Contact from './src/components/pages/Contact/Contact';

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