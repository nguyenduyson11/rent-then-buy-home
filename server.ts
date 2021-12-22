import cors from "cors";
import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import connectDb from "./database/config";
import router from "./router/mainRouter";
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8181;
connectDb();
// enable and helmet
app.use(cors());
app.use(helmet());

app.use("/api", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});
app.listen(PORT, () => {
  console.log(`Server listing port ${PORT}`);
});
