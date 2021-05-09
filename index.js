// Import dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
// Require Route
const api = require("./routes/route");

const ProductRoute = require("./routes/productRoute");

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Configure the bodyParser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure the CORs middleware
app.use(cors());

//connect fb

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected"));
// Configure app to use route
app.use("/api/v1", api);
app.use("/api/v1", ProductRoute);
// This middleware informs the express application to serve our compiled React files

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
// NOTE: You may need to modify "server": "nodemon server.js",
// depending on where your sever.js is located and the name you have given.
//  In this case, server.js is in the same level as package.json.
