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
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { useEffect, useMemo, useState } from "react";
import { createEmployee } from "@/services/employee/createEmployee";
import { useParams, useRouter } from "next/navigation";
import { Funcionario } from "@/domains/types";
import { updateEmployee } from "@/services/employee/updateEmployee";

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
  telefone: Yup.string()
    .required("Campo obrigatório")
    .test(
      "validade phone number",
      "O telefone deve ter 11 caracteres, somente números",
      (phone) => {
        return /^\d{11}$/.test(phone);
      }
    ),
  funcao: Yup.string().required("Campo obrigatório"),
  senha: Yup.string().required("Campo obrigatório"),
});

export const EmployeeForm = () => {
  const [employee, setEmployee] = useState<Funcionario>();

  const { handleSubmit, register, formState, reset, control, setValue } =
    useForm({
      resolver: yupResolver(formSchema),
    });

  const { errors } = formState;
  const { action } = useParams();

  const router = useRouter() 

  const roles = useMemo(
    () => [
      { value: "GERENTE", label: "Gerente" },
      { value: "CAIXA", label: "Caixa" },
      { value: "AGENTE_LOCACAO", label: "Agente de locação" },
      { value: "ANALISTA_CADASTRO", label: "Analista de cadastro" },
      { value: "ALMOXARIFE", label: "Almoxarife" },
    ],
    []
  );

  const onSubmit = async (data: Yup.InferType<typeof formSchema>) => {
    if (action === "new") {
      const employeeCreated = await createEmployee(data);

      if (employeeCreated) reset();
      setValue("funcao", "");
    } else {
      if (employee) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { cpf, ...rest } = data;
        await updateEmployee(employee?.cpf, {
          ...rest,
        });
      }
    }
  };

  useEffect(() => {
    if (action === "edit") {
      const selectedEmployee: Funcionario = JSON.parse(
        localStorage.getItem("selectedEmployee")!
      );

      reset({
        cpf: selectedEmployee?.cpf,
        nome: selectedEmployee?.nome,
        telefone: selectedEmployee?.telefone,
        funcao: selectedEmployee?.funcao,
      });

      setValue("funcao", selectedEmployee?.funcao);
      setEmployee(selectedEmployee);
    }
  }, [action, reset, setValue]);

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
          <label className="font-semibold" htmlFor="cpf">
            CPF
          </label>
          <Input
            {...register("cpf")}
            type="text"
            name="cpf"
            className="bg-white relative"
          />
          {errors.cpf && (
            <span className="absolute text-destructive font-semibold">
              {errors.cpf.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div className="w-full">
          <label htmlFor="funcao">Função</label>
          <Controller
            name="funcao"
            control={control}
            render={({ field }) => {
              return (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-white border-gray-800">
                    <SelectValue placeholder="Escolha uma opção" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-800">
                    {roles.map((role) => {
                      return (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              );
            }}
          />
        </div>

        <div className="w-full">
          <label className="font-semibold" htmlFor="telefone">
            Telefone
          </label>
          <Input
            {...register("telefone")}
            type="text"
            name="telefone"
            className="bg-white relative"
          />
          {errors.telefone && (
            <span className="absolute text-destructive font-semibold">
              {errors.telefone.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <label className="font-semibold" htmlFor="senha">
            Senha
          </label>
          <Input
            {...register("senha")}
            type="password"
            name="senha"
            className="bg-white"
          />
          {errors.senha && (
            <span className="absolute text-destructive font-semibold">
              {errors.senha.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <Button onClick={() => router.back()} className="flex justify-evenly rounded-full p-5 w-40 cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-base font-bold">
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
