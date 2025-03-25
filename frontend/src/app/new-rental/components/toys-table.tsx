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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ToysSelectionForm } from "./toys-selection-form";
import { SelectedToy } from "@/domains/types";

interface ToysTableProps {
  selectedToys: SelectedToy[];
  addToy: (newToy: SelectedToy) => void;
  removeToy: (toyId: string) => void;
}

export const ToysTable = ({
  selectedToys,
  addToy,
  removeToy,
}: ToysTableProps) => {
  return (
    <div className="flex flex-col w-[70%] gap-3 mt-6">
      <div className="flex items-end justify-between">
        <h2 className="text-lg text-sky-700 font-bold leading-4">
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
              <hr />
            </DialogHeader>

            <ToysSelectionForm addToy={addToy} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative  rounded-lg">
        <Table className="justify-self-center rounded-t-4">
          <TableHeader className="bg-sky-400">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[60%] text-white rounded-tl-2xl font-semibold text-base">
                Brinquedo
              </TableHead>
              <TableHead className="w-[10%] text-white font-semibold text-base">
                Valor unitário
              </TableHead>
              <TableHead className="w-[10%] text-white font-semibold text-base">
                Quantidade
              </TableHead>
              <TableHead className="w-[10%] text-white font-semibold text-base">
                Total
              </TableHead>
              <TableHead className="w-[10%] text-white rounded-tr-2xl font-semibold text-base">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>

        {/* Contêiner com rolagem */}
        <div className="max-h-40 overflow-y-auto custom-scrollbar">
          <Table className="justify-self-center rounded-t-4">
            <TableBody>
              {selectedToys.map((toy, index) => (
                <TableRow
                  className={
                    index % 2 === 0 ? "bg-gray-100 flex" : "bg-gray-200 flex"
                  }
                  key={index}
                >
                  <TableCell className="w-[60%]">{toy.nome}</TableCell>
                  <TableCell className="w-[10%]">{toy.valor_locacao}</TableCell>
                  <TableCell className="w-[10%]">{toy.quantidade}</TableCell>
                  <TableCell className="w-[10%]">
                    {toy.valor_locacao * toy.quantidade}
                  </TableCell>
                  <TableCell className="w-[10%] flex items-center justify-start">
                    <button
                      className="flex ml-2 items-center justify-center cursor-pointer p-[4px] w-[30px] h-[30px]  bg-red-500 rounded-[6px]"
                      type="button"
                      onClick={() => removeToy(toy.cod_brinquedo)}
                    >
                      <Trash strokeWidth={2.4} color="white" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {selectedToys.length === 0 && (
          <div className="text-gray-800 m-0 p-2 bg-gray-100 font-semibold text-lg text-center">
            Nenhum brinquedo selecionado ainda
          </div>
        )}
      </div>
      <div className="text-sky-700 w-full font-bold text-lg text-right">
        Total: R$ {""}
        {selectedToys
          .reduce(
            (prev, current) =>
              prev + current.valor_locacao * current.quantidade,
            0
          )
          .toFixed(2)}
      </div>
    </div>
  );
};
