import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./Pages/home";
import login from "./Pages/login";
import signup from "./Pages/signup";
import cart from "./Pages/cart";
import search from "./Pages/search";
import product from "./Pages/products";
import signout from "./Pages/Signout";
import thankyou from "./Pages/thankyou";
import page404 from "./Pages/page404";
import noinfo from "./Pages/noinfo";

import Nav from "./components/navbar";

import "./styles/imports.scss";
import Footer from "./components/footer";
import Axios from "axios";

Axios.defaults.baseURL = "https://us-central1-isp-term.cloudfunctions.net/api";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/cart" component={cart} />
          <Route exact path="/search" component={search} />
          <Route exact path="/signout" component={signout} />
          <Route exact path="/thankyou" component={thankyou} />
          <Route exact path="/products/:productId" component={product} />
          <Route exact path="/noinfo" component={noinfo} />
          <Route exact path="*" component={page404} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
