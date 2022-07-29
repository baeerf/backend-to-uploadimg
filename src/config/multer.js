const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const multerS3 = require("multer-s3");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
  }),
  limits: {
    fileSize: 3 * 1024 + 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpg"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
