import '../assets/styles/Results.css'

function Results({spec}) {
  return (
    <div id='output'>
      <p>{spec.make}</p>
      <p>{spec.model}</p>
      <p>{spec.base_price}</p>
      <p>{spec.body_style}</p>
      <br/>
    </div>
  )
}

export default Results
