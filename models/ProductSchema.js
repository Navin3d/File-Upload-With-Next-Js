import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const ImageSchema = new Schema({
  name: String,
  description: String,
  data: {
    data: Buffer,
    contentType: String
  }
});

mongoose.models = {};

const ProductModel = mongoose.model("Images", ImageSchema);

export default ProductModel;
