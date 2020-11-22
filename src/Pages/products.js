import React from "react";
import Grid from "@material-ui/core/Grid";
import greenhouse from "./../images/greenhouse.jpg";

const products = () => {
  return (
    <div class="home">
      <Grid container>
        <Grid
          className="product-image"
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <img src={greenhouse} />
        </Grid>

        <Grid
          className="product-text"
          item
          xs={6}
          container="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <h1 className="product-title">Parsley</h1>
          <p1 className="product-price">Price</p1>
          <h1 className="product-desc">hello</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default products;
