import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";

const formValidationSchema = yup.object({
  firstName: yup.string().required("Why not? Fill the First Name"),
  lastName: yup.string().required("Why not? Fill the Last Name"),
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

function Signup() {
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values.firstName);
      createUser(values);
    },
  });

  const createUser = (newUser) => {
    fetch("https://url-shortener-backend-ab7t.onrender.com/user/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.token) {
          setErr(data.message);
          localStorage.setItem("token", data.token);
          alert(data.message);
          navigate("/login");
        } else {
          setErr(data.error);
        }
      });
  };

  return (
    <form
      className="container mt-5 w-100 signup-div gap-2"
      onSubmit={formik.handleSubmit}
    >
      <h1>SIGNUP</h1>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        value={formik.values.firstName}
        type="text"
        label="First Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="w-100 err-div">
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : (
          ""
        )}
      </div>
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        value={formik.values.lastName}
        type="text"
        label="Last Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="w-100 err-div">
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : (
          ""
        )}
      </div>
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

export default Signup;
