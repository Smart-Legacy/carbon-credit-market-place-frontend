"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCarbonMarketplace } from "@/context/CarbonMarketplaceContext";

const sampleItems = [
  {
    id: "1",
    title: "Harenna Forest",
    description:
      "Verified mangrove planting project sequestering carbon in coastal wetlands.",
    credits: 1200,
    quantity: 50,
    vintage: 2023,
    location: "Ethiopia / Sothern Sopes of Bale Mountain",
    verification: "VCS",
    imageUrl: "/bg1.png",
  },
  {
    id: "2",
    title: "Gura Ferda Forest",
    description:
      "Smallholder agroforestry project improving soil carbon stocks.",
    credits: 800,
    quantity: 30,
    vintage: 2022,
    location: "Ethiopia /  Near the South Sudanese border",
    verification: "Gold Standard",
    imageUrl: "/bg2.png",
  },
];

const SellerDashboard = () => {
  const { user } = useCarbonMarketplace();
  const router = useRouter();
  const username = user ? user.username : "guest";

  const storageKey = `seller_items_${username}`;

  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    credits: "",
    quantity: "",
    vintage: "",
    location: "",
    verification: "",
    imageUrl: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // const raw = localStorage.getItem(storageKey);
      // if (raw) {
      //   setItems(JSON.parse(raw));
      // } else {
      // seed with sample items for a fresh seller view
      setItems(sampleItems);
      // }
    } catch (err) {
      setItems(sampleItems);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (err) {
      // ignore
    }
  }, [items, storageKey]);

  const resetForm = () =>
    setForm({
      title: "",
      description: "",
      credits: "",
      quantity: "",
      vintage: "",
      location: "",
      verification: "",
      imageUrl: "",
    });

  const handleAdd = (e) => {
    e.preventDefault();
    // validation
    if (!form.title.trim()) return setError("Title is required");
    if (!form.description.trim()) return setError("Description is required");
    if (!form.credits || Number(form.credits) <= 0)
      return setError("Credits must be a positive number");
    if (!form.quantity || Number(form.quantity) <= 0)
      return setError("Quantity must be a positive number");
    if (!form.vintage) return setError("Vintage year is required");
    if (!form.location.trim()) return setError("Location is required");

    const newItem = {
      id: `p_${Date.now()}`,
      title: form.title,
      description: form.description,
      credits: Number(form.credits),
      quantity: Number(form.quantity),
      vintage: form.vintage,
      location: form.location,
      verification: form.verification || "Unverified",
      imageUrl: form.imageUrl || "/image.png",
    };

    setItems((s) => [newItem, ...s]);
    resetForm();
    setShowForm(false);
    setError(null);
  };

  const handleDelete = (id) => {
    setItems((s) => s.filter((i) => i.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Seller Dashboard
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage your listings, view items you have uploaded, and add new
              carbon credit projects.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-700">Signed in as</div>
            <div className="text-sm font-medium text-green-800">{username}</div>
            <button
              onClick={() => setShowForm(true)}
              className="ml-4 inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            >
              + Add Listing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <main className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Your Listings</h2>
              {items.length === 0 ? (
                <div className="text-gray-600">You have no listings yet.</div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex bg-gray-50 rounded-md p-3 items-center"
                    >
                      <div className="w-28 h-20 relative flex-shrink-0 mr-4">
                        <Image
                          src={item.imageUrl || "/image.png"}
                          alt={item.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {item.title}
                            </h3>
                            <div className="text-sm text-gray-600">
                              {item.location} • Vintage {item.vintage} •{" "}
                              {item.verification}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-800 font-semibold">
                              {item.credits} tCO₂
                            </div>
                            <div className="text-sm text-gray-500">
                              Qty: {item.quantity}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          {item.description}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            onClick={() => router.push(`/project/${item.id}`)}
                            className="text-sm text-green-700 hover:underline"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-sm text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 space-y-4">
              <h3 className="font-semibold text-gray-800">
                Seller Requirements
              </h3>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
                <li>Verified account and contact information</li>
                <li>Project documentation and methodology</li>
                <li>Verification standard (VCS/Gold Standard/etc.)</li>
                <li>Vintage year and project location</li>
                <li>Clear per-ton pricing or credits-to-USD info</li>
                <li>Minimum listing quantity and serial numbers</li>
              </ul>
              <div className="pt-2 border-t">
                <h4 className="text-sm font-medium text-gray-800">Tips</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Use high-quality images and include verifiable documents in
                  the project details. Buyers prefer verified projects with
                  clear impact metrics.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Add Listing Modal / Form */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={() => setShowForm(false)}
            />
            <form
              onSubmit={handleAdd}
              className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 z-10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Create New Listing</h3>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>

              {error && (
                <div className="text-sm text-red-600 mb-3">{error}</div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Title*
                  </label>
                  <input
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Location*
                  </label>
                  <input
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Credits (tCO₂)*
                  </label>
                  <input
                    type="number"
                    value={form.credits}
                    onChange={(e) =>
                      setForm({ ...form, credits: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Quantity*
                  </label>
                  <input
                    type="number"
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Vintage*
                  </label>
                  <input
                    type="number"
                    min="1900"
                    max="2100"
                    value={form.vintage}
                    onChange={(e) =>
                      setForm({ ...form, vintage: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Verification
                  </label>
                  <select
                    value={form.verification}
                    onChange={(e) =>
                      setForm({ ...form, verification: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                  >
                    <option value="">Unverified</option>
                    <option value="VCS">VCS</option>
                    <option value="Gold Standard">Gold Standard</option>
                    <option value="CAR">CAR</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    value={form.imageUrl}
                    onChange={(e) =>
                      setForm({ ...form, imageUrl: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                    placeholder="/path/to/image.png"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Description*
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="mt-1 block w-full border rounded px-3 py-2"
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                    setError(null);
                  }}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded"
                >
                  Create Listing
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
