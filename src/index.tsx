import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import FileBrowser from './app/FileBrowser.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to='/dirs/' replace />,
      },
      {
        path: 'dirs/*',
        element: <FileBrowser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
