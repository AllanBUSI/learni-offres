"use client";

import React, { useState } from "react";
import Button from "@/components/button"; // Ton bouton personnalisé

const AddShcoolForm = () => {
  const [formData, setFormData] = useState({
    school: "",
    moduleName: "",
    duration: "",
    skills: "",
    dateTime: "",
    isRemote: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    // Reset form
    setFormData({
      school: "",
      moduleName: "",
      duration: "",
      skills: "",
      dateTime: "",
      isRemote: false,
    });
  };

  const [isRemote, setIsRemote] = useState(false);

  const handleToggle = () => {
    setIsRemote(!isRemote);
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
        className="bg-white shadow-md rounded-lg p-6 mx-auto flex flex-col items-center border border-[#031A3D] "
      >
        <div className="w-1/3 max-w-md space-y-2">
          {/* École */}
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="École"
            className="w-80 px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />
          <button
            type="button"
            className="w-80 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
          >
            Importer le logo de l'école
          </button>

          {/* Nom du module */}
          <input
            type="text"
            name="moduleName"
            value={formData.moduleName}
            onChange={handleChange}
            placeholder="Nom du module"
            className="w-80 px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />

          {/* Durée */}
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Durée du module"
            className="w-80 px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            required
          />

          {/* Compétences */}
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Compétences"
            className="w-80 px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            rows={3}
            required
          ></textarea>

          {/* Date / Heure */}
          <div className="flex items-center space-x-4 w-80">
            <input
              type="text"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              placeholder="Date / Heure"
              className="w-full px-3 py-2 border bg-[#EDF9FF] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#031A3D] text-[#031a3d]"
            />
            <Button action="add2" label="" />
          </div>

          {/* Distanciel */}

          <div className="mb-4">
            <label className="text-gray-700 mr-4">Distanciel</label>
            <button
              onClick={handleToggle}
              className={`px-4 py-1 rounded-full ${
                isRemote
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {isRemote ? "Oui" : "Non"}
            </button>
          </div>

          {/* Bouton Importer */}
          <button
            type="button"
            className="w-80  bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 "
          >
            Importer le syllabus
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShcoolForm;
