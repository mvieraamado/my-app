import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './Context/CartContext';
import { Home } from './components/Home/Home';

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/collection">
              <ItemListContainer/>
            </Route>
            <Route path="/category/:categoryid">
              <ItemListContainer/>
            </Route>
            <Route path="/item/:name">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
  
}

export default App;
