import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/ItemCount/ItemCount'

const App = () => {

  return (
    <div className="App">
      <header>
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemListContainer welcome="Bienvenido" functionality="Lista"/>
      <Counter/>
    </div>
  );
}

export default App;
