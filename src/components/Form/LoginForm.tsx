"use client";

import React, { useState } from "react";
import Button from "../button";

interface LoginFormProps {
  onLoginSuccess: () => void; // Ajout du typage de la prop
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    // Simuler une connexion réussie
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-200">
      {/* Logo et Titre */}
      <div className="absolute top-10 flex flex-col items-center">
        <img
          src="/image/logo_etudiant.png" // Vérifie que le chemin vers le logo est correct
          alt="Learni Logo"
          className="w-16 h-16 mb-2"
        />
        <h1 className="text-white text-2xl font-bold">LEARNI FORMATION</h1>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#5882c149] shadow-lg rounded-lg px-8 py-10 w-full max-w-sm"
      >
        {/* Champ Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
          />
        </div>

        {/* Champ Mot de Passe */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
          />
        </div>

        {/* Lien Mot de Passe Oublié */}
        <div className="mb-4 text-left">
          <a href="#" className="text-sm text-white hover:underline">
            Mot de passe oublié ?
          </a>
        </div>

        {/* Bouton Se Connecter */}
        <Button action="login" label="Se connecter" />
      </form>
    </div>
  );
};

export default LoginForm;
