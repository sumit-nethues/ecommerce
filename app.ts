import express, { Application } from "express";

//route imports
import { router as productRoute } from "./src/routes/productRoute";

// init app
const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up middleware
app.use("/api", productRoute);

export default app;
