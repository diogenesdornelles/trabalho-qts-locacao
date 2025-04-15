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
import { Funcionario } from "@/domains/types";
import { useCallback, useEffect, useState } from "react";
import { Pen, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getEmployees } from "@/services/employee/getEmployees";
import { deleteEmployee } from "@/services/employee/deleteEmployee";
import { useAuth } from "../contexts/authContext";

export default function Employees() {
  const [employees, setEmployees] = useState<Funcionario[]>([]);

  const router = useRouter();
  const { user } = useAuth();
  const isManager = user?.funcao === "GERENTE";

  const handleEmployeeDelete = useCallback(async (cpf: string) => {
    const wasEmployeeDeleted = await deleteEmployee(cpf);
    if (wasEmployeeDeleted)
      setEmployees((prev) => prev.filter((employee) => employee.cpf !== cpf));
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await getEmployees();
      setEmployees(response);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Funcionários" backPath="/home" />
      <div className="flex flex-col w-full items-center border-2 border-t-cyan-600 border-b-cyan-600 align-self-center gap-6 p-20 min-h-[700px] bg-cyan-200">
        <div className="flex flex-col relative  rounded-lg w-[70%]">
          {isManager && (
            <Button
              onClick={() => router.push("/employees/maintenance/new")}
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
                <TableHead className="w-[20%] text-white ml-0.5 font-semibold text-base">
                  CPF
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  Telefone
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  Função
                </TableHead>
                <TableHead className="w-[10%] text-white rounded-tr-2xl font-semibold text-base" />
              </TableRow>
            </TableHeader>
          </Table>

          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            <Table className="justify-self-center rounded-t-4">
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow
                    className={
                      index % 2 === 0 ? "bg-gray-100 flex" : "bg-gray-200 flex"
                    }
                    key={index}
                  >
                    <TableCell className="w-[25%]">{employee.nome}</TableCell>
                    <TableCell className="w-[25%]">{employee.cpf}</TableCell>

                    <TableCell className="w-[18.7%]">
                      {employee.telefone}
                    </TableCell>

                    <TableCell className="w-[20%]">{employee.funcao}</TableCell>

                    <TableCell className="w-[10%] flex items-center justify-start">
                      {isManager && (
                        <>
                          <button
                            className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-yellow-500 rounded-[6px]"
                            type="button"
                            onClick={() => {
                              localStorage.setItem(
                                "selectedEmployee",
                                JSON.stringify(employee)
                              );
                              router.push("/employees/maintenance/edit");
                            }}
                          >
                            <Pen strokeWidth={2.4} color="white" />
                          </button>
                          <button
                            className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-red-500 rounded-[6px]"
                            type="button"
                            onClick={() => handleEmployeeDelete(employee.cpf)}
                          >
                            <Trash strokeWidth={2.4} color="white" />
                          </button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {employees.length === 0 && (
            <div className="text-gray-800 m-0 p-2 bg-gray-100 font-semibold text-lg text-center">
              Não há funcionários cadastrados
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
