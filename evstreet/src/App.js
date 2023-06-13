import "./assets/styles/App.css";
import Header from "./Components/Common/Header";
import SearchPageContainer from "./Components/VehicleSearch/SearchPageContainer";
import Footer from "./Components/Common/Footer/Footer";

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