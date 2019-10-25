import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  makeStyles,
  Grid,
  Paper,
  FormGroup,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import axios from "axios";

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

  const handleSubmit = useCallback(async values => {
    const { name, email, phoneNumber, address, zipCode } = values;

    try {
      const requestBody = {
        query: `
          mutation {
            createUser(userInput: {
              name: "${name}"
              email: "${email}"
              phoneNumber: "${phoneNumber}"
              address: "${address}"
              zipCode: "${zipCode}"
            }) {
              _id
              token
              email
            }
          }
        `
      };

      const { data } = await axios.post(
        "http://localhost:5000/graphql",
        requestBody
      );

      if (data.errors) {
        alert("Failed");
      } else {
        alert("success");
      }
    } catch (err) {
      alert("exception err");
    }
  });

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
          console.log("a", values);
          handleSubmit(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 10
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default Register;
