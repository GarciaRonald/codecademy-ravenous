import '../styles/SearchBar.css';

function SearchBar() {
    return (
        <div className="searchbar-container">
            <div className='sort'>
                <button>Best<br />Match</button>
                <button>Highest<br />Rated</button>
                <button>Most<br />Reviewed</button>
            </div>

            <div className='input'>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            
            <div className='submit'>
                <button>Let's Go</button>
            </div>
        </div>
    );
}

export default SearchBar;