<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import home from './Pages/home';
import login from './Pages/login';
import signup from './Pages/signup';
import cart from './Pages/cart';

import Nav from './components/navbar';

import './styles/imports.scss';
=======
import Footer from './components/footer'
import Login from './components/login'
import './styles/imports.scss'
>>>>>>> 2dee7b4... First part of footer complete

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/login' component={login}/>
          <Route exact path='/signup' component={signup}/>
          <Route exact path='/cart' component={cart}/>
        </Switch>
      </Router>
=======
      <h1>hello from outside login</h1>
      <Login>
        <h1>inside the login</h1>
      </Login>
      <Footer/>
>>>>>>> 2dee7b4... First part of footer complete
    </div>
  );
}

export default App;
