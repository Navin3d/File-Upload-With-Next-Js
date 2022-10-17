import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    data: {
		data: Buffer,
		contentType: String
	}
});

mongoose.models = {};

const ProductModel = mongoose.model("Products", ProductSchema);

export default ProductModel;
