function BodyStyleFilter(vehicleSpecsData) {
  return (
    <div>
      <h4 className='filterHeadings'>Body Style:</h4>
      <div className='filterFlexbox'>
        <div className='flexColumn1'>
          <div>
            {vehicleSpecsData.map(vehicleSpec => (
              <div key={vehicleSpec.id}>
                console.log({vehicleSpec.id})
              </div>
            ))}
          </div>
          <li><input type='checkbox' className='checkbox'/>3-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>4-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>5-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>sports car</li>
          <li><input type='checkbox' className='checkbox'/>subcompact/mini</li>
          <li><input type='checkbox' className='checkbox'/>wagon</li>
        </div>
        <div>
          <li><input type='checkbox' className='checkbox'/>3-door crossover</li>
          <li><input type='checkbox' className='checkbox'/>5-door crossover</li>
          <li><input type='checkbox' className='checkbox'/>3-door SUV</li>
          <li><input type='checkbox' className='checkbox'/>5-door SUV</li>
          <li><input type='checkbox' className='checkbox'/>minivan/van</li>
          <li><input type='checkbox' className='checkbox'/>truck</li>
        </div>
      </div>
    </div>
  )
}

export default BodyStyleFilter