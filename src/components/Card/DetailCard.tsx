"use client";

import React from "react";

type CardProps = {
  logoSrc: string;
  technologies: string[];
  poste: string;
  heuresFormation: number;
  adresse: string;
};

const DetailCard: React.FC<CardProps> = ({
  logoSrc,
  technologies,
  poste,
  heuresFormation,
  adresse,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto border border-gray-200">
  {/* Logo */}
  <div className="flex justify-center mb-2">
    <img src="/image/mydigitalshcool.png" alt="Logo de l'école" className="w-20 h-20" />
  </div>

  {/* Technologies */}
  <div className="flex flex-wrap justify-center mb-6">
    {technologies.map((tech, index) => (
      <span
        key={index}
        className=" text-[#031a3d] text-base font-semibold px-2 py-1"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Poste recherché */}
  <div className="flex items-center mb-4">
    <span className="text-xl mr-2">🎓</span>
    <p className="text-gray-700">{poste}</p>
  </div>

  {/* Nombre d'heures */}
  <div className="flex items-center mb-4">
    <span className="text-xl mr-2">⏰</span>
    <p className="text-gray-700">{heuresFormation} heures</p>
  </div>

  {/* Adresse */}
  <div className="flex items-center">
    <span className="text-xl mr-2">📍</span>
    <p className="text-gray-700">{adresse}</p>
  </div>
</div>

  );
};

export default DetailCard;
