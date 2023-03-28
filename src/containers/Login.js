import React from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div>
      <form>
        <TextField label="Email" type="email" required />
        <br />
        <TextField label="Password" type="password" required />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
      <br />
      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          <Button variant="text" color="primary">
            Signup
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Login;


