"use client";

import React from "react";
import Button from "@/components/button"; // Bouton personnalisé pour "Retour"
import Header from "@/components/Header";
import SchoolForm from "@/components/Form/SchoolForm";

const AddSchoolPage = () => {
  return (
    <div className="min-h-screen bg-[#EDF9FF]">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className=" w-full max-w-4xl ">
        <SchoolForm />
        </div>
        <div className="mt-8 w-full max-w-xl flex justify-end">
          <Button action="add" label="Ajouter" />
        </div>
     </div>
      
    </div>
  );
};

export default AddSchoolPage;
