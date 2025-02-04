import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        className="w-full p-2 border border-gray-300 rounded mt-4"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="w-full p-2 border border-gray-300 rounded mt-4"
      />
      <button className="mt-4 bg-blue-600 text-white p-2 rounded w-full">
        Se connecter
      </button>
      <div className="mt-4 text-center">
        Pas encore inscrit ? <Link to="/register" className="text-blue-600">S'inscrire</Link>
      </div>
    </div>
  );
}

export default Login;
