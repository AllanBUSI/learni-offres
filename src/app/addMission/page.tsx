"use client";

import Button from "@/components/button";
import MissionForm from "@/components/Form/MissionForm";
import Header from "@/components/Header";

export default function AddMissionPage() {
  return (
    <div className="min-h-screen bg-[#EDF9FF]">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className=" w-full max-w-4xl ">
        <MissionForm />
        </div>
        <div className="mt-8 w-full max-w-4xl flex flex-grow justify-end">
          <Button action="add" label="Ajouter" />
        </div>
      </div>
    </div>
  );
}
