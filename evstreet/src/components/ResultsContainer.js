import '../assets/styles/ResultsContainer.css'

function ResultsContainer({vehicleSpecs}) {
  return (
    <div id='output'>
      <p>{vehicleSpecs.make}</p>
      <p>{vehicleSpecs.model}</p>
      <p>{vehicleSpecs.base_price}</p>
      <p>{vehicleSpecs.body_style}</p>
      <br/>
    </div>
  )
}

export default ResultsContainer
