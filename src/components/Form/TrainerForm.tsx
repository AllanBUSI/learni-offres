"use client";

import React, { useState } from "react";
import Button from "../button";

const TrainerForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birthDate: "",
    educationLevel: "",
    skills: "",
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
    onSubmit(formData);

    // Réinitialisation du formulaire
    setFormData({
      lastName: "",
      firstName: "",
      email: "",
      birthDate: "",
      educationLevel: "",
      skills: "",
      file: null,
    });
  };

  return (
    <div className="w-3/5 mx-auto block">
      <div className="flex flex-grow justify-start mt-2 ">
        <Button action="back" label="" />
        <h2 className="text-xl font-bold m-4 text-center text-[#031A3D]">
          AJOUTER UN FORMATEUR
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6  "
      >
        <div className="space-y-4 w-full ">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Nom"
            className="w-3/5 mx-auto block px-3 py-2 border border-gray-300 bg-[#EDF9FF] rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Prénom"
            className="w-3/5 mx-auto block px-3 py-2 border border-gray-300 bg-[#EDF9FF] rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-3/5 mx-auto block px-3 py-2 border border-gray-300 bg-[#EDF9FF] rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-3/5 mx-auto block px-3 py-2 border border-gray-300 bg-[#EDF9FF] rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <input
            type="text"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            placeholder="Niveau d'étude"
            className="w-3/5 mx-auto block px-3 py-2 border border-gray-300 bg-[#EDF9FF] rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Compétences"
            className="w-3/5 mx-auto block px-3 py-2 border border-gray-300 bg-[#EDF9FF] rounded-md focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          ></textarea>
          <label className="w-3/5 mx-auto block bg-gray-200 text-gray-700 py-2 rounded-md text-center cursor-pointer hover:bg-gray-300">
            <span>Importer un fichier</span>
            <input type="file" onChange={handleFileChange} className="hidden " />
          </label>
        </div>
      </form>
      <div className="mt-6 flex justify-end">
        <Button action="add" label="Ajouter" />
      </div>
    </div>
  );
};

export default TrainerForm;
