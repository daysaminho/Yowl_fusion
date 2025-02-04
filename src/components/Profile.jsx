import React, { useState } from "react";

function Profile() {
  // Initialisation de l'état de l'utilisateur avec des valeurs par défaut
  const [user, setUser] = useState({
    username: "JohnDoe",
    bio: "Développeur passionné, amateur de technologies.",
    avatar: "https://i.pravatar.cc/150?img=10",
    banner: "https://placekitten.com/800/300",
  });

  // État pour gérer l'ouverture du formulaire de modification
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    bio: user.bio,
    avatar: user.avatar,
    banner: user.banner,
  });

  // Fonction pour gérer la modification des données
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData); // Mettre à jour l'utilisateur avec les nouvelles données
    setIsEditing(false); // Fermer le formulaire de modification
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Section bannière */}
      <div
        className="w-full h-40 bg-cover bg-center rounded-t-lg"
        style={{
          backgroundImage: `url(${user.banner})`,
          backgroundSize: "cover", // Assure que l'image couvre bien la section
          backgroundPosition: "center center", // Positionne l'image de manière centrale
        }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white py-1 px-4 rounded-lg"
          >
            Modifier
          </button>
        </div>
      </div>

      {/* Section photo de profil */}
      <div className="flex justify-center -mt-12 mb-4">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-white"
        />
      </div>

      {/* Affichage des informations */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{user.username}</h2>
        <p className="text-gray-500 mt-2">{user.bio}</p>
      </div>

      {/* Formulaire de modification */}
      {isEditing && (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-4">Modifier le profil</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Photo de profil URL</label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">URL de la bannière</label>
              <input
                type="text"
                name="banner"
                value={formData.banner}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg"
              >
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
