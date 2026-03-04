import mongoose from "mongoose";
import dotenv from "dotenv";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

dotenv.config();

const seedOrders = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    const products = await Product.find();
    if (products.length === 0) {
      console.log("No products found. Seed products first.");
      process.exit();
    }
    const orders = [
      {
        orderId: "ORD001",
        items: [
          { product: products[0]._id, quantity: 2 },
          { product: products[1]._id, quantity: 1 }
        ],
        totalPrice: products[0].price * 2 + products[1].price
      },
      {
        orderId: "ORD002",
        items: [
          { product: products[2]._id, quantity: 3 },
          { product: products[3]._id, quantity: 1 }
        ],
        totalPrice: products[2].price * 3 + products[3].price
      },
      {
        orderId: "ORD003",
        items: [
          { product: products[4]._id, quantity: 1 }
        ],
        totalPrice: products[4].price
      }
    ];
    await Order.deleteMany();
    await Order.insertMany(orders);
    console.log("✅ Orders seeded successfully");
    process.exit();

  } catch (error) {

    console.error(error);
    process.exit(1);

  }
};

seedOrders();