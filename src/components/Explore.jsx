import React from "react";

function Explore() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tendances</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold text-xl">#Technologie</h3>
        <p className="text-gray-600">1000 tweets</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold text-xl">#Sport</h3>
        <p className="text-gray-600">500 tweets</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold text-xl">#Crypto</h3>
        <p className="text-gray-600">800 tweets</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold text-xl">#Voyage</h3>
        <p className="text-gray-600">200 tweets</p>
      </div>
    </div>
  );
}

export default Explore;
