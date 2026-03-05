import Order from "../models/orderModel.js";// import Product model so mongoose registers the schema before populate runs
import Product from"../models/productModel.js";
import { module1Response, module3Response } from "../services/aiService.js";
export const module1 = async(req,res)=>{
    try {
        const{productName,description,material} = req.body;
        const response = await module1Response(productName,description,material);
        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}
export const module3 = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findOne({ orderId }).populate("items.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    let plasticSaved = 0;
    let localSourcing = true;
    order.items.forEach(item => {
      const product = item.product;
      plasticSaved += product.plastic_alternative_grams * item.quantity;
      if (!product.local_sourcing) {
        localSourcing = false;
      }
    });
    const carbonAvoided = plasticSaved * 6;
    const response = await module3Response(
      plasticSaved,
      carbonAvoided,
      localSourcing
    );
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};