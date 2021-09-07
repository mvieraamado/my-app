import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemListContainer welcome="Bienvenido" functionality="Lista"/>
    </div>
  );
}

export default App;
