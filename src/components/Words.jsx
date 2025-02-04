import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pour rediriger

function Words() {
  const [maskedWords, setMaskedWords] = useState([]); // État pour stocker les mots masqués
  const [newWord, setNewWord] = useState(""); // État pour le mot à ajouter

  const handleAddWord = () => {
    if (newWord.trim() && !maskedWords.includes(newWord.trim())) {
      setMaskedWords([...maskedWords, newWord.trim()]);
      setNewWord(""); // Réinitialiser le champ de saisie
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Mots Masqués</h1>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Ajouter un mot à masquer</h2>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Entrez un mot"
          className="w-full p-2 mb-4 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          onClick={handleAddWord}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Ajouter
        </button>

        <h2 className="text-xl font-semibold mt-8">Liste des mots masqués</h2>
        <ul className="list-disc ml-6">
          {maskedWords.length > 0 ? (
            maskedWords.map((word, index) => (
              <li key={index} className="text-sm">{word} (masqué)</li>
            ))
          ) : (
            <p className="text-sm text-gray-400">Aucun mot masqué pour le moment.</p>
          )}
        </ul>
      </div>

      <Link
        to="/security"
        className="mt-4 text-blue-500 hover:underline"
      >
        Retour à la sécurité
      </Link>
    </div>
  );
}

export default Words;
