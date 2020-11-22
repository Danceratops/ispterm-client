import React, { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import Card from "../components/card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var productMarkUp = products ? (
    products.map((product) => (
      <Card
        key={product.productId}
        title={product.productId}
        price={product.productPrice}
        description={product.Description}
        imageSource={product.image}
      />
    ))
  ) : (
    <p>Loading...</p>
  );

  console.log(productMarkUp);
  return <div className="search">{productMarkUp}</div>;
};

export default Search;
