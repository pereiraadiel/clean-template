import express, { NextFunction, Request, Response } from "express";
import { errors } from "celebrate";
import "express-async-errors";
// import "@shared/container/index";

import AppError from "../../errors/AppError";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  // eslint-disable-next-line no-console
  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
