import * as yup from "yup";
export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("**Invalid email**")
    .required("**Email is required**"),
  password: yup
    .string()
    .min(8, "**Password must be at least 8 characters**")
    .required("**Password is required**"),
});
export const SignUpValidation = yup.object().shape({
  name: yup
    .string()
    .required("**Name is required**")
    .matches(/^[A-Za-z\s]+$/, "**Invalid name format**")
    .min(4, "name must be 4 letters"),
  email: yup
    .string()
    .email("**Invalid email**")
    .required("**Email is required**"),
  password: yup
    .string()
    .min(8, "**Password must be at least 8 characters**")
    .required("**Password is required**"),
});

// export const TodoValidate = yup.object.shape({
//     title: yup
//     .string()
//     .required("**Title is required**")
//     .matches(/^[A-Za-z\s]+$/, "**Invalid name format**"),

// })
