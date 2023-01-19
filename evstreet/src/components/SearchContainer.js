import '../assets/styles/SearchContainer.css';

function SearchContainer() {
  return (
    <form id='searchWrapper'>
      <li className='greenLi'><input type='checkbox' className='checkbox'/>Select All Specs</li><br/>
      <label htmlFor='basePriceSelect' id='basePriceLabel'>Max Base Price:</label>
      <select name='base_price' id='basePriceSelect' defaultValue='unlimited'>
        <option value='$40,000'>$40,000</option>
        <option value='$70,000'>$70,000</option>
        <option value='$100,000'>$100,000</option>
        <option value='$200,000'>$200,000</option>
        <option value='unlimited'>unlimited</option>
      </select>
      <h4 className='filterHeadings'>Body Style:</h4>
      <div id='filterFlexbox'>
        <div id='flexColumn1'>
          <li><input type='checkbox' className='checkbox'/>2-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>3-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>4-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>5-door sedan</li>
          <li><input type='checkbox' className='checkbox'/>sports car</li>
          <li><input type='checkbox' className='checkbox'/>subcompact/mini</li>
          <li><input type='checkbox' className='checkbox'/>wagon</li>
        </div>
        <div id='flexColumn2'>
          <li><input type='checkbox' className='checkbox'/>3-door crossover</li>
          <li><input type='checkbox' className='checkbox'/>5-door crossover</li>
          <li><input type='checkbox' className='checkbox'/>3-door SUV</li>
          <li><input type='checkbox' className='checkbox'/>5-door SUV</li>
          <li><input type='checkbox' className='checkbox'/>minivan/van</li>
          <li><input type='checkbox' className='checkbox'/>truck</li>
        </div>
      </div>
    </form>
  )
}

export default SearchContainer