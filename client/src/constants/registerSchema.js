import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phoneNumber: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  zipCode: Yup.number().required("Required")
});

export default RegisterSchema;
