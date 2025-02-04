import React, { useState } from "react";

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex items-center">
        <div className="font-semibold">{post.username}</div>
      </div>
      <div className="mt-2">{post.content}</div>
      <div className="mt-2 flex justify-between items-center">
        <button onClick={handleLike} className="text-blue-500">
          Like ({likes})
        </button>
        <div>Comments: {post.comments}</div>
      </div>
    </div>
  );
}

export default Post;
