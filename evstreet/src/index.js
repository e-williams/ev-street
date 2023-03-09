import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import AboutUs from "./components/AboutUs/AboutUs";
import NotFound from "./components/NotFound";
import PreviewVehicle from "./components/PreviewVehicle";
import ResultsContainer from "./components/ResultsContainer";
import SearchPageContainer from "./components/SearchPageContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <SearchPageContainer /> },
      {
        path: "vehicle/:vehicleId",
        element: <p>Vehicle</p>,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/vehicle/:vehicleId",
    element: <PreviewVehicle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
