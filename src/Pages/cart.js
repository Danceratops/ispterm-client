import React from "react";

import ShoppingCart from "../components/shoppingCart";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

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

const cart = () => {
  return (
    <div class="home">
      <div class="header">
        <h4>Your Basket...</h4>
      </div>
      <ShoppingCart />
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
    </div>
  );
};

export default cart;
