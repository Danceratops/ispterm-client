import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/imports.scss";

const ShoppingCart = () => {
  const [carts, setCarts] = useState([]);
  const [payload, setPayloader] = useState({});
  const [hasError, setError] = useState(false);

  async function fetchCart() {
    axios
      .get("/cart")
      .then((res) => {
        console.log(res.data);
        setCarts(res.data);
        setPayloader(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // emptyCart() function?

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div class="table-container">
      <table class="main-table">
        <tr>
          <th></th>
          <th> Item </th>
          <th> Quantity(lbs.) </th>
          <th> Cost Per Lb </th>
          <th> Total </th>
        </tr>
        {carts.map((item, i) => (
          <tr>
            <td> {item.productId} </td>
            <td> {item.productPrice}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ShoppingCart;
