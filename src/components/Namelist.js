import React from 'react';

const names = require('./names.json').names;

class Namelist extends React.Component {
    constructor(props) {
        super(props);

        // sort names to initially show them in alphabetical order
        const sortedNames = names.sort( (a, b) => a.name > b.name );
        
        this.state = {
            listData: sortedNames,
            sortBy: 'amount',
            sortAscending: false,
        }
    }

    // sorts the names with the current parameters and changes the state for names
    sortData() {
        if (this.state.sortAscending) {
            this.setState({
                listData: this.state.listData.sort( (a, b) => a[this.state.sortBy] > b[this.state.sortBy])
            });
        } else {
            this.setState({
                listData: this.state.listData.sort( (a, b) => a[this.state.sortBy] < b[this.state.sortBy])
            });
        }
    }


    // renders this.state.listData in a list = returns array of JSX
    renderNameListData() {
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
        return <>
        <button onClick={ () => this.sortData() }>Test Sort</button>
        {this.renderNameListData()}
        </>;
    }
}

export default Namelist;