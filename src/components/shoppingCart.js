import React, { useState } from "react";

import "../styles/imports.scss";

const ShoppingCart = ({ quantity, price, title, image }) => {
  return (
    <tr>
      <td>
        {" "}
        <img className="image" src={image}></img>{" "}
      </td>
      <td> {title} </td>
      <td> {price} </td>
      <td> {quantity} </td>
      <td> 25.00 </td>
    </tr>
  );
};

export default ShoppingCart;
