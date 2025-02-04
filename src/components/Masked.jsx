import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pour la redirection

function Masked() {
  const [maskedAccounts, setMaskedAccounts] = useState([]); // Liste des comptes masqués
  const [accountToMask, setAccountToMask] = useState(""); // Compte à ajouter à la liste des masqués

  // Fonction pour ajouter un compte à la liste des masqués
  const handleAddAccount = () => {
    if (accountToMask.trim() && !maskedAccounts.includes(accountToMask.trim())) {
      setMaskedAccounts([...maskedAccounts, accountToMask.trim()]);
      setAccountToMask(""); // Réinitialiser le champ de saisie
    }
  };

  // Fonction pour supprimer un compte de la liste des masqués
  const handleRemoveAccount = (account) => {
    setMaskedAccounts(maskedAccounts.filter((item) => item !== account));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Comptes Masqués</h1>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Ajouter un compte à masquer</h2>
        <input
          type="text"
          value={accountToMask}
          onChange={(e) => setAccountToMask(e.target.value)}
          placeholder="Nom d'utilisateur"
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <button
          onClick={handleAddAccount}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Ajouter
        </button>

        <h2 className="text-xl font-semibold mt-8">Liste des comptes masqués</h2>
        <ul className="list-disc ml-6">
          {maskedAccounts.length > 0 ? (
            maskedAccounts.map((account, index) => (
              <li key={index} className="text-sm flex justify-between items-center">
                {account}
                <button
                  onClick={() => handleRemoveAccount(account)}
                  className="bg-red-500 text-white py-1 px-2 rounded ml-4"
                >
                  Supprimer
                </button>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-400">Aucun compte masqué pour le moment.</p>
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

export default Masked;
