const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection successful");
    })
    .catch((err) => {
      console.error(err);
      console.log("db connection issues");
      process.exit();
    });
};
