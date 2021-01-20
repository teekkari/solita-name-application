import './App.css';
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
      </main>
    </div>
  );
}

export default App;
