function SearchBar() {
    return (
        <div>
            <div>
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </div>

            <div>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            
            <div>
                <button>Let's Go</button>
            </div>
        </div>
    );
}

export default SearchBar;