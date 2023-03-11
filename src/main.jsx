import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import About from './components/About';
import Events from './components/Events';
import Gathering from './components/Gathering.jsx';
import Group from './components/Group';
import New from './components/New';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  }, {
    path: "/events",
    element: <Events />,
  }, {
    path: "/gather",
    element: <Gathering/>,
  }, {
    path: "/group",
    element: <Group/>,
  },{path: "/new",
  element: <New/>,
}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
