import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ToysSelectionForm } from "./toys-selection-form";
import { SelectedToy } from "@/domains/types";

interface ToysTableProps {
  selectedToys: SelectedToy[];
  updateToys: (newToy: SelectedToy) => void;
}

export const ToysTable = ({ selectedToys, updateToys }: ToysTableProps) => {
  console.log(selectedToys)
  return (
    <div className="flex flex-col w-[70%] gap-3 mt-6">
      <div className="flex items-end justify-between">
        <h2 className="text-lg  text-sky-700 font-bold leading-4">
          Brinquedos locados
        </h2>
        <Dialog>
          <DialogTrigger>
            <Button
              asChild
              className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer bg-pink-600 hover:bg-pink-500 text-base font-bold"
            >
              <div>
                Adicionar
                <PlusCircle strokeWidth={3} color="white" />
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-fit">
            <DialogHeader>
              <DialogTitle>Seleção de brinquedo</DialogTitle>
            </DialogHeader>

            <ToysSelectionForm updateToys={updateToys} />
          </DialogContent>
        </Dialog>
      </div>
      <Table className="justify-self-center rounded-t-4">
        <TableHeader className="bg-sky-400">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[60%] text-white rounded-tl-2xl font-semibold text-base">
              Brinquedo
            </TableHead>
            <TableHead className="text-white font-semibold text-base">
              Valor unitário
            </TableHead>
            <TableHead className="text-white font-semibold text-base">
              Quantidade
            </TableHead>
            <TableHead className="text-white rounded-tr-2xl font-semibold text-base">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedToys.map((toy, index) => {
            return (
              <TableRow
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                key={toy.cod_brinquedo}
              >
                <TableCell>{toy.nome}</TableCell>
                <TableCell>{toy.valor_locacao}</TableCell>
                <TableCell>{toy.quantidade}</TableCell>
                <TableCell>{toy.valor_locacao * toy.quantidade}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>

        {selectedToys.length === 0 && (
          <TableCaption className="text-gray-800 m-0 p-2 bg-gray-100 font-semibold text-lg text-center">
            Nenhum brinquedo selecionado ainda
          </TableCaption>
        )}

        <TableCaption className="text-sky-700 font-bold text-lg text-right">
          Total: R$ {""}
          {selectedToys
            .reduce(
              (prev, current) =>
                prev + current.valor_locacao * current.quantidade,
              0
            )
            .toFixed(2)}
        </TableCaption>
      </Table>
    </div>
  );
};
