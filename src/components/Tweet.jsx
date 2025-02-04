import React, { useState } from "react";

function Tweet() {
  const [content, setContent] = useState("");

  const handleTweet = () => {
    if (content) {
      alert(`Tweet envoyé: ${content}`);
      setContent("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Quoi de neuf ?"
      />
      <button
        onClick={handleTweet}
        className="mt-2 bg-blue-600 text-white p-2 rounded"
      >
        Tweeter
      </button>
    </div>
  );
}

export default Tweet;
