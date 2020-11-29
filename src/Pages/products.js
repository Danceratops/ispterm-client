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
