import { Schema, model, Model, Types } from "mongoose";

// const {  } = mongoose;

interface Images {
	public_id: String;
	url: String;
}

interface Reviews {
	name: String;
	rating: Number;
	comment: String;
}

interface Product {
	_id: Types.ObjectId;
	name: String;
	description: String;
	price: String;
	rating?: Number;
	images: Types.DocumentArray<Images>;
	category: String;
	stock: Number;
	numOfReviews: Number;
	reviews: Types.DocumentArray<Reviews>;
}

const ProductSchema = new Schema<Product, Model<Product>>({
	name: { type: String, required: [true, "Please Enter product Name"], trim: true },
	description: { type: String, required: [true, "Please Enter product Description"] },
	price: {
		type: String,
		required: [true, "Please Enter product Price"],
		maxLength: [8, "Price can not be exceed 8 characters"],
	},
	rating: { type: Number, default: 0 },
	images: [{ public_id: { type: String, required: true }, url: { type: String, required: true } }],
	category: { type: String, required: [true, "PLease Enter product Category"] },
	stock: {
		type: Number,
		required: [true, "Please Enter product Stock"],
		maxLength: [4, "Stock cannot exceed 4 characters"],
		default: 1,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},

	reviews: [
		{
			name: { type: String, required: true },
			rating: { type: Number, required: true },
			comment: { type: String, required: true },
		},
	],
});

export default model<Product>("Product", ProductSchema);
