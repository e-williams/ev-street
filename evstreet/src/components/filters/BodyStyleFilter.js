function BodyStyleFilter({handle4DoorSedan, handle5DoorSedan}) {
  
  return (
    <div>
      <h4 className='filterHeadings'>Body Style:</h4>
      <div className='filterFlexbox'>
        <div className='flexColumn1'>
          <li><input type='checkbox' className='checkbox'/>mini/subcompact</li>
          <li><input type='checkbox' className='checkbox'/>2-door sports car</li>
          <li><input type='checkbox' className='checkbox'/>3-door sports car</li>
          <li><input type='checkbox' className='checkbox'/>2-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>3-door sedan</li>
          <li><input type='checkbox' className='checkbox' onChange={handle4DoorSedan}/>4-door sedan</li>
          <li><input type='checkbox' className='checkbox' onChange={handle5DoorSedan}/>5-door sedan</li>
        </div>
        <div>
          <li><input type='checkbox' className='checkbox'/>wagon</li>
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