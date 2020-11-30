import React, { useState } from "react";
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
  const [subTotal] = useState("");
  return (
    <div class="home">
      <div class="header">
        <h4 className="cart-text">Your Basket...</h4>
        <table class="main-table">
          <tr>
            <th> Item </th>
            <th> Quantity(lbs.) </th>
            <th> Cost Per Lb </th>
            <th> Total </th>
          </tr>
          <ShoppingCart
            image="https://www.uakron.edu/contentAsset/image/1c5c9d78-d829-4a80-ba2a-32f1f70b9944/fileAsset/byInode/1/filter/Resize/resize_w/140"
            title="Xiao's Favorite"
            quantity="7"
            price="74.99"
          />
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
              {subTotal}
              <br></br>
              $1.27
              <br></br>
              $5.55
              <br></br>
              $20.65
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
