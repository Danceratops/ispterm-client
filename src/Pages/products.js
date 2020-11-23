import React from "react";
import Grid from "@material-ui/core/Grid";
import greenhouse from "./../images/greenhouse.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";

const products = () => {
  return (
    <div class="home">
      <Grid className="product-grid-container" container spacing={4}>
        <Grid className="product-picture" item xs={6}>
          <img class="product-img" src={greenhouse}></img>
        </Grid>
        <Grid className="product-text" item xs={6}>
          <h1 className="product-title">Parsley</h1>
          <h2 className="product-price">Price</h2>
          <p1 className="product-desc">
            Parsley is widely used in Middle Eastern, Mediterranean, Brazilian,
            and American cuisine. Curly leaf parsley is used often as a garnish.
            Green parsley is used frequently as a garnish on potato dishes
            (boiled or mashed potatoes), on rice dishes (risotto or pilaf), on
            fish, fried chicken, lamb, goose, and steaks, as well in meat or
            vegetable stews (including shrimp creole, beef bourguignon, goulash,
            or chicken paprikash).
          </p1>
          <Grid className="product-box" item xs={9} container direction="row">
            <h1 className="amount">Quantity: </h1>
            <input
              type="text"
              className="quantity-input"
              id="quantity"
              size="4"
            ></input>
            <h1 className="pounds-total">lbs = Total: </h1>
            <h1 className="product-output-price">$2.13</h1>
            <ShoppingCartIcon />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default products;
