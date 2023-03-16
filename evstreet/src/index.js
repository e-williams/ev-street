import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import AboutUS from './components/aboutUs_contactUs/AboutUs';
import ContactUs from './components/aboutUs_contactUs/ContactUs';
import VehiclePage from './components/VehiclePage';
import NotFound from './components/NotFound';

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
