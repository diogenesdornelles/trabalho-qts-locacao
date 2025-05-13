"use client";

import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { api } from "@/lib/api-instance/api";
import { Plus, Trash } from "lucide-react";
import { createToyType } from "@/services/toys/createToyType";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TipoBrinquedo } from "@/domains/types";
import { deleteToyType } from "@/services/toys/deleteToyType";

const formSchema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
});

export type ToyFormData = Yup.InferType<typeof formSchema>;

export const ToyTypesForm = () => {
  const [reload, setReload] = useState(false);
  const [toyTypes, setToyTypes] = useState<TipoBrinquedo[]>([]);
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { errors } = formState;

  useEffect(() => {
    const fetchToyTypes = async () => {
      try {
        const response = await api.get("/tiposBrinquedos");
        setToyTypes(response.data);
      } catch (error) {
        console.log("Erro ao buscar os tipos de brinquedo: ", error);
      }
    };

    fetchToyTypes();
  }, [reload]);

  const onSubmit = async (data: { nome: string }) => {
    const toyTypeCreated = await createToyType(data);

    if (toyTypeCreated) {
      reset();
      setReload((prev) => !prev);
    }
  };

  return (
    <form
      className="flex flex-col gap-12 w-full mt-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 w-full items-center justify-center">
        <div className="w-full">
          <label className="font-semibold" htmlFor="nome">
            Nome
          </label>
          <Input
            {...register("nome")}
            type="text"
            name="nome"
            className="bg-white relative"
          />
          {errors.nome && (
            <span className="absolute text-destructive font-semibold">
              {errors.nome.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center mt-6 bg-pink-600 rounded-md p-[6px] text-white cursor-pointer"
        >
          <Plus />
        </button>
      </div>

      <div>
        <Table className="justify-self-center rounded-t-4">
          <TableHeader className="bg-sky-400">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[100%] text-white ml-0.5 rounded-tl-2xl rounded-tr-2xl font-semibold text-base">
                Nome
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>

        {/* Contêiner com rolagem */}
        <div className="max-h-[140px] overflow-y-auto custom-scrollbar">
          <Table className="justify-self-center rounded-t-4">
            <TableBody>
              {toyTypes.map((type, index) => (
                <TableRow
                  className={
                    index % 2 === 0 ? "bg-gray-100 flex" : "bg-gray-200 flex"
                  }
                  key={index}
                >
                  <TableCell className="w-[100%]">{type.nome}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {toyTypes.length === 0 && (
          <div className="text-gray-800 m-0 p-2 bg-gray-100 font-semibold text-lg text-center">
            Não há tipos cadastrados
          </div>
        )}
      </div>
    </form>
  );
};
