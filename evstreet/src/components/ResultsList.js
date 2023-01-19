import Results from './Results';

function ResultsList({vehicleSpecs}) {
  return (
    <div>
      {vehicleSpecs.map(spec => {
        return (
          <Results key={spec.id} spec={spec} />
        )
      })}
    </div>
  )
}

export default ResultsList
