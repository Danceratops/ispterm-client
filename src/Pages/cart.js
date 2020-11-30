import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ShoppingCart from "../components/shoppingCart";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { FaPaypal, FaCcVisa } from "react-icons/fa";

// @TODO Check if token exists
// if so, continue to cart
// if not, provide link to sign in or sign up
const stateAbbreviations = [
  "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UM",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

const Cart = () => {
  const [subTotal] = useState(
    localStorage.getItem("subtotal") || 0
  );
  const [cart, setCart] = useState(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  var cartMarkUp = cart ? (
    cart.map((item) => (
      <ShoppingCart
        key={item.productName}
        image={item.productImage}
        title={item.productName}
        quantity={item.productQuantity}
        price={item.productPrice}
        total={item.productTotal}
      />
    ))
  ) : (
    <p>Nothing to see...</p>
  );

  var pageMarkUp = (
    <div className="home">
      <div className="header">
        <h4 className="cart-text">Your Basket...</h4>
        <table className="main-table">
          <tr>
            <th> Item </th>
            <th> Quantity(lbs.) </th>
            <th> Cost Per Lb </th>
            <th> Total </th>
          </tr>
          {cartMarkUp}
        </table>
      </div>
      <div className="cart-container">
        <form className="ship-container">
          <h4 className="cart-text">Ship To</h4>
          <div className="input-container">
            <TextField
              required
              className="name-box"
              id="full-name"
              label="Full Name"
              variant="outlined"
              type="full-name"
            />
            <TextField
              required
              className="address-box"
              id="address"
              label="Address"
              variant="outlined"
              type="address"
            />
            <TextField
              required
              select
              className="state-box"
              id="state"
              label="State"
              variant="outlined"
              type="state"
              value=""
            >
              {stateAbbreviations.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              className="zipcode-box"
              id="zipcode"
              label="Zipcode"
              variant="outlined"
              type="zipcode"
            />
            <TextField
              multiline
              className="instructions-box"
              id="instructions"
              label="Delivery instructions (optional)"
              variant="outlined"
              type="instructions"
            />
          </div>
        </form>
        <div className="divider"></div>
        <form className="checkout-container">
          <h4 className="cart-text">Pay With</h4>
          <Button
            component={Link}
            to="/wrapup"
            className="visa-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            <FaCcVisa className="react-icon" />
            Visa
          </Button>
          <Button
            component={Link}
            to="/wrapup"
            className="paypal-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            <FaPaypal className="react-icon" />
            PayPal
          </Button>
          <div className="billing-information">
            <div className="bill-header">
              Subtotal
              <br></br>
              Taxes
              <br></br>
              Shipping
              <br></br>
              Total
            </div>
            <div className="bill-extension">
              ${subTotal}
              <br></br>${(subTotal * 0.08).toFixed(2)}
              <br></br>
              $5.55
              <br></br>${parseFloat(subTotal) + 1.27 + 5.55}
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  var shownContent = localStorage.getItem("token") !== null;

  return shownContent ? (
    pageMarkUp
  ) : (
    <div className="thank-you-container">
      <h1>
        Please create and account or login to continue the checkout process.
      </h1>
      <Link to="/signup" className='thank-you-link'>Here</Link>
    </div>
  );
};

export default Cart;
