import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const Products = () => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const [inCart, setInCart] = useState(false);
  var params = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${params.productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    setInCart(localStorage.getItem(params.productId));
  }, [params]);

  const handleChange = (e) => {
    setError("");
    setQuantity(e.target.value);
  };

  const onClick = (e) => {
    if (quantity <= 0) {
      setError("Cannot add quantity of amount zero or less.");
    } else {
      let oldCart = JSON.parse(localStorage.getItem("cart")) || [];
      let oldAmount = localStorage.getItem("cartAmount") || 0;
      let inTheCart = localStorage.getItem(params.productId) || false;
      let subtotal = localStorage.getItem('subtotal') || 0;
      if (!inTheCart) {
        var newItem = {
          productName: params.productId,
          productPrice: product.productPrice,
          productImage: product.image,
          productQuantity: quantity,
          productTotal: (quantity * product.productPrice)
        };
        
        setInCart(true);
        oldCart.push(newItem);
        oldAmount++;
        subtotal= parseFloat(subtotal) + parseFloat(quantity * product.productPrice);
        localStorage.setItem("cartAmount", oldAmount);
        localStorage.setItem(params.productId, true);
        localStorage.setItem('subtotal', subtotal);
      } else {
        setError("Cannot add item already in cart.");
      }

      localStorage.setItem("cart", JSON.stringify(oldCart));
    }
  };

  var productMarkUp = !loading ? (
    <div className="product-grid-container">
      <div className="product-picture">
        <img
          class="product-img"
          src={product.image}
          alt={params.productId}
        ></img>
      </div>
      <div className="product-details-box">
        <div className="product-title-price">
          <h1 className="product-title">
            {params.productId} ${product.productPrice}
          </h1>
          <p className="product-desc">{product.Description}</p>
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
          <h1 className="pounds-total">lbs </h1>
          <h1 className="pounds-total">
            Total: ${(quantity * product.productPrice).toFixed(2)}
          </h1>
          <IconButton onClick={onClick} disabled={inCart}>
            {inCart ? (
              <DoneOutlineIcon className="product-icon" />
            ) : (
              <ShoppingCartIcon className="product-icon" />
            )}
            <p>{error ? error : ""}</p>
          </IconButton>
        </div>
      </div>
    </div>
  ) : (
    <div className="progress">
      {loading && <CircularProgress size={100} className="progress" />}
    </div>
  );
  
  return <div className="home">{productMarkUp}</div>;
};

Products.propTypes = {
  quantity: PropTypes.number,
};

export default Products;
