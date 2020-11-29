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
        <h4>Your Basket...</h4>
        <div class="table-container">
          <table class="main-table">
            <tr>
              <th> Item </th>
              <th></th>
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
      </div>
      <div className="cart-container">
        <form className="ship-container">
          <h4>Ship To</h4>
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
          <div className="state-zip">
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
          </div>
          <TextField
            multiline
            className="instructions-box"
            id="instructions"
            label="Delivery instructions (optional)"
            variant="outlined"
            type="instructions"
          />
        </form>
        <div className="divider"></div>
        <form className="checkout-container">
          <h4>Pay With</h4>
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
              <p1> Subtotal </p1>
              <p1> Taxes </p1>
              <p1> Shipping </p1>
              <p1> Total </p1>
            </div>
            <div className="bill-extension">
              <p1> {subTotal} </p1>
              <br></br>
              <p1> $1.27 </p1>
              <br></br>
              <p1> $5.55 </p1>
              <br></br>
              <p1> $20.65 </p1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
