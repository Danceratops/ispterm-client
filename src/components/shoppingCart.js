import React from "react";

import "../styles/imports.scss";

const ShoppingCart = ({ quantity, price, title, image, total }) => {

  return (
    <tr className="row-content">
      <td className="image-title-cart ">
        <img className="image" src={image} alt={title}></img>
        {title}
      </td>
      <td className="image-cart"> {quantity} </td>
      <td className="image-cart"> {price} </td>
      <td className="image-cart"> {total} </td>
    </tr>
  );
};

export default ShoppingCart;
