import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";

const objStyle = {color: 'white', backgroundColor: 'black', fontSize: 15};

function App() {
  return (
    <div className="App" style={objStyle}>
      <NavBar />
      <ItemListContainer greeting="Bienvenidxs! Toda la variedad de plantas medicinales nativas" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Lema
        </a>
      </header>
    </div>
  );
}

export default App;
