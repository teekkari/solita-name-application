import React from 'react';

const names = require('./names.json').names.sort( (a, b) => a.name > b.name);

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            totalResults: names.length,
            matchFound: false,
            bestMatch: null
        }
    }
    
    searchOnChange(event) {
        const search = event.target.value.toLowerCase();

        const searchResults = names.filter( (val, index) => val.name.toLowerCase().startsWith(search) );
        const totalResults = searchResults.length;

        if (totalResults >= 1 && totalResults < names.length) {
            this.setState({
                totalResults: totalResults,
                matchFound: true,
                bestMatch: searchResults[0]
            });
        } else {
            this.setState({
                totalResults: totalResults,
                matchFound: false,
                bestMatch: null
            });
        }
    }

    showMatch() {
        if (this.state.matchFound) {
            return <span>Best match: {this.state.bestMatch.name} ({this.state.bestMatch.amount})</span>;
        } else {
            return null;
        }
    }

    render() {
        return <div className="search">
            <div className="search-input">
                <input type="text" onChange={(event) => this.searchOnChange(event)} />
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </div>
            
            <div id="search-results">
                <div className="search-total-results">Total results: {this.state.totalResults}</div>
                <div className="search-best-match">{this.showMatch()}</div>
            </div>
        </div>
    }

}

export default Search;