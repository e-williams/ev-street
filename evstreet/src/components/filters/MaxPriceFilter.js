import '../../assets/styles/MaxPriceFilter.css'

function MaxPriceFilter() {
  return (
    <div className='selectbox'>
      <label htmlFor='basePriceSelect' id='basePriceLabel'>Max Base Price:</label>
        <select name='base_price' id='basePriceSelect' defaultValue='unlimited'>
          <option value='$40,000'>$40,000</option>
          <option value='$70,000'>$70,000</option>
          <option value='$100,000'>$100,000</option>
          <option value='$200,000'>$200,000</option>
          <option value='unlimited'>unlimited</option>
        </select>
    </div>
  );
}

export default MaxPriceFilter
