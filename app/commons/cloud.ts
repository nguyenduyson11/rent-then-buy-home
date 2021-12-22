const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: 181689688442639,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
