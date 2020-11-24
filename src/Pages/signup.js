import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  var history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post(`/signup`, userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setLoading(false);
        history.push({pathname: "/thankyou", state: {action: "signin"}});
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="login-container">
      <h1>We can't wait for you to sign up!</h1>
      <div className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Sign-up</h2>
          <TextField
            required
            className="login-box"
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            className="login-box"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            className="login-box"
            id="confirm-password"
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            className="login-button"
            variant="contained"
            type="submit"
            disabled={loading}
          >
            Login{" "}
            {loading && <CircularProgress size={30} className="progress" />}
          </Button>
        </form>
        <hr />
        <Button component={Link} to="/login" className="login-signup">
          or login here
        </Button>
      </div>
    </div>
  );
};

export default Signup;
