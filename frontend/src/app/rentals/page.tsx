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
import { Plus, DollarSign } from "lucide-react";
import { useAuth } from "../contexts/authContext";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PaymentForm } from "./components/payment-form";

export default function Rentals() {
  const [rentalsData, setRentalsData] = useState<RentalInfo[]>([]);

  const { user } = useAuth();

  const router = useRouter();

  const isRentalAgent = user?.funcao === "AGENTE_LOCACAO";
  const isCashier = user?.funcao === "CAIXA";

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
      <div className="flex flex-col w-[65%] items-center align-self-center p-10 min-h-[700px]">
        {isRentalAgent && (
          <Button
            onClick={() => router.push("/rentals/maintenance/new")}
            className="self-end flex text-base font-bold cursor-pointer bg-pink-700 hover:bg-pink-600 mb-5"
          >
            Adicionar
            <Plus strokeWidth={3} />
          </Button>
        )}
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
              className="flex flex-col gap-3"
              value={status.value}
            >
              {rentalsData?.map((rental, index) =>
                rental.status === status.value ? (
                  <div key={index} className="flex items-center">
                    <RentalItem
                      rental={rental}
                      onClick={() => {
                        localStorage.setItem("rental", JSON.stringify(rental));
                        router.push(`/rentals/info/${rental.cod}`);
                      }}
                    />
                    {isCashier && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            onClick={() =>
                              localStorage.setItem(
                                "rental",
                                JSON.stringify(rental)
                              )
                            }
                            className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-green-500 rounded-[6px]"
                            type="button"
                          >
                            <DollarSign strokeWidth={2.4} color="white" />
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogTitle>Realizar pagamento</DialogTitle>
                          <PaymentForm />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                ) : null
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
