import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const Products = () => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  var params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/products/${params.productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      let valueArr = oldCart.map(function (item) {
        console.log(item.productName);
        return item.productName;
      });

      var hasDuplicateName = valueArr.some(function (item, idx) {
        return valueArr.indexOf(item.productName) !== idx;
      });
      if (!hasDuplicateName) {
        var newItem = {
          productName: params.productId,
          productPrice: product.productPrice,
          productImage: product.image,
          productQuantity: quantity,
        };
        oldCart.push(newItem);
      } else {
        setError("Cannot add item already in cart.");
      }

      localStorage.setItem("cart", JSON.stringify(oldCart));
    }
  };

  console.log(product);
  return (
    <div className="home">
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
            <IconButton onClick={onClick}>
              <ShoppingCartIcon className="product-icon" />
              <p>{error ? error : ""}</p>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  quantity: PropTypes.number,
};

export default Products;
