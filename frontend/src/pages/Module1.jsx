import { useState } from "react";

const Module1 = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    material: "",
  });
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput(null);
    try {
      const response = await fetch("http://localhost:7080/api/module1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setOutput(data);
    } catch {
      setOutput({ error: "Could not connect to server." });
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-8 gap-6">
      <div className="w-full max-w-md border-2 border-black rounded-md p-6 flex flex-col gap-4">
        <h1 className="font-extrabold text-4xl">Module 1</h1>
        <p className="font-semibold text-xl">AI Auto-Category & Tag Generator</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
          <input
            type="text"
            placeholder="Product Name"
            required={true}
            value={formData.productName}
            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            className="border-2 border-black rounded-md px-4 py-2 outline-none focus:bg-amber-50 font-medium"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            required={true}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="border-2 border-black  rounded-md px-4 py-2 outline-none focus:bg-amber-50 font-medium"
          />
          <input
            type="text"
            placeholder="Material"
            required={true}
            value={formData.material}
            onChange={(e) => setFormData({ ...formData, material: e.target.value })}
            className="border-2 border-black rounded-md px-4 py-2 outline-none focus:bg-amber-50 font-medium"
          />
          <button
            type="submit"
            disabled={loading || !formData.productName.trim()}
            className="border-2 border-black rounded-md px-4 py-2 cursor-pointer font-extrabold text-lg hover:bg-amber-50  transition-all duration-300 hover:scale-105 mt-1"
          >
            {loading ? "Generating..." : "Submit"}
          </button>
        </form>
      </div>
     {output && !output.error && (
        <div className="w-full max-w-md border-2 border-black rounded-md p-6 flex flex-col gap-4">
          <h2 className="font-extrabold text-2xl">Output</h2>
          {output.primary_category && (
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Primary Category</span>
              <span className="border-2 border-black rounded-md px-4 py-2 font-semibold text-base">
                {output.primary_category}
              </span>
            </div>
          )}
          {output.sub_category && (
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Sub Category</span>
              <span className="border-2 border-black rounded-md px-4 py-2 font-semibold text-base">
                {output.sub_category}
              </span>
            </div>
          )}
          {output.seo_tags?.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">SEO Tags</span>
              <div className="flex flex-wrap gap-2">
                {output.seo_tags.map((tag, i) => (
                  <span
                    key={i}
                    className="border-2 border-black rounded-md px-3 py-1 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          {output.sustainability_filters?.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Sustainability Filters</span>
              <div className="flex flex-wrap gap-2">
                {output.sustainability_filters.map((filter, i) => (
                  <span
                    key={i}
                    className="border-2 border-black rounded-md px-3 py-1 text-sm font-semibold bg-black text-white"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {output?.error && (
        <div className="w-full max-w-md border-2 border-black rounded-md p-4 text-sm font-semibold text-red-600">
         {output.error}
        </div>
      )}

    </div>
  );
};

export default Module1;