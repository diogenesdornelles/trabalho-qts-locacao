"use client";

import { PageTitle } from "@/components/page-title";
import { RentalForm, RentalFormData } from "../../components/rental-form";
import { ToysTable } from "../../components/toys-table";
import { useEffect, useState } from "react";
import { RentalInfo, SelectedToy } from "@/domains/types";
import { getRentedToys } from "@/services/rentedToy/getRentedToys";
import { useParams } from "next/navigation";

const RentalDetails = () => {
  const [rental, setRental] = useState<RentalFormData>();
  const [toys, setToys] = useState<SelectedToy[]>([]);

  const { rentalId } = useParams();

  useEffect(() => {
    const fetchRentedToys = async () => {
      const rentedToys = await getRentedToys();
      const filteredToys = rentedToys?.filter(
        (t) => t.cod_locacao === rentalId
      );

      console.log(rentedToys);
      if (filteredToys) {
        setToys(
          filteredToys.map((t) => ({
            cod_brinquedo: t.cod_brinquedo,
            nome: t.nome,
            valor_locacao: t.valor_unitario,
          }))
        );
      }
    };

    fetchRentedToys();
  }, [rentalId]);

  useEffect(() => {
    const storedRental: RentalInfo = JSON.parse(
      localStorage.getItem("rental")!
    );

    const [day, month, year] = storedRental.date.split("/");

    const map = {
      data_locacao: `${year}-${month}-${day}`,
      cpf_cliente: storedRental.cpf,
      nome_cliente: storedRental.customerName,
    };

    setRental(map);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageTitle title="Locações" backPath="/rentals" />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <RentalForm
          selectedToys={toys}
          resetToys={() => []}
          defaultValues={rental}
        />
        <ToysTable
          selectedToys={toys}
          addToy={() => {}}
          removeToy={() => {}}
          allowUpdates={false}
        />
      </div>
    </div>
  );
};

export default RentalDetails;
