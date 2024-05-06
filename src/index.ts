import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("connected to db"));

// Create express server
const app = express();
//adding middleware to automatically convert req of out api to json
app.use(express.json());
//adding middleware to allow cross origin requests
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health ok!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
