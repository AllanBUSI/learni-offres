"use client";

import React from "react";
import Header from "@/components/Header";
import TrainerForm from "@/components/Form/TrainerForm";

const AddTrainerPage = () => {
  const handleSubmit = (data: any) => {
    console.log("Données du formateur :", data);
    // Traitement des données ici
  };

  return (
    <div className="min-h-screen bg-[#EDF9FF]">
      <Header />
      <TrainerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTrainerPage;
