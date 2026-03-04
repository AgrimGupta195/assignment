// import OpenAI from "openai";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { module1Prompt, module2Prompt } from "../prompt.js";
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const client = new OpenAI({
//   apiKey: process.env.GEMINI_API_KEY,
//   baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
// });

export const module1Response = async (productName, description, material) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });
    const prompt = module1Prompt(productName, description, material);
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(JSON.parse(response));
    return JSON.parse(response);
  } catch (error) {
    console.error("AI Error:", error);
  }
};
// module1Response(
//   "Bamboo Toothbrush",
//   "Eco-friendly toothbrush made from biodegradable bamboo handle with soft BPA-free bristles.",
//   "Bamboo"
// );

export const module2Response = async (plasticSaved, carbonAvoided, localSourcing) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });
    const prompt = module2Prompt(plasticSaved, carbonAvoided, localSourcing);
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(JSON.parse(response));
    return JSON.parse(response);
  } catch (error) {
    console.error("AI Error:", error);
  }
};

// module2Response(190,1140,true);