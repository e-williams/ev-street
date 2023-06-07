import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Components/App";
import AboutUS from "./Components/Common/Footer/AboutUs";
import ContactUs from "./Components/Common/Footer/ContactUs";
import VehiclePageContainer from "./Components/VehiclePage/VehiclePageContainer";
import NotFound from "./Components/ErrorHandling/NotFound";

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
]);

// Render router in div element of index.html w/ id='root', and provide all
// components with access to it.
ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>
);