"use client";

import Image from "next/image";

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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";

const formSchema = Yup.object().shape({
  cpf_cliente: Yup.string().required(),
  data_devolucao: Yup.string().required(),
});

const RentalForm = () => {
  const { handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: unknown) => {
    console.log(data); // Exemplo de como você pode usar os dados
  };

  return (
    <form
      className="flex flex-col gap-4 w-[70%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <div className="w-50">
          <label htmlFor="data_locacao">Data da locação</label>
          <Input type="date" name="data_locacao" className="bg-white" />
        </div>

        <div className="w-50">
          <label htmlFor="data_devolucao">Data de devolução</label>
          <Input type="date" name="data_devolucao" className="bg-white" />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <label htmlFor="cpf_cliente">CPF do cliente</label>
          <Input type="text" name="cpf_cliente" className="bg-white" />
        </div>

        <div className="grow-1">
          <label htmlFor="nome_cliente">Nome do cliente</label>
          <Input type="text" name="nome_cliente" className="bg-white" />
        </div>
      </div>
    </form>
  );
};

const ToysTable = () => {
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Seleção de brinquedo</DialogTitle>
            </DialogHeader>
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

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen">
      Home page
    </div>
  );
}
