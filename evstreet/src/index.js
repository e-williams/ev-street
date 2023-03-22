import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import AboutUS from "./components/Footer/AboutUs";
import ContactUs from "./components/Footer/ContactUs";
import VehiclePageContainer from "./components/VehiclePageIndex/Container";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/vehicle/:vehicleId",
        element: <VehiclePageContainer />, // render the overview
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUS />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  // {
  //   path: "/vehicle/:vehicleId",
  //   children: [
  //     {
  //       path: "/vehicle/:vehicleId/overview",
  //       element: <>Hi</>, // render the overview
  //     },
  //     {
  //       path: "/vehicle/:vehicleId/overview",
  //       element: <>hi</>, // render the overview
  //     },
  //   ],
  //   element: <VehiclePageContainer />,
  // },
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
