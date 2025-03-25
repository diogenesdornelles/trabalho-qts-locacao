"use client";

import Image from "next/image";

import { RentalForm } from "./components/rental-form";
import { ToysTable } from "./components/toys-table";
import { useCallback, useEffect, useState } from "react";
import { SelectedToy } from "@/domains/types";
import { useAuth } from "../contexts/authContext";

export default function NewRental() {
  const [selectedToys, setSelectedToys] = useState<SelectedToy[]>([]);

  const { user } = useAuth();

  const addToy = useCallback(
    (newToy: SelectedToy) => {
      setSelectedToys((previous) => [...previous, newToy]);
    },
    [setSelectedToys]
  );

  const removeToy = useCallback(
    (toyId: string) => {
      const newToys = selectedToys.filter((toy) => toy.cod_brinquedo !== toyId);
      setSelectedToys(newToys);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    console.log(selectedToys);
  }, [selectedToys]);

  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen">
      <div className="p-4 flex justify-between w-full">
        <Image src="/logo.png" alt="logo" width={70} height={47} />

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800">{user?.nome}</p>
          <div className="w-10 h-10 bg-gray-400 rounded-full" />
        </div>
      </div>

      <h1 className="text-2xl font-bold self-start p-4">Nova locação</h1>

      <div className="flex flex-col w-full items-center align-self-center gap-6 p-20 min-h-[700px] bg-cyan-200">
        <RentalForm />
        <ToysTable
          selectedToys={selectedToys}
          addToy={addToy}
          removeToy={removeToy}
        />
      </div>
    </div>
  );
}
