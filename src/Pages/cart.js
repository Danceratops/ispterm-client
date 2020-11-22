import React from "react";
import Homecards from "./../components/homeCard";

const cart = () => {
  return (
    <div class="home">
      <h1>Cart Page</h1>
      <Homecards
        Name="Cellary"
        Description="Its good"
        Price="1.22"
        Image="https://picsum.photos/200/"
      />
    </div>
  );
};

export default cart;
