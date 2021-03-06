/*
    Renders "Quick Start" panel with instructions for application usage.
    Styling is in App.css
*/

function Quickstart() {
    return (
    <div className="quickstart">
        <div className="quickstart-content">
            <h1>Quick start</h1>

            <h2>Sorting</h2>
            <p>By clicking on the labels <b>Name</b> or <b>Amount</b>, you can sort the list in alphabetical or numerical order.</p>
            <p>Clicking again on the active sorting label changes order between ascending and descending.</p>

            <h2>Searching</h2>
            <p>You can search a name and its popularity with the search bar on top of the list.</p>
        </div>
    </div>
    );
}

export default Quickstart;