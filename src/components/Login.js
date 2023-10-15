import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .email("Email must be a valid Email")
    .required("Why not? Fill the Email"),
  password: yup
    .string()
    .min(4, "Atleast 4 characters required")
    .max(10, "Too many characters")
    .required("Why not? Fill the Password"),
});

// This Login Component
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const loginUser = (user) => {
    fetch("https://url-shortener-backend-ab7t.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.token) {
          setErr("");
          localStorage.setItem("token", data.token);
          navigate("/shortUrl");
          alert("Login Successful.");
        } else {
          setErr(data.error);
        }
      });
  };

  // Here, once the user click on login button and the checking the user is exists or not
  // with the use of database
  // const handleLogin = async () => {
  //   const payload = {
  //     email,
  //     password,
  //   };
  //   const res = await fetch(
  //     "https://url-shortener-backend-ab7t.onrender.com/user/login",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(payload),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   if (data.token) {
  //     setErr("");
  //     localStorage.setItem("token", data.token);
  //     navigate("/");
  //     alert("Login Successful.");
  //   } else {
  //     setErr(data.error);
  //   }
  // };
  return (
    <form
      className="container mt-5 w-100 signup-div gap-2"
      onSubmit={formik.handleSubmit}
    >
      <h1>LOGIN</h1>

      <TextField
        fullWidth
        id="email"
        name="email"
        value={formik.values.email}
        type="email"
        label="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="w-100 err-div">
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <TextField
        fullWidth
        id="password"
        name="password"
        value={formik.values.password}
        type="password"
        label="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="w-100 err-div">
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : (
          ""
        )}
      </div>
      {loading ? (
        <ClipLoader size={50} color={"green"} loading={loading} />
      ) : (
        <Typography className="mt-3" color={"error"}>
          {err}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        onClick={() => setLoading(true)}
      >
        SUBMIT
      </Button>
    </form>
  );
}

export default Login;
