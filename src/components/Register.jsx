import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">S'inscrire</h2>
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
        S'inscrire
      </button>
      <div className="mt-4 text-center">
        Déjà inscrit ? <Link to="/login" className="text-blue-600">Se connecter</Link>
      </div>
    </div>
  );
}

export default Register;
