"use client";

import { useRouter } from "next/navigation";
import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push("/ListMission"); // Redirection après connexion réussie
  };

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
};

export default LoginPage;

// maintenant j'ai une autre question, j'ai dans ma page ListMission, la liste des missions en cours, 
// les cartes de ces missions ont juste le logo de l'école, les techno demandées (2 ou 3 en exemple),
//  le poste recherché, le nombre d'heures a effectuer et l'adresse de l'école. j'ai creer une page mission/[id]/page.tsx, 
//  cette page est la redirection de la carte quand elle est cliqué mais la il y a plus d'information dans cette page, 
//  il a dans cette page de la carte cliqué (mission/[id]/page.tsx) la meme dite carte (en haut a gauche), 
// une carte map de l'endroit ou se trouve l'école de formation ( en haut a droite), puis en dessous 3 