import mongoose from "mongoose";
import Product from "../models/productModel.js";
import dotenv from "dotenv";
dotenv.config();


const products = [
  {
    name: "Bamboo Toothbrush",
    price: 120,
    category: "Personal Care",
    plastic_alternative_grams: 20,
    local_sourcing: true
  },
  {
    name: "Reusable Steel Bottle",
    price: 350,
    category: "Lifestyle",
    plastic_alternative_grams: 150,
    local_sourcing: true
  },
  {
    name: "Seed Paper Pen",
    price: 60,
    category: "Office Supplies",
    plastic_alternative_grams: 10,
    local_sourcing: true
  },
  {
    name: "Jute Shopping Bag",
    price: 180,
    category: "Lifestyle",
    plastic_alternative_grams: 120,
    local_sourcing: true
  },
  {
    name: "Bamboo Notebook",
    price: 200,
    category: "Office Supplies",
    plastic_alternative_grams: 80,
    local_sourcing: false
  },
  {
    name: "Compostable Food Container",
    price: 90,
    category: "Packaging",
    plastic_alternative_grams: 50,
    local_sourcing: false
  }
];

const seedProducts = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ Products Seeded Successfully");

    process.exit();

  } catch (error) {

    console.error(error);
    process.exit(1);

  }
};

seedProducts();