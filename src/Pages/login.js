import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = ({ UI, loginUser, user }) => {
  //state initialization
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  var history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post(`/login`, userData)
      .then((res) => {
        const token = res.data;
        localStorage.setItem('token', token);
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <h1>Welcome back to the garden...</h1>
      <div className="login">
        <form noValidate onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <TextField
            required
            className="login-box"
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={errors.email}
            error={errors.email ? true : false}
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
            helperText={errors.password}
            error={errors.password ? true : false}
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
        <Button component={Link} to="/signup" className="login-signup">
          or sign-up here
        </Button>
      </div>
    </div>
  );
};

export default Login;
