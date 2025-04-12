"use client";

import { PageTitle } from "@/components/page-title";
import { RentalItem } from "./components/rental-item";
import { RentalInfo } from "@/domains/types";
import { useEffect, useState } from "react";
import { getRentals } from "@/services/rentals/getRentals";
import { getCustomers } from "@/services/customer/getCustomers";
import { formatDate } from "../utils/format-date";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Rentals() {
  const [rentalsData, setRentalsData] = useState<RentalInfo[]>([]);

  const router = useRouter();

  const rentalsStatus = [
    { value: "PENDENTE", label: "Pendentes" },
    { value: "ATRASO", label: "Atrasadas" },
  ];

  useEffect(() => {
    const fetchRentals = async () => {
      const response = await getRentals();
      console.log(response);
      return response;
    };

    const fetchCustomers = async () => {
      const response = await getCustomers();
      return response;
    };

    const assembleInfos = async () => {
      const rentals = await fetchRentals();
      const customers = await fetchCustomers();

      const data = rentals.map((rental) => ({
        cod: rental.cod,
        customerName: customers.filter(
          (customer) => customer.cpf === rental.cpf_cliente
        )?.[0]?.nome,
        date: formatDate(new Date(rental.data_hora), "pt-br"),
        status: rental.pgto_status,
        cpf: customers.filter(
          (customer) => customer.cpf === rental.cpf_cliente
        )?.[0]?.cpf,
      }));

      setRentalsData(data);
    };

    assembleInfos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageTitle title="Locações" backPath="/home" />
      <div className="flex flex-col w-[80%] items-center align-self-center p-10 min-h-[700px]">
        <Button
          onClick={() => router.push("/rentals/maintenance/new")}
          className="self-end flex text-base font-bold cursor-pointer bg-pink-700 hover:bg-pink-600 mb-5"
        >
          Adicionar
          <Plus strokeWidth={3} />
        </Button>
        <Tabs defaultValue="PENDENTE" className="w-full">
          <TabsList className="h-10 w-full">
            {rentalsStatus.map((status, index) => (
              <TabsTrigger
                className="cursor-pointer"
                key={index}
                value={status.value}
              >
                {status.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {rentalsStatus.map((status, index) => (
            <TabsContent
              key={index}
              className="flex flex-col gap-6"
              value={status.value}
            >
              {rentalsData?.map((rental, index) =>
                rental.status === status.value ? (
                  <RentalItem
                    key={index}
                    rental={rental}
                    onClick={() => {
                      localStorage.setItem("rental", JSON.stringify(rental));
                      router.push(`/rentals/info/${rental.cod}`);
                    }}
                  />
                ) : null
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
