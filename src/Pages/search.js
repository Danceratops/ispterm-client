import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/card";

import CircularProgress from "@material-ui/core/CircularProgress";

const Search = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
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
    <div className='progress'>{loading && <CircularProgress size={100} className="progress" />}</div>
  );
  return <div className="search">{productMarkUp}</div>;
};

export default Search;
