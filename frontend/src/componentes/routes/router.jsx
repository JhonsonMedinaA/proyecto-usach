import React from 'react';
import { createBrowserRouter, NavLink } from 'react-router-dom';
import ErrorPage from '../../error-page.jsx';
import Registro from '../registro/registro.jsx';
import Login from '../login/login.jsx';
import App from '../../App.jsx';
import Main from '../main/main.jsx'
import Main1 from '../main1/main1.jsx';
import Main2 from '../main2/main2.jsx';
import Pagos from '../pagos/pagos.jsx';
import Pagos1 from '../pagos1/pagos1.jsx';
import Navbar from '../navbar/navbar.jsx';
import Section from '../section/section.jsx';
import Footer from '../footer/footer.jsx';
import Root from '../../root.jsx';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Root/>,
    
  },

  {
    path: '/navbar',
    element: <Navbar/>,
    
  },

  {
    path: '/footer',
    element: <Footer/>,
   
  },

  {
    path: '/section',
    element: <Section/>,
   
  },
  {
    path: '/registro',
    element: <Registro />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/main1',
    element: <Main1 />,
  },
  {
    path: '/main2',
    element: <Main2 />,
  },

  {
    path: '/pagos',
    element: <Pagos/>,
  },
  {
    path: '/pagos1',
    element: <Pagos1/>,
  },

]);

export default router;
  
     
    
   
    