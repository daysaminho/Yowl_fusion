import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importation des composants
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import Register from "./components/Register";
import Parametres from "./components/Parametres"; // Nouveau composant pour les paramètres
import Security from "./components/Security"; // Page de sécurité
import Masked from "./components/Masked"; // Page des comptes masqués

import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "alice",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "Hello EKO! Premier tweet sur cette plateforme. 🚀",
    },
    {
      id: 2,
      username: "bob",
      avatar: "https://i.pravatar.cc/150?img=8",
      content: "C'est parti pour tester ce nouveau réseau social 😎🔥",
    },
  ]);

  const [user, setUser] = useState({
    username: "john_doe",
    avatar: "https://i.pravatar.cc/150?img=10",
    banner: "https://i.imgur.com/MzjAtfX.jpg",
    bio: "Développeur & passionné de tech 💻",
    following: 100,
    followers: 200,
  });

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      username: user.username,
      avatar: user.avatar,
      content,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home posts={posts} addPost={addPost} />} />
        <Route path="/profile" element={<Profile user={user} posts={posts} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Parametres />} />
        <Route path="/security" element={<Security />} />
        <Route path="/security/blocked" element={<Masked />} /> {/* Route pour les comptes masqués */}
      </Routes>
    </Router>
  );
}

export default App;
