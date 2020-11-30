import React, { useState } from "react";

import "../styles/imports.scss";

const ShoppingCart = ({ quantity, price, title, image }) => {
  return (
    <tr className="row-content">
      <td className="image-title-cart ">
        <img className="image" src={image}></img>
        {title}
      </td>
      <td className="image-cart"> {quantity} </td>
      <td className="image-cart"> {price} </td>
      <td className="image-cart"> 100.00 </td>
    </tr>
  );
};

export default ShoppingCart;
