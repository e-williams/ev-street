import React from "react";
import "../assets/styles/App.css";
import Header from "./Common/Header";
import SearchPageContainer from "./VehicleResults/SearchPageContainer";
import Footer from "./Common/Footer/Footer";

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
