const express = require("express");
const morgan =require("morgan")
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(express.json());
app.use(morgan("dev"))

app.listen(port, () => {
  console.log("server in connecting" + port);
});
