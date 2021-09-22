import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Switch>
          <Route path="/collection">
            <ItemListContainer welcome="Bienvenido" functionality="Los mas vendidos"/>
          </Route>
          <Counter/>
        </Switch>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
