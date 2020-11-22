import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from 'axios';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = ({ UI, loginUser, user }) => {
  //state initialization
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  /*useEffect(() => {
    if (UI.errors) {
      setErrors({ errors: UI.errors });
    }
  }); */

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    axios.post('/login', userData).then((res) => {
        console.log(res.data);
        window.history.pushState('/');
    }).catch((err) =>{
        setErrors({
            error: err.response.data
        })
    })
  };

  return (
    <div class="login">
      <form noValidate onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <TextField
          required
          className="login-box"
          id="outlined-required"
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
          id="outlined-required"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={errors.password}
          error={errors.password ? true : false}
        />
        <Button className="login-button" variant="contained" type="submit">
          Log In
        </Button>
      </form>
      <hr />
      <Button component={Link} to="/signup" className="login-signup">
        or sign-up here
      </Button>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

export default Login;
