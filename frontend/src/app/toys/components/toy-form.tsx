"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createToy } from "@/services/toys/createToy";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { api } from "@/lib/api-instance/api";
import { Brinquedo, TipoBrinquedo } from "@/domains/types";
import { useParams } from "next/navigation";
import { updateToy } from "@/services/toys/updateToy";
import { formatDate } from "@/app/utils/format-date";

const formSchema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  tipo_brinquedo: Yup.string().required("Campo obrigatório"),
  marca: Yup.string().required("Campo obrigatório"),
  data_aquisicao: Yup.string()
    .required("Campo obrigatório")
    .test(
      "Validate date",
      "A data não pode ser maior que o dia atual",
      (date) => {
        const currentDate = new Date();
        const userDate = new Date(date);

        if (userDate > currentDate) {
          return false;
        }

        return true;
      }
    ),
  valor_locacao: Yup.number()
    .required("Campo obrigatório")
    .positive("O valor deve ser positivo"),
});

export type ToyFormData = Yup.InferType<typeof formSchema>;

export const ToyForm = () => {
  const [toy, setToy] = useState<Brinquedo>();
  const [toyTypes, setToyTypes] = useState<TipoBrinquedo[]>();
  const { handleSubmit, register, formState, reset, control, setValue } =
    useForm({
      resolver: yupResolver(formSchema),
    });

  const { action } = useParams();
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
  }, []);

  useEffect(() => {
    if (action === "edit") {const storedToy: Brinquedo = JSON.parse(localStorage.getItem("toy")!);
      setToy(storedToy);

      reset({
        data_aquisicao: formatDate(new Date(storedToy.data_aquisicao), "sv-SE"),
        marca: storedToy.marca,
        nome: storedToy.nome,
        tipo_brinquedo: storedToy.tipoBrinquedo.cod,
        valor_locacao: storedToy.valor_locacao,
      });
      
    }
  }, [action, reset, toyTypes]);

  const onSubmit = async (data: ToyFormData) => {
    if (action === "new") {
      const toyCreated = await createToy(data);

      if (toyCreated) reset();
      setValue("tipo_brinquedo", "");
    } else {
      if (toy) {
        await updateToy(toy.cod, data);
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-12 w-[60%] mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 w-full">
        <div className="w-1/2">
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

        <div className="w-1/2">
          <label className="font-semibold" htmlFor="tipo_brinquedo">
            Tipo de brinquedo
          </label>
          <Controller
            name="tipo_brinquedo"
            control={control}
            render={({ field }) => {
              return (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full border-gray-800 bg-gray-50">
                    <SelectValue placeholder="Nenhum selecionado" />
                  </SelectTrigger>
                  <SelectContent>
                    {toyTypes?.map((type) => {
                      return (
                        <SelectItem key={type.cod} value={type.cod}>
                          {type.nome}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              );
            }}
          />
          {errors.tipo_brinquedo && (
            <span className="absolute text-destructive font-semibold">
              {errors.tipo_brinquedo.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div className="grow-1">
          <label className="font-semibold" htmlFor="marca">
            Marca
          </label>
          <Input
            {...register("marca")}
            type="text"
            name="marca"
            className="bg-white relative"
          />
          {errors.marca && (
            <span className="absolute text-destructive font-semibold">
              {errors.marca.message}
            </span>
          )}
        </div>

        <div className="grow-1">
          <label className="font-semibold" htmlFor="data_aquisicao">
            Data da aquisição
          </label>
          <Input
            {...register("data_aquisicao")}
            type="date"
            name="data_aquisicao"
            className="bg-white"
          />
          {errors.data_aquisicao && (
            <span className="absolute text-destructive font-semibold">
              {errors.data_aquisicao.message}
            </span>
          )}
        </div>

        <div className="grow-1">
          <label className="font-semibold" htmlFor="valor_locacao">
            Valor para locação
          </label>
          <Input
            {...register("valor_locacao")}
            type="text"
            name="valor_locacao"
            className="bg-white"
          />
          {errors.valor_locacao && (
            <span className="absolute text-destructive font-semibold">
              {errors.valor_locacao.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <Button className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-base font-bold">
          Cancelar
        </Button>
        <Button
          type="submit"
          className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer bg-pink-600 hover:bg-pink-500 text-base font-bold"
        >
          Salvar
        </Button>
      </div>
    </form>
  );
};
