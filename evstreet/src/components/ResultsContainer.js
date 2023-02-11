import "../assets/styles/ResultsContainer.css";

function ResultsContainer({ filteredVehicleSpecs, lang }) {
  const priceToDollars = () =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
    }).format(filteredVehicleSpecs.base_price);

  return (
    <div id="output">
      <p>{filteredVehicleSpecs.make}</p>
      <p>{filteredVehicleSpecs.model}</p>
      <p>{priceToDollars()}</p>
      <p>{filteredVehicleSpecs.body_style}</p>
      <br />
    </div>
  );
}

export default ResultsContainer;
