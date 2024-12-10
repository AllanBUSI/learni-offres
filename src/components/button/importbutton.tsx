"use client";

import React from "react";

type ImportButtonProps = {
  onFileSelect: (file: File | null, type: "photo" | "syllabus" | "logo") => void;
};

const ImportButton: React.FC<ImportButtonProps> = ({ onFileSelect }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileType = file.type;

      // Déterminer le type de fichier en fonction de son extension ou MIME type
      let type: "photo" | "syllabus" | "logo" = "photo"; // Par défaut
      if (fileType.includes("pdf")) {
        type = "syllabus";
      } else if (fileType.includes("image")) {
        type = "photo";
      } else if (fileType.includes("png") || fileType.includes("jpeg")) {
        type = "logo";
      }

      // Retourner le fichier et son type
      onFileSelect(file, type);
    }
  };

  return (
    <div>
      {/* Bouton pour importer */}
      <label className="cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Importer un fichier
        <input
          type="file"
          accept=".pdf, image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImportButton;
