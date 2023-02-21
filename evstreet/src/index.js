import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import App from "./components/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Oops, page not found.</p>,
    children: [
      { path: "/", element: <p>All the vehicles go here.</p> },
      {
        path: "vehicle/:vehicleId",
        element: <p>Vehicle </p>,
      },
    ],
  },
  {
    path: "/about",
    element: <p>About us Page</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
