import React from "react";

function Messages() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Messages privés</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Alice"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-bold">Alice</span>
        </div>
        <p className="text-gray-600">Salut, comment vas-tu ?</p>
        <p className="text-sm text-gray-400">Il y a 10 minutes</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="Bob"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-bold">Bob</span>
        </div>
        <p className="text-gray-600">Je voulais te parler d'un projet</p>
        <p className="text-sm text-gray-400">Il y a 30 minutes</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <img
            src="https://i.pravatar.cc/150?img=10"
            alt="Charlie"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-bold">Charlie</span>
        </div>
        <p className="text-gray-600">Ça te dit de faire une réunion demain ?</p>
        <p className="text-sm text-gray-400">Il y a 1 heure</p>
      </div>
    </div>
  );
}

export default Messages;
