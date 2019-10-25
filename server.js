const express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
const restaurant = require("./routes/restaurant");
const customer = require("./routes/restaurant");
const admin = require("./routes/admin")
var cors = require("cors");
const path = require("path");

const app = express();

app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")))
app.use(express.static(path.join(__dirname, "static")))

const db = require("./config/key").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/restaurant", restaurant)
app.use("api/customer", customer);
app.use("/api/admin", admin)
// app.use("/", )
const port = process.env.PORT || 5003;

app.listen(port, () => console.log(`server up and running on port ${port} !`));
