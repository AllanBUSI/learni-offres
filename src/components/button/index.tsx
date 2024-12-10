"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  action: "login" | "logout" | "add" | "add2" | "back"; // Ajouter l'action "back" pour le bouton retour
  label: string; // Texte du bouton
};

const Button: React.FC<ButtonProps> = ({ action, label }) => {
  const router = useRouter();

  // Fonction de redirection en fonction de l'action
  const handleClick = () => {
    if (action === "login") {
      router.push("/ListMission"); // Redirection vers la page ListMission (connexion)
    } else if (action === "logout") {
      router.push("/"); // Redirection vers la page d'accueil (connexion)
    } else if (action === "add") {
      router.push("/add"); // Redirection vers la page d'ajout (ajout de mission, école, etc.)
    } else if (action === "add2") {
      router.push("/add"); // Redirection vers la page d'ajout (ajout de mission, école, etc.)
    } else if (action === "back") {
      router.back(); // Retour à la page précédente
    }
  };

  // Définition des classes et des styles pour chaque type de bouton
  const getButtonStyles = () => {
    switch (action) {
      case "login":
        return "w-full bg-[#003465] text-white py-2 rounded-lg hover:bg-[#0034654b]"; // Style pour se connecter
      case "logout":
        return "px-4 py-2 text-[#003465] hover:text-blue-600"; // Style pour se déconnecter
      case "add":
        return "w-24 bg-[#003465] text-white py-2 rounded-lg hover:bg-[#0034654b]"; // Style pour ajouter
      case "add2":
        return "w-20 bg-[#003465] text-white py-2 rounded-full hover:bg-[#0034654b]"; // Style pour ajouter un plus
      case "back":
        return ""; // Style pour retour
      default:
        return "w-full bg-[#003465] text-white py-2 rounded-lg hover:bg-[#0034654b]"; // Style par défaut
    }
  };

  const getButtonIcon = () => {
    switch (action) {
      case "logout":
        return "🚪"; // Icône pour "Se déconnecter"
      case "add2":
        return "➕"; // Icône pour "Ajouter"
      case "back":
        return "←"; // Icône pour "Retour"
      default:
        return "";
    }
  };

  return (
    <button onClick={handleClick} className={getButtonStyles()}>
      {getButtonIcon()} {label}
    </button>
  );
};

export default Button;



// {/* <div>
// {/* Bouton de connexion */}
// <Button action="login" label="Se connecter" />

// {/* Bouton de déconnexion */}
// <Button action="logout" label="Se déconnecter" />

// {/* Bouton pour ajouter */}
// <Button action="add" label="Ajouter" />
// </div> */}