"use client";

import { PageTitle } from "@/components/page-title";
import { RentalItem } from "./components/rental-item";
import { RentalInfo } from "@/domains/types";
import { useEffect, useState } from "react";
import { getRentals } from "@/services/rentals/getRentals";
import { getCustomers } from "@/services/customer/getCustomers";
import { formatDate } from "../utils/format-date";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Rentals() {
  const [rentalsData, setRentalsData] = useState<RentalInfo[]>([]);

  const rentalsStatus = [
    { value: "PENDENTE", label: "Pendentes" },
    { value: "ATRASO", label: "Atrasadas" },
    { value: "PAGO", label: "Pagas" },
  ];

  useEffect(() => {
    const fetchRentals = async () => {
      const response = await getRentals();
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
        customerName: customers.filter(
          (customer) => customer.cpf === rental.cpf_cliente
        )?.[0]?.nome,
        date: formatDate(new Date(rental.data_hora), "pt-br"),
        status: rental.pgto_status,
      }));

      console.log(data);

      setRentalsData(data);
    };

    assembleInfos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageTitle title="Locações" backPath="/home" />
      <div className="flex flex-col w-[800px] items-center align-self-center p-10 min-h-[700px]">
        <Tabs defaultValue="PENDENTE" className="w-full">
          <TabsList className="h-15 w-full">
            {rentalsStatus.map((status, index) => (
              <TabsTrigger key={index} value={status.value}>
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
                  <RentalItem key={index} rental={rental} />
                ) : null
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
