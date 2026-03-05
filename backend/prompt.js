export const module1Prompt = (productName,description,material)=>{return`
You are an AI product catalog classifier for a sustainable e-commerce platform.
Your task is to analyze a product and generate structured catalog data.
Instructions:
1. Select ONE primary category from the predefined category list.
2. Suggest the most relevant sub-category.
3. Generate 5–10 SEO-friendly tags.
4. Identify sustainability filters if applicable (plastic-free, compostable, biodegradable, vegan, recycled, eco-friendly, reusable, organic).
5. Ensure the output is clean and production-ready.
6. Return ONLY valid JSON with no explanation.
Predefined Categories:
[
"Personal Care",
"Home & Kitchen",
"Office Supplies",
"Packaging",
"Lifestyle",
"Electronics",
"Health & Wellness",
"Beauty & Cosmetics",
"Stationery",
"Cleaning Supplies",
"Furniture",
"Kitchen Appliances",
"Storage & Organization",
"Outdoor & Garden",
"Pet Supplies",
"Baby Products",
"Fitness & Sports",
"Travel Accessories",
"Automotive",
"Eco-Friendly Products",
"Sustainable Products",
"Industrial Supplies",
"Craft & DIY",
"Gifts & Accessories"
]
Product Information:
Product Name: {${productName}}
Description: {${description}}
Material: {${material}}
Return output in this exact JSON format:
{
  "primary_category": "",
  "sub_category": "",
  "seo_tags": [],
  "sustainability_filters": []
}
`}

export const module2Prompt = (plasticSaved,carbonAvoided,localSourcing)=>{
    return `
    You are helping generate a sustainability impact summary for an eco-commerce platform.

A customer has placed an order for sustainable products. The backend system has already calculated how much plastic was saved and how much carbon emission was avoided compared to conventional alternatives.

Your job is to turn this data into a simple, human-friendly sustainability report that can be shown on the order confirmation page.

Guidelines:
- Use the given numbers for plastic saved and carbon avoided exactly as provided.
- Write a short explanation of the environmental impact in clear, natural language.
- If local sourcing is true, explain that the products were sourced locally, which reduces transportation emissions and supports local producers.
- Keep the message concise and positive.
-Ensure output is clean and production-ready and not empty.
Return ONLY valid JSON in the following format:
{
  "plastic_saved": "",
  "carbon_avoided": "",
  "local_sourcing_impact": "",
  "impact_statement": ""
}
Order Data:
Plastic saved: {${plasticSaved} grams
Carbon avoided: {${carbonAvoided} grams CO2
Local sourcing: {${localSourcing}}
`} 