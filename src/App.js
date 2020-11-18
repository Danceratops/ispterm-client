import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import home from './Pages/home';
import login from './Pages/login';
import signup from './Pages/signup';
import cart from './Pages/cart';
import products from './Pages/products';

import Nav from './components/navbar';

import './styles/imports.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/login' component={login}/>
          <Route exact path='/signup' component={signup}/>
          <Route exact path='/cart' component={cart}/>
          <Route exact path='/products' component={products}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
