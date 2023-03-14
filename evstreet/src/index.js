import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Oops, page not found.</p>,
    children: [
      {
        path: '/',
        element: <p>All the vehicles go here.</p>,
      },
      {
        path: 'vehicle/:vehicleId',
        element: <p>Vehicle</p>,
      },
    ],
  },
  {
    path: '/about',
    element: <p>About Us Page</p>,
  },
]);

// Render router in div element of index.html w/ id='root', and provide all
// components with access to it.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Use StrictMode to run extra checks for warnings in console;
  // recommended use in development only.
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
