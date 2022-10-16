import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Success from './components/Success';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ManageProjects from './components/ManageProjects';
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: '/manage',
    element: <ManageProjects />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path:"/",
    element:<Home/>,
  }
]);

let root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


