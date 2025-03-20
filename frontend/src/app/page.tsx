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

  const onSubmit = (data) => {
    console.log(data); // Exemplo de como você pode usar os dados
  };

  return (
    <form
      className="flex flex-col gap-4 w-[70%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <div className="w-50">
          <label htmlFor="data_devolucao">Data da locação</label>
          <Input type="date" name="data_devolucao" className="bg-white" />
        </div>

        <div className="w-50">
          <label htmlFor="data_devolucao">Data de devolução</label>
          <Input type="date" name="data_devolucao" />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <label htmlFor="cpf_cliente">CPF do cliente</label>
          <Input type="text" name="cpf_cliente" />
        </div>

        <div className="grow-1">
          <label htmlFor="cpf_cliente">Nome do cliente</label>
          <Input type="text" name="cpf_cliente" />
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
        <Button className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer">
          Adicionar
          <PlusCircle color="white" />
        </Button>
      </div>
      <Table className=" justify-self-center border rounded-t-4">
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
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>Total: R$15,00</TableCaption>
      </Table>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen">
      <div className="p-4 flex justify-between w-full">
        <Image src="/logo.png" alt="logo" width={70} height={47} />

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800">Nome Sobrenome</p>
          <div className="w-10 h-10 bg-gray-400 rounded-full" />
        </div>
      </div>

      <h1 className="text-2xl font-bold self-start p-4">Nova locação</h1>

      <div className="flex flex-col w-full items-center gap-6 mt-20 p-20 bg-sky-100">
        <RentalForm />
        <ToysTable />
      </div>
    </div>
  );
}
