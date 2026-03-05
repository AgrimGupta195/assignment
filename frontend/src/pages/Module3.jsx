import { useState } from "react";

const Module3 = () => {
  const [orderId, setOrderId] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput(null);
    try {
      const response = await fetch("http://localhost:7080/api/module3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      });
      const data = await response.json();
      setOutput(data);
    } catch {
      setOutput({ error: "Could not connect to server." });
    }
    setLoading(false);
  };
  const stats = output && !output.error ? [
    { label: "Plastic Saved",    value: output.plastic_saved },
    { label: "Carbon Avoided",   value: output.carbon_avoided },
  ] : [];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-8 gap-6">
      <div className="w-full max-w-md border-2 border-black rounded-md p-6 flex flex-col gap-4">
        <h1 className="font-extrabold text-4xl">Module 3</h1>
        <p className="font-semibold text-xl">AI Impact Reporting Generator</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
          <input
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required={true}
            className="border-2 border-black rounded-md px-4 py-2 outline-none focus:bg-amber-50 font-medium"
          />
          <button
            type="submit"
            disabled={loading || !orderId.trim()}
            className="border-2 border-black rounded-md px-4 py-2 font-extrabold text-lg hover:bg-amber-50 cursor-pointer  transition-all duration-300 hover:scale-105 mt-1"
          >
            {loading ? "Generating..." : "Submit"}
          </button>
        </form>
      </div>
      {output && !output.error && (
        <div className="w-full max-w-md border-2 border-black rounded-md p-6 flex flex-col gap-4">
          <h2 className="font-extrabold text-2xl">Impact Report</h2>
          <div className="flex gap-3 bg-amber-50">
            {stats.map(({ label, value }) => (
              <div key={label} className="flex-1 border-2 border-black rounded-md p-3 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</span>
                <span className="font-extrabold text-lg">{value}</span>
              </div>
            ))}
          </div>
          {output.local_sourcing_impact && (
            <div className="flex flex-col gap-1 ">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Local Sourcing</span>
              <p className="border-2 border-black bg-amber-50 rounded-md px-4 py-3 font-medium text-sm leading-relaxed">
                {output.local_sourcing_impact}
              </p>
            </div>
          )}
          {output.impact_statement && (
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Impact Statement</span>
              <p className="border-2 border-black rounded-md px-4 py-3 font-medium text-sm leading-relaxed bg-amber-50 text-black">
                {output.impact_statement}
              </p>
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

export default Module3;