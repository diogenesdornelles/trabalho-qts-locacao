"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { createCustomer } from "@/services/customer/createCustomer";
import { useParams, useRouter } from "next/navigation";
import { Cliente } from "@/domains/types";
import { useEffect, useState } from "react";
import { updateCustomer } from "@/services/customer/updateCustomer";
import { formatDate } from "@/app/utils/format-date";

const formSchema = Yup.object().shape({
  cpf: Yup.string()
    .required("Campo obrigatório")
    .test(
      "validade CPF",
      "O CPF deve ter 11 caracteres, somente números",
      (cpf) => {
        return /^\d{11}$/.test(cpf);
      }
    ),
  nome: Yup.string().required("Campo obrigatório"),
  endereco: Yup.string()
    .required("Campo obrigatório")
    .min(10, "O endereço deve ter no mínimo 10 caracteres"),
  data_nascimento: Yup.string()
    .required("Campo obrigatório")
    .test("Validate date", "O cliente deve ser maior de idade", (date) => {
      const currentDate = new Date();
      const userDate = new Date(date);

      if (userDate > currentDate) {
        return false;
      }

      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      if (userDate > minAgeDate) {
        return false;
      }

      return true;
    }),
  telefone: Yup.string()
    .required("Campo obrigatório")
    .test(
      "validade phone number",
      "O telefone deve ter 11 caracteres, somente números",
      (phone) => {
        return /^\d{11}$/.test(phone);
      }
    ),
});

export const CustomerForm = () => {
  const [customer, setCustomer] = useState<Cliente>();

  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const router = useRouter();

  const { errors } = formState;
  const { action } = useParams();

  const onSubmit = async (data: Yup.InferType<typeof formSchema>) => {
    if (action === "new") {
      const customerCreated: boolean = await createCustomer(data);

      if (customerCreated) reset();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { cpf, ...rest } = data;
      await updateCustomer(customer!.cpf, { ...rest });
    }
  };

  useEffect(() => {
    if (action === "edit") {
      const { data_nascimento, ...rest }: Cliente = JSON.parse(
        localStorage.getItem("customer")!
      );

      reset({
        data_nascimento: formatDate(new Date(data_nascimento), "sv-SE"),
        ...rest,
      });

      setCustomer({ data_nascimento, ...rest });
    }
  }, [action, reset]);

  return (
    <form
      className="flex flex-col gap-12 w-[60%] mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 w-full">
        <div className="w-1/2">
          <label className="font-semibold" htmlFor="nome">
            Nome completo
          </label>
          <Input
            {...register("nome")}
            type="text"
            name="nome"
            className="bg-white"
          />
          {errors.nome && (
            <span className="absolute text-destructive font-semibold">
              {errors.nome.message}
            </span>
          )}
        </div>

        <div className="w-1/2">
          <label className="font-semibold" htmlFor="cpf">
            CPF
          </label>
          <Input
            {...register("cpf")}
            type="text"
            name="cpf"
            className="bg-white relative"
            disabled={action === "edit"}
          />
          {errors.cpf && (
            <span className="absolute text-destructive font-semibold">
              {errors.cpf.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="font-semibold" htmlFor="endereco">
          Endereço
        </label>
        <Input
          {...register("endereco")}
          type="text"
          name="endereco"
          className="bg-white relative"
        />
        {errors.endereco && (
          <span className="absolute text-destructive font-semibold">
            {errors.endereco.message}
          </span>
        )}
      </div>

      <div className="flex gap-4 w-full">
        <div className="grow-1">
          <label className="font-semibold" htmlFor="data_nascimento">
            Data de nascimento
          </label>
          <Input
            {...register("data_nascimento")}
            type="date"
            name="data_nascimento"
            className="bg-white"
          />
          {errors.data_nascimento && (
            <span className="absolute text-destructive font-semibold">
              {errors.data_nascimento.message}
            </span>
          )}
        </div>

        <div className="grow-1">
          <label className="font-semibold" htmlFor="telefone">
            Telefone
          </label>
          <Input
            {...register("telefone")}
            type="text"
            name="telefone"
            className="bg-white"
          />
          {errors.telefone && (
            <span className="absolute text-destructive font-semibold">
              {errors.telefone.message}
            </span>
          )}
        </div>
      </div>
      <div className="absolute flex top-[90.5%] right-[4.5%] gap-4">
        <Button
          type="button"
          onClick={() => router.push("/customers")}
          className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-base font-bold"
        >
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
