const express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require("cors");
const path = require("path");
const expressGraphQL = require("express-graphql");

const graphQLSchema = require("./graphql/schema");
const graphQLResolvers = require("./graphql/resolver");
console.log("123", graphQLSchema, graphQLResolvers)
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

const db = require("./config/key").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport config
// Routes
app.use(
  "/graphql",
  expressGraphQL({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
  })
);
// app.use("/", )
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server up and running on port ${port} !`));
