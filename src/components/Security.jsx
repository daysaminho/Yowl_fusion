import React from "react";
import { ChevronRight } from "lucide-react"; // Icône pour les flèches (ou navigation)
import { useNavigate } from "react-router-dom"; // Importation de useNavigate pour la redirection

function Security() {
  const navigate = useNavigate(); // Initialisation du hook de navigation

  const securitySections = [
    { id: 1, title: "Gérer les applications connectées", description: "Voir et gérer les applications qui ont accès à votre compte.", path: "/security/apps" },
    { id: 2, title: "Gérer les mots de passe", description: "Mettre à jour ou réinitialiser votre mot de passe.", path: "/security/password" },
    { id: 3, title: "Surveiller l'activité de connexion", description: "Vérifier l'historique des connexions à votre compte.", path: "/security/activity" },
    { id: 4, title: "Vérification en deux étapes", description: "Activer ou désactiver la vérification en deux étapes pour plus de sécurité.", path: "/security/2fa" },
    { id: 5, title: "Revoir les alertes de sécurité", description: "Consulter les alertes de sécurité récentes liées à votre compte.", path: "/security/alerts" },
    { id: 6, title: "Gérer les mots masqués", description: "Ajouter et gérer des mots à masquer dans vos conversations.", path: "/security/words" },
    { id: 7, title: "Consulter les comptes masqués", description: "Voir les comptes que vous avez masqués.", path: "/security/blocked" }, // Nouvel onglet ajouté
  ];

  // Fonction pour gérer la redirection au clic sur une section
  const handleSectionClick = (path) => {
    navigate(path); // Redirige vers le chemin spécifié
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Sécurité et accès au compte</h1>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-md">
        {securitySections.map((section) => (
          <div
            key={section.id}
            className="flex justify-between items-center px-6 py-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleSectionClick(section.path)} // Appel de la fonction handleSectionClick
          >
            <div>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="text-sm text-gray-400">{section.description}</p>
            </div>
            <ChevronRight className="h-6 w-6 text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Security;
