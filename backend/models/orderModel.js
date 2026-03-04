import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: Number
});

const orderSchema = new mongoose.Schema({

  orderId: {
    type: String,
    required: true
  },

  items: [orderItemSchema],

  totalPrice: Number

}, { timestamps: true });

export default mongoose.model("Order", orderSchema);