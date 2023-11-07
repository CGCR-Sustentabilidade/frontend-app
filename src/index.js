import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter as Router, RouterProvider} from 'react-router-dom';

import Dashboard from './features/Dashboard/Dashboard';
import Products from './features/Products/Products';
import Medicines from './features/Medicines/Medicines';
import Elderly from './features/Elderly/Elderly';

const router = Router([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: "produtos",
        element: <Products />
      },
      {
        path: "/medicamentos",
        element: <Medicines />
      },
      {
        path: "/idosos",
        element: <Elderly />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
