import React, { useState } from "react";
import { Heart, PlusCircle, X, MoreHorizontal } from "lucide-react"; // Ajout de l'icône MoreHorizontal pour les trois points

function Home() {
  // Exemples de posts affichés par défaut
  const defaultPosts = [
    {
      id: 1,
      username: "Tech Corp",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Nous recrutons un développeur React ! 🚀 Envoyez-nous votre CV. #Emploi #Tech",
    },
    {
      id: 2,
      username: "Startup Innovante",
      avatar: "https://i.pravatar.cc/150?img=2",
      content: "L'intelligence artificielle transforme nos métiers. Quel est votre avis sur l'avenir de l'IA ? 🤖",
    },
    {
      id: 3,
      username: "Jane Doe",
      avatar: "https://i.pravatar.cc/150?img=4",
      content: "Voici mon dernier projet en design UX/UI ! 🎨 Feedbacks bienvenus. #Design #UX",
    },
  ];

  // État des posts et du pop-up
  const [posts, setPosts] = useState(defaultPosts);
  const [newPostContent, setNewPostContent] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Gestion de l'affichage du menu
  const [menuVisible, setMenuVisible] = useState(null); // Gérer l'état du menu pour chaque post

  // Fonction pour ajouter un nouveau post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        username: "JohnDoe",
        avatar: "https://i.pravatar.cc/150?img=11",
        content: newPostContent,
      };
      setPosts([newPost, ...posts]);
      setNewPostContent(""); // Réinitialiser le champ de saisie
      setShowModal(false); // Fermer le pop-up
    }
  };

  // Fonction pour gérer le like/unlike
  const toggleLike = (postId) => {
    setLikedPosts((prevLikedPosts) =>
      prevLikedPosts.includes(postId)
        ? prevLikedPosts.filter((id) => id !== postId)
        : [...prevLikedPosts, postId]
    );
  };

  // Fonction pour afficher/masquer le menu du post
  const toggleMenu = (postId) => {
    setMenuVisible(menuVisible === postId ? null : postId); // Alterner la visibilité du menu
  };

  return (
    <div className="flex p-4 relative">
      {/* Contenu principal (posts) */}
      <div className="w-full"> {/* Changer de w-2/3 à w-full pour occuper toute la largeur */}
        {/* Affichage des posts */}
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col relative">
            <div className="flex items-center space-x-2 mb-2">
              <img src={post.avatar} alt={post.username} className="h-10 w-10 rounded-full" />
              <span className="font-bold">{post.username}</span>
              {/* Icône des trois points pour ouvrir le menu déroulant */}
              <button
                onClick={() => toggleMenu(post.id)}
                className="ml-auto text-gray-600 hover:text-gray-800"
              >
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center space-x-2 ${likedPosts.includes(post.id) ? "text-red-500" : "text-gray-600"}`}
              >
                <Heart className="h-5 w-5" />
                <span>{likedPosts.includes(post.id) ? "Retirer le like" : "Aimer"}</span>
              </button>
            </div>

            {/* Menu déroulant */}
            {menuVisible === post.id && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-200 z-10">
                <ul className="p-2 space-y-2">
                  <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Ne pas intéresser</li>
                  <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Bloquer la personne</li>
                  <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Masquer la personne</li>
                  <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Signaler ce post</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bouton flottant pour ouvrir le pop-up */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 z-10"
      >
        <PlusCircle className="h-6 w-6" />
        <span>Poster</span>
      </button>

      {/* Pop-up pour la publication */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-2 right-2" onClick={() => setShowModal(false)}>
              <X className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="text-xl font-bold mb-4">Créer un post</h2>
            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Quoi de neuf ?"
              className="w-full p-2 border rounded-lg mb-4"
              rows="3"
            />
            <button
              onClick={handlePostSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
            >
              Publier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
