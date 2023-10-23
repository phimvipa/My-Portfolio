import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Aboutme from './pages/Aboutme.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,         //First page  
  },
  // fill page to element
  {
    path: "/home",
    element: <Home/>,    
  },
  {
    path: "/aboutme",
    element: <Aboutme />,    
  },

  {
    path: "/projects",
    element: <Projects />,    
  },

  {
    path: "/contact",
    element: <Contact/>,    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(  
      <RouterProvider router={router} />  
)
