"use client";

import { useCallback, useEffect, useState } from "react";
import { SelectedToy } from "@/domains/types";
import { PageTitle } from "@/components/page-title";
import { RentalForm } from "../../components/rental-form";
import { ToysTable } from "../../components/toys-table";
import { useAuth } from "@/app/contexts/authContext";
import { useRouter } from "next/navigation";

export default function RentalMaintenance() {
  const [selectedToys, setSelectedToys] = useState<SelectedToy[]>([]);

  const { user } = useAuth();

  const router = useRouter();

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
    const isRentalAgent = user?.funcao === "AGENTE_LOCACAO";

    if (!isRentalAgent && user) router.back();
  }, [router, user, user?.funcao]);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Nova locação" backPath="/rentals" />
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
