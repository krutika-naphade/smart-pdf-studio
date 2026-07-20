import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";

import connectDB from "./config/db";
import pdfRoutes from "./routes/pdfRoutes";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/pdf", pdfRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Smart PDF Studio Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
