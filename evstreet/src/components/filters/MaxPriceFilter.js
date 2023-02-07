import '../../assets/styles/MaxPriceFilter.css'

function MaxPriceFilter({
  findVehicleIdsMatchingSelectboxMaxPrice }) {
  return (
    <div className='selectbox'>
      <label
        htmlFor='basePriceSelect'
        id='basePriceLabel'
      >
      Max Base Price:
      </label>
        <select
          id='basePriceSelect'
          defaultValue='unlimited'
          onChange={findVehicleIdsMatchingSelectboxMaxPrice}
          // onFocus={handleSelectboxFilterRemoval}
        >
          <option value='40000' id='0'>$40,000</option>
          <option value='70000' id='1'>$70,000</option>
          <option value='100000' id='2'>$100,000</option>
          <option value='200000' id='3'>$200,000</option>
          <option value='unlimited' id='4'>unlimited</option>
        </select>
    </div>
  );
}

export default MaxPriceFilter
