import './App.css';
import Namelist from './components/Namelist';
import Quickstart from './components/Quickstart';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="app-title">Name application</h1>
        <div className="app-secondary-title">Solita 2021</div>
      </header>

      <main>
        <Quickstart />
        <Namelist />
      </main>
    </div>
  );
}

export default App;
