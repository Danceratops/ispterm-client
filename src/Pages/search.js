import React from "react";

import Card from "../components/card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const search = () => {
  return (
    <div class="home">
      <h1>Search Page</h1>
      <Card />
      <Button component={Link} to="/products">
        Product Page
      </Button>
    </div>
  );
};

export default search;
