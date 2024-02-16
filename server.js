const express = require("express");
const morgan = require("morgan");
const appRouter = require("./routes/router");
const handleError = require("./middleware/handleError");
const connectDB = require("./utils/db");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(express.json());
app.use(morgan("dev"));

// router
app.use(appRouter);
// handle error
app.use(handleError);
// database connect
connectDB();
app.listen(port, () => {
  console.log("server in connecting" + port);
});
