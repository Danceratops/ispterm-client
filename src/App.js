import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./Pages/home";
import login from "./Pages/login";
import signup from "./Pages/signup";
import cart from "./Pages/cart";
import products from "./Pages/products";
import search from "./Pages/search";
import product from "./Pages/product";
import thankyou from "./Pages/thankyou";

import Nav from "./components/navbar";

import "./styles/imports.scss";
import Footer from "./components/footer";

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
            <Route exact path="/products" component={products} />
            <Route exact path="/search" component={search} />
            <Route exact path="/thankyou" component={thankyou} />
            <Route exact path="/product/:productId" component={product} />
          </Switch>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
