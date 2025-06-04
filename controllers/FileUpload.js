const File = require("../models/File");

exports.localFileUpload = async (req, res) => {
  try {
    // fetch file
    const file = req.files.file;
    console.log("file received", file);

    let path = __dirname + "/files/" + Date.now();
    console.log("Path ", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "local file uploaded",
    });
  } catch (Err) {
    console.error(Err);
  }
};
