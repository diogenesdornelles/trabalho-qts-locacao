import { useAuth } from "@/app/contexts/authContext";
import { formatDate } from "@/app/utils/format-date";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cliente } from "@/domains/types";
import { getCustomer } from "@/services/customer/getCustomer";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  data_locacao: Yup.string().nullable(),
  cpf_cliente: Yup.string().required("Campo obrigatório"),
  data_devolucao: Yup.string().required("Campo obrigatório"),
  nome_cliente: Yup.string().nullable(),
});

export const RentalForm = () => {
  const [customer, setCustomer] = useState<Cliente>();
  const [isCustomerUnregistered, setIsCustomerUnregistered] = useState(true);

  const { handleSubmit, register, watch, setValue, formState } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      data_locacao: formatDate(new Date(), "sv-SE"),
    },
  });

  const { errors } = formState;

  const cpf = watch("cpf_cliente");

  useEffect(() => {
    if (cpf?.length < 11) {
      setValue("nome_cliente", "");
    }
  }, [cpf, setValue]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data: Cliente = await getCustomer(cpf);

        if (data) {
          setCustomer(data);
          setValue("nome_cliente", data.nome);
          setIsCustomerUnregistered(false);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.status === 400 && cpf.length === 11) {
            setIsCustomerUnregistered(true);
          }
        }
      }
    };

    if (cpf) fetchCustomer();
  }, [cpf, setValue]);

  const onSubmit = (data) => {
    if (Object.keys(data).includes("valor_locacao")) return;

    console.log("submit");
  };

  return (
    <form
      className="flex flex-col gap-4 w-[70%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg  text-sky-700 font-bold leading-4">
        Dados da locação
      </h2>
      <div className="flex gap-4 mb-5">
        <div className="w-50">
          <label className="font-semibold" htmlFor="data_locacao">
            Data da locação
          </label>
          <Input
            {...register("data_locacao")}
            disabled
            type="date"
            name="data_locacao"
            className="bg-white"
          />
        </div>

        <div className="w-50">
          <label className="font-semibold" htmlFor="data_devolucao">
            Data de devolução
          </label>
          <Input
            {...register("data_devolucao")}
            type="date"
            name="data_devolucao"
            className="bg-white"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <label className="font-semibold" htmlFor="cpf_cliente">
            CPF do cliente
          </label>
          <Input
            {...register("cpf_cliente")}
            type="text"
            name="cpf_cliente"
            className="bg-white relative"
          />
          {isCustomerUnregistered && cpf?.length === 11 && (
            <span className="absolute text-destructive font-semibold">
              Este cliente não está cadastrado
            </span>
          )}
          {errors.cpf_cliente && (
            <span className="absolute text-destructive font-semibold">
              {errors.cpf_cliente.message}
            </span>
          )}
        </div>

        <div className="grow-1">
          <label className="font-semibold" htmlFor="nome_cliente">
            Nome do cliente
          </label>
          <Input
            {...register("nome_cliente")}
            type="text"
            name="nome_cliente"
            className="bg-white"
            disabled
          />
        </div>
      </div>
      <Button className="flex justify-evenly absolute top-[90.5%] right-[4.5%] rounded-full p-5 w-40 self-end cursor-pointer bg-pink-600 hover:bg-pink-500 text-base font-bold">
        Salvar
      </Button>
    </form>
  );
};
