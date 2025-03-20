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

export const ToysTable = () => {
  return (
    <div className="flex flex-col w-[70%] gap-3 mt-6">
      <div className="flex items-end justify-between">
        <h2 className="text-lg font-semibold leading-4">Brinquedos locados</h2>
        <Dialog>
          <DialogTrigger>
            <Button
              asChild
              className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer"
            >
              <div>
                Adicionar
                <PlusCircle color="white" />
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-fit">
            <DialogHeader>
              <DialogTitle>Seleção de brinquedo</DialogTitle>
            </DialogHeader>
            <ToysSelectionForm />
          </DialogContent>
        </Dialog>
      </div>
      <Table className="justify-self-center border rounded-t-4">
        <TableHeader className="bg-gray-400">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[60%] text-white font-semibold text-base">
              Brinquedo
            </TableHead>
            <TableHead className="text-white font-semibold text-base">
              Valor unitário
            </TableHead>
            <TableHead className="text-white font-semibold text-base">
              Quantidade
            </TableHead>
            <TableHead className="text-white font-semibold text-base">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="row-span-4 bg-white font-medium"></TableRow>
        </TableBody>
        <TableCaption className="text-gray-800 font-semibold text-lg text-center">
          Nenhum brinquedo selecionado ainda
        </TableCaption>
        <TableCaption className="text-gray-800 font-semibold text-lg text-right">
          Total: R$15,00
        </TableCaption>
      </Table>
    </div>
  );
};
