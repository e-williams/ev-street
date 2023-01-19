import '../assets/styles/SearchPageContainer.css';
import SearchContainer from './SearchContainer';
import ResultsContainer from './ResultsContainer';

function SearchPageContainer() {
  return (
    <div id='searchPageWrapper'>
      <h3 className='headings'>Select your preferred electric vehicle specifications in the FILTERS column below:</h3>
      <div id='searchPageFlexbox'>
        <section id='flexItemSearch'>
          <h2 className='headings'>FILTERS</h2>
          <SearchContainer />
        </section>
        <section id='flexItemResults'>
          <ResultsContainer />
        </section>
      </div>
    </div>
  )
}

export default SearchPageContainer