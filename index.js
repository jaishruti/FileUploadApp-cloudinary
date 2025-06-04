// app create
const express = require("express");
const app = express();

// get PORT
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload);

//db se connect
const db = require("./config/db");
db.connect();

// connect with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// app route mount krna h
const upload = require("./routes/FileUpload");
app.use("/api/v1/upload", upload);

//activate server
app.listen(PORT, () => {
  console.log(`App is runnig is at ${PORT}`);
});
