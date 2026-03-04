import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: String
  },

  plastic_alternative_grams: {
    type: Number,
    required: true
  },

  local_sourcing: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

export default mongoose.model("Product", productSchema);