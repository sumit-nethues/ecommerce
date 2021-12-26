import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
	console.log("check req", req);
	res.json({ success: true, message: "route is working fine" });
};
