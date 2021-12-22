const multer = require("multer");
const path = require("path");

// Multer config
export default multer({
  storage: multer.diskStorage({}),
  fileFilter: (req: Request, file: any, cb : Function) => {
    let ext = path.extname(file.originalname);  
    console.log(path.extname(file.originalname))
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" &&  ext !== ".mp4") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});