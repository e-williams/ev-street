import React from "react";
import "../assets/styles/App.css";
import Header from "./common/Header";
import SearchPageContainer from "./VehicleResults/SearchPageContainer";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <SearchPageContainer />
      <Footer />
    </>
  );
}

export default App;
