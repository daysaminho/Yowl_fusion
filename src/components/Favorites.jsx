import React from "react";
import { Heart } from "lucide-react"; // Icône de like

function Favorites() {
  const postsLiked = [
    {
      id: 1,
      username: "Alice",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "Premier post aimé !",
    },
    {
      id: 2,
      username: "Bob",
      avatar: "https://i.pravatar.cc/150?img=8",
      content: "Encore un post que j'aime 😎",
    },
    {
      id: 3,
      username: "Charlie",
      avatar: "https://i.pravatar.cc/150?img=10",
      content: "Aimer les bons messages 👏",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Posts aimés</h2>
      {postsLiked.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col"
        >
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={post.avatar}
              alt={post.username}
              className="h-10 w-10 rounded-full"
            />
            <span className="font-bold">{post.username}</span>
          </div>
          <p className="mb-4">{post.content}</p>
          <div className="flex items-center space-x-4">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Aimé</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
 