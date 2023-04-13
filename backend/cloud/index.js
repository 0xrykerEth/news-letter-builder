const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dqk6lbes1",
  api_key: "915571643499767",
  api_secret: "BZdwg5cqv5ne5Pm6iQDaH_c5wMY",
  secure: true,
});

module.exports = cloudinary;
