"use client";

import { RentalForm } from "./components/rental-form";
import { ToysTable } from "./components/toys-table";
import { useCallback, useEffect, useState } from "react";
import { SelectedToy } from "@/domains/types";

export default function NewRental() {
  const [selectedToys, setSelectedToys] = useState<SelectedToy[]>([]);

  const addToy = useCallback(
    (newToy: SelectedToy) => {
      setSelectedToys((previous) => [...previous, newToy]);
    },
    [setSelectedToys]
  );

  const removeToy = useCallback((toyId: string) => {
    setSelectedToys((previousToys) =>
      previousToys.filter((toy) => toy.cod_brinquedo !== toyId)
    );
  }, []);

  const resetToys = useCallback(() => {
    setSelectedToys([]);
  }, []);

  useEffect(() => {
    console.log(selectedToys);
  }, [selectedToys]);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl font-bold self-start p-4">Nova locação</h1>
      <div className="flex flex-col w-full items-center border-2 border-t-cyan-600 border-b-cyan-600 align-self-center gap-6 p-20 min-h-[700px] bg-cyan-200">
        <RentalForm selectedToys={selectedToys} resetToys={resetToys} />
        <ToysTable
          selectedToys={selectedToys}
          addToy={addToy}
          removeToy={removeToy}
        />
      </div>
    </div>
  );
}
