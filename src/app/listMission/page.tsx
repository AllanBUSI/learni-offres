"use client";

import React from "react";
import Header from "@/components/Header";
import DetailCard from "@/components/Card/DetailCard";

const ListMissionPage = () => {
  const missions = [
    {
      logoSrc: "/image/",  // Exemple de chemin vers l'image
      technologies: ["API REST", "GraphQL", "ORM"],
      poste: "Développeur Web Full Stack",
      heuresFormation: 250,
      adresse: "123 Rue de l'École, Paris, France",
    },
    // Ajouter d'autres missions ici si nécessaire
  ];

  return (
    <div className="min-h-screen bg-[#EDF9FF]">
        <Header />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6  ">
      {missions.map((mission, index) => (
        <DetailCard
          key={index}
          logoSrc={mission.logoSrc}
          technologies={mission.technologies}
          poste={mission.poste}
          heuresFormation={mission.heuresFormation}
          adresse={mission.adresse}
        />
      ))}
    </div>
    </div>
  );
};

export default ListMissionPage;

