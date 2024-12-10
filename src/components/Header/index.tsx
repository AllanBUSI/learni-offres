"use client"


import Link from 'next/link';
import Button from '../button';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 p2-4 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/image/logo_etudiant.png" alt="Logo" className="w-8 h-auto" />
        <h1 className="ml-2 text-2xl font-bold text-[#003465]">LEARNI FORMATION</h1>
      </div>

      {/* Liens de navigation */}
      <nav className="flex-1">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/listMission" className="text-[#003465] hover:text-blue-600">
              Missions
            </Link>
          </li>
          <li>
            <Link href="/addTrainer" className="text-[#003465] hover:text-blue-600">
              Ajouter un formateur
            </Link>
          </li>
          <li>
            <Link href="/addMission" className="text-[#003465] hover:text-blue-600">
              Ajouter une mission
            </Link>
          </li>
          <li>
            <Link href="/addSchool" className="text-[#003465] hover:text-blue-600">
              Ajouter une école
            </Link>
          </li>
          <li>
            <Link href="/myMissions" className="text-[#003465] hover:text-blue-600">
              Mes missions
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bouton Se Déconnecter */}
      <Button action="logout" label="Se déconnecter" />
    </header>
  );
}
