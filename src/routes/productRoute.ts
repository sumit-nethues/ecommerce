import express from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetail,
  updateProduct,
} from "../controllers/productController";

const router = express.Router();

// create a new product
router.post("/products/new", createProduct);

// get all products
router.get("/products", getAllProducts);

// update a product and delete
router
  .route("/products/:productId")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetail);

export { router };
