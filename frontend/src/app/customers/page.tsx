"use client";

import { PageTitle } from "@/components/page-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cliente } from "@/domains/types";
import { useEffect, useState } from "react";
import { Pen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getCustomers } from "@/services/customer/getCustomers";
import { formatDate } from "../utils/format-date";
import { useAuth } from "../contexts/authContext";

export default function Customers() {
  const [customers, setCustomers] = useState<Cliente[]>([]);

  const router = useRouter();
  const { user } = useAuth();

  const isRegisterAnalist = user?.funcao === "ANALISTA_CADASTRO";

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await getCustomers();
      setCustomers(response);
    };

    fetchCustomers();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Clientes" backPath="/home" />
      <div className="flex flex-col w-full items-center border-2 border-t-cyan-600 border-b-cyan-600 align-self-center gap-6 p-20 min-h-[700px] bg-cyan-200">
        <div className="flex flex-col relative  rounded-lg w-[70%]">
          {isRegisterAnalist && (
            <Button
              onClick={() => router.push("/customers/maintenance/new")}
              className="self-end flex text-base font-bold cursor-pointer bg-pink-700 hover:bg-pink-600 mb-5"
            >
              Adicionar
              <Plus strokeWidth={3} />
            </Button>
          )}

          <Table className="justify-self-center rounded-t-4">
            <TableHeader className="bg-sky-400">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[20%] text-white ml-0.5 rounded-tl-2xl font-semibold text-base">
                  Nome
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  CPF
                </TableHead>
                <TableHead className="w-[12%] text-white ml-0.5 font-semibold text-base">
                  Telefone
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  Data nascimento
                </TableHead>
                <TableHead className="w-[16%] text-white ml-0.5 font-semibold text-base">
                  Endereço
                </TableHead>
                <TableHead className="w-[10%] text-white rounded-tr-2xl font-semibold text-base" />
              </TableRow>
            </TableHeader>
          </Table>

          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            <Table className="justify-self-center rounded-t-4">
              <TableBody>
                {customers.map((customer, index) => (
                  <TableRow
                    className={
                      index % 2 === 0 ? "bg-gray-100 flex" : "bg-gray-200 flex"
                    }
                    key={index}
                  >
                    <TableCell className="w-[25%]">{customer.nome}</TableCell>
                    <TableCell className="w-[19%]">{customer.cpf}</TableCell>

                    <TableCell className="w-[15%]">
                      {customer.telefone}
                    </TableCell>

                    <TableCell className="w-[18%]">
                      {formatDate(new Date(customer.data_nascimento), "pt-br")}
                    </TableCell>

                    <TableCell className="w-[22%]">
                      {customer.endereco}
                    </TableCell>

                    <TableCell className="w-[10%] flex items-center justify-start">
                      {isRegisterAnalist && (
                        <button
                          className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-yellow-500 rounded-[6px]"
                          type="button"
                          onClick={() => {
                            localStorage.setItem(
                              "customer",
                              JSON.stringify(customer)
                            );
                            router.push("/customers/maintenance/edit");
                          }}
                        >
                          <Pen strokeWidth={2.4} color="white" />
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {customers.length === 0 && (
            <div className="text-gray-800 m-0 p-2 bg-gray-100 font-semibold text-lg text-center">
              Não há clientes cadastrados
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
