import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("Why not? fill the First Name"),
  lastName: yup.string().required("Why not? fill the Last Name"),
  email: yup.string().email().required("Why not? fill the Email"),
  password: yup
    .string()
    .min(4, "NAtleast have 4 characters")
    .max(10, "Too much characters")
    .required("Why not? fill the Password"),
});
