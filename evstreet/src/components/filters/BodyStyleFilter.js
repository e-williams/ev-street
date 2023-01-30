function BodyStyleFilter({ handleNewFilterSelection }) {
  return (
    <div>
      <h4 className="filterHeadings">Body Style:</h4>
      <div className="filterFlexbox">
        <div className="flexColumn1">
          <li>
            <input 
              type="checkbox" 
              className="checkbox"
              id="mini/subcompact"
              onChange={handleNewFilterSelection}
            />
            mini/subcompact
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="2-door sports car"
              onChange={handleNewFilterSelection}
            />
            2-door sports car
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door sports car"
              onChange={handleNewFilterSelection}
            />
            3-door sports car
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="2-door sedan"
              onChange={handleNewFilterSelection}
            />
            2-door sedan
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door sedan"
              onChange={handleNewFilterSelection}
            />
            3-door sedan
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="4-door sedan"
              onChange={handleNewFilterSelection}
            />
            4-door sedan
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="5-door sedan"
              onChange={handleNewFilterSelection}
            />
            5-door sedan
          </li>
        </div>
        <div>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="wagon"
              onChange={handleNewFilterSelection}
            />
            wagon
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door crossover"
              onChange={handleNewFilterSelection}
            />
            3-door crossover
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="5-door crossover"
              onChange={handleNewFilterSelection}
            />
            5-door crossover
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door SUV"
              onChange={handleNewFilterSelection}
            />
            3-door SUV
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="5-door SUV"
              onChange={handleNewFilterSelection}
            />
            5-door SUV
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="minivan/van"
              onChange={handleNewFilterSelection}
            />
            minivan/van
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="truck"
              onChange={handleNewFilterSelection}
            />
            truck
          </li>
        </div>
      </div>
    </div>
  )
}

export default BodyStyleFilter;
