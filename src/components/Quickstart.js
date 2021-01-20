/*
    Renders "Quick Start" panel with instructions for application usage.
    Styling is in App.css
*/

function Quickstart() {
    return (
    <div className="quickstart">
        <div className="quickstart-content">
            <h1>Quickstart</h1>

            <h2>Sorting</h2>
            <div className="text">By clicking on the labels <b>Name</b> or <b>Amount</b>, you can sort the list in alphabetical or numerical order.</div>

            <h2>Searching</h2>
            <div className="text">You can search a name and its popularity with the search bar on top of the list.</div>
        </div>
    </div>
    );
}

export default Quickstart;