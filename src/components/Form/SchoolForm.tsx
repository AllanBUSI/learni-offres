"use client";

import React, { useState } from "react";
import Button from "../button";

const SchoolForm = () => {
  const [formData, setFormData] = useState({
    school: "",
    address: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    // Réinitialisation du formulaire
    setFormData({
      school: "",
      address: "",
      file: null,
    });
  };

  return (
    <div>
      <div className="flex flex-grow justify-start mt-2 ">
        <Button action="back" label="" />
        <h2 className="text-xl font-bold m-4 text-center text-[#031A3D]">
          AJOUTER UNE NOUVELLE MISSION
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-20 mt-6 w-2/3 mx-auto flex flex-col items-center border border-[#031A3D]"
      >
        <div className="space-y-8">
          {/* Nom de l'école */}
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Nom de l'école"
            className="w-full px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />

          {/* Adresse */}
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Adresse"
            className="w-full px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <div className="flex justify-center ">
            {/* Bouton pour importer un fichier */}
            <label className="w-2/3 bg-gray-200 text-gray-700 py-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-300 mt-10">
              <span>Importer un fichier</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SchoolForm;
