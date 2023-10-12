import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// This Login Component
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  // Here, once the user click on login button and the checking the user is exists or not
  // with the use of database
  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };
    const res = await fetch("https://url-shortener-backend-ab7t.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.token) {
      setErr("");
      localStorage.setItem("token", data.token);
      navigate("/");
      alert("Login Successful.");
    } else {
      setErr(data.error);
    }
  };
  return (
    <div className="container login-div">
      <h1>LOGIN</h1>
      <TextField
        sx={{ maxWidth: "500px" }}
        fullWidth
        type="email"
        value={email}
        id="outlined-basic"
        variant="outlined"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ maxWidth: "500px", marginTop: "30px" }}
        fullWidth
        type="password"
        value={password}
        id="outlined-basic"
        variant="outlined"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/forgot-password" className="mt-3 cursor-pointer">Forgot Password ?</Link>
      {err ? (
        <Typography className="mt-3" color={"error"}>
          {err}
        </Typography>
      ) : (
        ""
      )}
      <Button
        size="large"
        className="mt-3"
        variant="contained"
        onClick={handleLogin}
      >
        LOGIN
      </Button>
    </div>
  );
}

export default Login;
