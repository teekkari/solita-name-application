import React from 'react';
import Search from './Search';

const names = require('./names.json').names;

class Namelist extends React.Component {
    constructor(props) {
        super(props);

        // sort names to initially show them in descending numerical order based on amount
        const sortedNames = names.sort( (a, b) => a.amount < b.amount );
        
        this.state = {
            listData: sortedNames,
            sortBy: 'amount',
            sortAscending: false,
        }
    }

    // sorts the names with the current parameters and return sorted list
    sortData() {
        if (this.state.sortAscending) {
            return this.state.listData.sort( (a, b) => a[this.state.sortBy] > b[this.state.sortBy]);
        } else {
            return this.state.listData.sort( (a, b) => a[this.state.sortBy] < b[this.state.sortBy]);
        }
    }


    // called when user clicks sorting buttons (Name, Amount)
    // clicking on non-active button: changes the sortBy value and sets sortAscending based on sorting parameter
    // clicking on active button: flips sortAscending boolean
    // changes class state
    sortOnClick(sortBy) {

        if (this.state.sortBy === sortBy) {
            this.setState({ sortAscending: !this.state.sortAscending });
        } else {
            // by default names are sorted ascending and amounts descending
            const ascending = sortBy === 'name' ? true : false;
            this.setState({ sortBy: sortBy, sortAscending: ascending });
        }
    }


    // renders this.state.listData in a list = returns array of JSX
    renderNameListData() {

        const sortedData = this.sortData();

        let outputList = [];
        for (let name of this.state.listData) {
            outputList.push(
                <div className="namelist-item">
                    <div className="namelist-name">{name.name}</div>
                    <div className="namelist-amount">{name.amount}</div>
                </div>
            );
        }

        return outputList;
    }


    render() {
        return <div className="namelist">
        <Search />
        <div className="namelist-sorting">
            <div className="namelist-sorting-sortby">Sort by</div>
            <div className="namelist-sorting-sortbuttons">
                <button className={this.state.sortBy === 'name' ? "sort-active" : ""} onClick={ () => this.sortOnClick('name') }>Name</button>
                <button className={this.state.sortBy === 'amount' ? "sort-active" : ""} onClick={ () => this.sortOnClick('amount') }>Amount</button>
            </div>
        </div>
        
        <div className="namelist-data">
            <div className="namelist-data-header">
                <div className="header-name">Name</div>
                <div className="header-amount">Amount</div>
            </div>
            {this.renderNameListData()}
            </div>
        </div>;
    }
}

export default Namelist;