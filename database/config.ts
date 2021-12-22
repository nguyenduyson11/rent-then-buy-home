const mongoose = require("mongoose");
require("dotenv").config();
export default function connectDb(){
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Database connection Success");
    })
    .catch((err: any) => console.error(`Database connect failed ${err}`));

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
  });
};
