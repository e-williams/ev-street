import '../assets/styles/ResultsContainer.css'

function ResultsContainer({ filteredVehicleSpecs }) {
  return (
    <div id='output'>
      <p>{filteredVehicleSpecs.make}</p>
      <p>{filteredVehicleSpecs.model}</p>
      <p>{filteredVehicleSpecs.base_price}</p>
      <p>{filteredVehicleSpecs.body_style}</p>
      <br/>
    </div>
  )
}

export default ResultsContainer
