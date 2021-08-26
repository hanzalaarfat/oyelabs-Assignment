const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const Db = process.env.MONGO_DB_URI;
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log("connectin suceesfull");
  })
  .catch((err) => {
    console.log("data base is not connected", err);
  });
mongoose.Promise = global.Promise;
