import express from "express";
import bookRouter from "./book";
const app = express();

app.use("/api", bookRouter);

export default app;
