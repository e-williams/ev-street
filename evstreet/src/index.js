import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Components/App';
import AboutUS from './Components/aboutUs_contactUs/AboutUs';
import ContactUs from './Components/aboutUs_contactUs/ContactUs';
import VehiclePage from './Components/VehiclePage';
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <AboutUS />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/vehicle/:vehicleId',
    element: <VehiclePage />,
  }
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
