import React, { useState } from "react";
import greenhouse from "./../images/greenhouse.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextField from "@material-ui/core/TextField";

const Products = () => {
  const [quantity, setQuantity] = useState("");

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div class="home">
      <div className="product-grid-container">
        <div className="product-picture">
          <img class="product-img" src={greenhouse} alt=" "></img>
        </div>
        <div className="product-title-price">
          <h1 className="product-title">Title $3.99</h1>
          <p1 className="product-desc">
            Parsley is widely used in Middle Eastern, Mediterranean, Brazilian,
            and American cuisine. Curly leaf parsley is used often as a garnish.
            Green parsley is used frequently as a garnish on potato dishes
            (boiled or mashed potatoes), on rice dishes (risotto or pilaf), on
            fish, fried chicken, lamb, goose, and steaks, as well in meat or
            vegetable stews (i**ncluding shrimp creole, beef bourguignon,
            goulash, or chicken paprikash).
          </p1>
        </div>
      </div>
      <div className="product-box">
        <TextField
          type="text"
          className="quantity-input"
          id="quantity"
          label="Quantity"
          variant="outlined"
          value={quantity}
          onChange={handleChange}
        />
        <h1 className="pounds-total">lbs = Total: </h1>
        <h1 className="product-output-price"> ${quantity}</h1>
        <ShoppingCartIcon className="product-icon" />
      </div>
    </div>
  );
};

export default Products;
