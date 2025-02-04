import React from "react";

function Notifications() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-semibold">Alice a aimé votre post</p>
        <p className="text-gray-600">Il y a 5 minutes</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-semibold">Bob a commenté votre tweet</p>
        <p className="text-gray-600">Il y a 15 minutes</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-semibold">Charlie vous suit</p>
        <p className="text-gray-600">Il y a 30 minutes</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-semibold">Vous avez un nouveau message de Dave</p>
        <p className="text-gray-600">Il y a 1 heure</p>
      </div>
    </div>
  );
}

export default Notifications;
