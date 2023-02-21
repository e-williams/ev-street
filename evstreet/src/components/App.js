import React from "react";
import { Outlet } from "react-router-dom";

import "../assets/styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import SearchPageContainer from "./SearchPageContainer";

function App() {
  return (
    <div>
      <Header />
      <SearchPageContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
