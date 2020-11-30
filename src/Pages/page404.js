import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="container-404">
      <h1 className="error-text">404 ERROR!</h1>
      <h3 className="error-text">You have entered the wrong garden!</h3>
      <div className="button-error">
        <Button
          component={Link}
          to="/"
          className="error-button"
          variant="contained"
        >
          Return to Your Garden
        </Button>
      </div>
    </div>
  );
};

export default Page404;
