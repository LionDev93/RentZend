import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  makeStyles,
  Grid,
  Paper,
  FormGroup
} from "@material-ui/core";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";

import RegisterSchema from "../constants/registerSchema";

const useStyles = makeStyles(theme => ({
  container: {
    width: 280,
    padding: theme.spacing(2)
  },
  title: {
    textAlign: "center"
  },
  form: {
    margin: theme.spacing(1)
  },
  textField: {}
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

function Register() {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <h1 className={classes.title}>Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
          zipCode: ""
        }}
        validationSchema={RegisterSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form className={classes.form}>
            <FormGroup>
              <TextField
                label="name"
                name="name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.name && touched.name && errors.name}
                error={errors.name && touched.name}
                margin="normal"
              />
              <TextField
                label="email"
                name="email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email && errors.email}
                error={errors.email && touched.email}
                margin="normal"
              />
              <TextField
                label="Phonenumber"
                name="phoneNumber"
                className={classes.textField}
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber
                }
                error={errors.phoneNumber && touched.phoneNumber}
                margin="normal"
                InputProps={{
                  inputComponent: TextMaskCustom
                }}
              />
              <TextField
                label="Address"
                name="address"
                className={classes.textField}
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.address && touched.address && errors.address}
                error={errors.address && touched.address}
                margin="normal"
              />
              <TextField
                label="Zip Code"
                name="zipCode"
                className={classes.textField}
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.zipCode && touched.zipCode && errors.zipCode}
                error={errors.zipCode && touched.zipCode}
                margin="normal"
              />
            </FormGroup>
          </form>
        )}
      </Formik>
    </Paper>
  );
}

export default Register;
