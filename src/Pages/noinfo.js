import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Noinfo = () => {
  return (
    <div className="container-noinfo">
      <h1 className="noinfo-text">This is a Test Site</h1>
      <h3 className="noinfo-text">None of this Data is Recorded</h3>
      <Button
        component={Link}
        to="/cart"
        className="noinfo-button"
        variant="contained"
      >
        Return to Shopping Cart
      </Button>
    </div>
  );
};

export default Noinfo;
