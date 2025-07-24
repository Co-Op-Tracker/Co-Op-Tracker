import { useState } from "react";

export default function CoOpTrackerHome() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    address: "",
    listingPrice: "",
    soldPrice: "",
    coOpAmount: "",
    closingCosts: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([form, ...posts]);
    setForm({
      address: "",
      listingPrice: "",
      soldPrice: "",
      coOpAmount: "",
      closingCosts: "",
      comments: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Co-Op Tracker</h1>
      <p className="text-center text-gray-600">Track and share real-world co-op commissions and seller-paid closing costs.</p>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <h2 className="text-xl font-bold">Post a Closed Sale</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="address" placeholder="Property Address (optional)" value={form.address} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="listingPrice" placeholder="Listing Price" value={form.listingPrice} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="soldPrice" placeholder="Sold Price" value={form.soldPrice} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="coOpAmount" placeholder="Co-op Paid to Buyer's Agent" value={form.coOpAmount} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="closingCosts" placeholder="Seller-Paid Closing Costs" value={form.closingCosts} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="comments" placeholder="Optional Notes (multiple offers, credits, incentives...)" value={form.comments} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Sale</button>
        </form>
      </div>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No sales posted yet.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow">
              <p className="text-sm text-gray-500">{post.address || "(Address not shared)"}</p>
              <p><strong>Listing Price:</strong> {post.listingPrice}</p>
              <p><strong>Sold Price:</strong> {post.soldPrice}</p>
              <p><strong>Co-op Paid:</strong> {post.coOpAmount}</p>
              <p><strong>Seller-Paid Closing Costs:</strong> {post.closingCosts}</p>
              {post.comments && <p className="italic mt-2">"{post.comments}"</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
