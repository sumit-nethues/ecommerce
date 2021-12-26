import express from "express";

import { getAllProducts } from "../controllers/userController";

const router = express.Router();

router.get("/products", getAllProducts);

export default router;
