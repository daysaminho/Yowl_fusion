import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Importation de Link pour la redirection

function Parametres() {
  const settingsSections = [
    { id: 1, title: "Votre compte", description: "Voir les informations du compte, télécharger les données, désactiver votre compte.", path: "/settings/account" },
    { id: 2, title: "Sécurité et accès au compte", description: "Gérer les accès, la vérification en deux étapes, et la gestion des mots de passe.", path: "/security" }, // Redirection vers /security
    { id: 3, title: "Notifications", description: "Gérer vos préférences de notification.", path: "/settings/notifications" },
    { id: 4, title: "Confidentialité et sécurité", description: "Configurer les paramètres de confidentialité.", path: "/settings/privacy" },
    { id: 5, title: "Centre d'aide", description: "Accéder à la documentation d'aide.", path: "/settings/help" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-md">
        {settingsSections.map((section) => (
          <div
            key={section.id}
            className="flex justify-between items-center px-6 py-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
          >
            <Link to={section.path} className="w-full flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="text-sm text-gray-400">{section.description}</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parametres;
