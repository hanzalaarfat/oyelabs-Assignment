const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

require("./Db/conection");

const coustomerRoute = require("./Router/coustomerRoute");
const ans3Route = require("./Router/ans3Router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", coustomerRoute);
app.use("/api", ans3Route);

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("Hello World");
});

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`sarver started at port ${process.env.PORT} `);
});
