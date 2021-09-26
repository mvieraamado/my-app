import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Switch>
          <Route path="/collection">
            <ItemListContainer
            />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
