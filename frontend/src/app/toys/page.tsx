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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Brinquedo } from "@/domains/types";
import { useCallback, useEffect, useState } from "react";
import { formatDate } from "../utils/format-date";
import { Pen, Plus, Trash, Bot } from "lucide-react";
import { getToys } from "@/services/toys/getToys";
import { deleteToy } from "@/services/toys/deleteToy";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/authContext";
import { ToyTypesForm } from "./components/toy-types-form";

export default function Toys() {
  const [toys, setToys] = useState<Brinquedo[]>([]);

  const router = useRouter();
  const { user } = useAuth();
  const isStorekeeper = user?.funcao === "ALMOXARIFE";

  const handleToyDelete = useCallback(async (toyId: string) => {
    const wasToyDeleted = await deleteToy(toyId);
    if (wasToyDeleted)
      setToys((prev) => prev.filter((toy) => toy.cod !== toyId));
  }, []);

  useEffect(() => {
    const fetchToys = async () => {
      const response = await getToys();
      setToys(response);
    };

    fetchToys();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Brinquedos" backPath="/home" />
      <div className="flex flex-col w-full items-center border-2 border-t-cyan-600 border-b-cyan-600 align-self-center gap-6 p-20 min-h-[700px] bg-cyan-200">
        <div className="flex flex-col relative  rounded-lg w-[70%]">
          <div className="flex gap-2 self-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {}}
                  className="self-end flex text-base font-bold cursor-pointer bg-pink-700 hover:bg-pink-600 mb-5"
                >
                  Tipos de brinquedo
                  <Bot strokeWidth={3} />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Tipos de brinquedo</DialogTitle>
                <ToyTypesForm />
              </DialogContent>
            </Dialog>
            {isStorekeeper && (
              <Button
                onClick={() => router.push("/toys/maintenance/new")}
                className="flex text-base font-bold cursor-pointer bg-pink-700 hover:bg-pink-600 mb-5"
              >
                Adicionar
                <Plus strokeWidth={3} />
              </Button>
            )}
          </div>

          <Table className="justify-self-center rounded-t-4">
            <TableHeader className="bg-sky-400">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[20%] text-white ml-0.5 rounded-tl-2xl font-semibold text-base">
                  Nome
                </TableHead>
                <TableHead className="w-[20%] text-white ml-0.5 font-semibold text-base">
                  Marca
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  Tipo
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  Data aquisição
                </TableHead>
                <TableHead className="w-[15%] text-white ml-0.5 font-semibold text-base">
                  Valor unitário
                </TableHead>
                <TableHead className="w-[10%] text-white rounded-tr-2xl font-semibold text-base"></TableHead>
              </TableRow>
            </TableHeader>
          </Table>

          {/* Contêiner com rolagem */}
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            <Table className="justify-self-center rounded-t-4">
              <TableBody>
                {toys.map((toy, index) => (
                  <TableRow
                    className={
                      index % 2 === 0 ? "bg-gray-100 flex" : "bg-gray-200 flex"
                    }
                    key={index}
                  >
                    <TableCell className="w-[21%]">{toy.nome}</TableCell>
                    <TableCell className="w-[21.3%]">{toy.marca}</TableCell>
                    <TableCell className="w-[16%]">
                      {toy.tipoBrinquedo.nome}
                    </TableCell>

                    <TableCell className="w-[16%]">
                      {formatDate(new Date(toy.data_aquisicao), "pt-br")}
                    </TableCell>

                    <TableCell className="w-[16%]">
                      {toy.valor_locacao.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                    <TableCell className="w-[10%] flex items-center justify-start">
                      {isStorekeeper && (
                        <>
                          <button
                            className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-yellow-500 rounded-[6px]"
                            type="button"
                            onClick={() => {
                              localStorage.setItem("toy", JSON.stringify(toy));
                              router.push("/toys/maintenance/edit");
                            }}
                          >
                            <Pen strokeWidth={2.4} color="white" />
                          </button>
                          <button
                            className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-red-500 rounded-[6px]"
                            type="button"
                            onClick={() => handleToyDelete(toy.cod)}
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
          {toys.length === 0 && (
            <div className="text-gray-800 m-0 p-2 bg-gray-100 font-semibold text-lg text-center">
              Não há brinquedos cadastrados
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
