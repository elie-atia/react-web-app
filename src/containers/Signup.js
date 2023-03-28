import React from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";

const Signup = () => {

  return (
    <div>
      <form>
        <TextField label="Name" type="text" required />
        <br />
        <TextField label="Email" type="email" required />
        <br />
        <TextField label="Password" type="password" required />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Signup
        </Button>
      </form>
      <br />
      <p>
        Already have an account?{" "}
        <Link to="/login">
          <Button variant="text" color="primary">
            Login
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Signup;


