import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  console.log(params);
  useEffect(() => {
      axios.get(`/products/${params.productId}`).then((res) => {
        setProduct(res.data);
        console.log(res.data);
      }).catch((err)=>{
          console.log(err);
      })
  }, []);
  return (
    <div class="home">
      <h1>hello</h1>
    </div>
  );
};

export default Product;
import React, { useState } from "react";
import greenhouse from "./../images/greenhouse.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

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
        <div clasName="product-input">
          <TextField
            type="text"
            className="quantity-input"
            id="quantity"
            label="Quantity"
            variant="outlined"
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <h1 className="pounds-total">lbs </h1>
        <h1 className="pounds-total">=</h1>
        <h1 className="pounds-total">Total:$</h1>
        <h1 className="product-output-price"> {quantity}</h1>
        <ShoppingCartIcon className="product-icon" />
      </div>
    </div>
  );
};

Products.propTypes = {
  quantity: PropTypes.number,
};

export default Products;
