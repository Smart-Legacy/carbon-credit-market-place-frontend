import React, { useState } from "react";

const PurchaseCarbon = ({ carbonPrice, providerName }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value, 10);
    setQuantity(qty);
    setTotalPrice(qty * carbonPrice);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Select Credits
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            How many metric tonnes of carbon dioxide equivalent (tCO2e) do you
            want?
          </p>
          <div className="mt-2 text-gray-500">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              * Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mt-4 text-gray-500">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="provider"
            >
              * Vintage and Provider
            </label>
            <input
              type="text"
              id="provider"
              value={providerName}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Select vintage and provider"
            />
          </div>
          <div className="mt-4">
            <div className="text-lg font-bold text-black">Total Price</div>
            <div className="text-lg font-bold text-indigo-500">
              USD {totalPrice}
            </div>
            <div className="text-sm text-gray-500">USD {carbonPrice}/tCO2e</div>
          </div>
          <div className="mt-6 flex justify-between">
            <button
              className="bg-blue-500 w-1/3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
            <button
              className="bg-white w-1/3 hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCarbon;
