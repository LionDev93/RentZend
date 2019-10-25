import React from "react";
import { makeStyles } from "@material-ui/core";

import Register from "../../components/Register";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Register />
    </div>
  );
}
