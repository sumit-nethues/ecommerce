import { Request, Response } from "express";
import { productModel } from "../models/productModel";

// ceate product --admin route sonly admin can access this
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) {
    console.log("error in saving product data", err);
  }
};

// get all product
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await productModel.find({}).exec();
    res.json({ success: true, product });
  } catch (err) {
    console.log("error in getting all products", err);
  }
};

// update a prouct -- admin access only
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const { productId } = req.params;
    const data = req.body;

    let product = await productModel.findById(productId).exec();

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "product not found" });
    }

    console.log("check product here", product);

    product = await productModel
      .findByIdAndUpdate(productId, data, {
        runValidators: true,
        new: true,
      })
      .exec();

    res.json({ success: true, product });
  } catch (err) {
    console.log("error in updating product", err);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const { productId } = req.params;

    const product = await productModel.findById(productId).exec();
    console.log("check product", product);

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
    }

    await product.remove();

    res.json({ success: true, message: "Product delted successfully" });
  } catch (err) {
    console.log("error in deleting product in server", err);
  }
};

export const getProductDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.params;

    const product = await productModel.findById(productId).exec();

    res.json({ success: true, product });
  } catch (err) {
    console.log("error in getting product detail", err);
  }
};
