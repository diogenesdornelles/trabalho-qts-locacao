import { formatDate } from "@/app/utils/format-date";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  data_locacao: Yup.string().nullable(),
  cpf_cliente: Yup.string().required(),
  data_devolucao: Yup.string().required(),
  nome_cliente: Yup.string().nullable(),
});

export const RentalForm = () => {
  const [customer, setCustomer] = useState();

  const { handleSubmit, register, watch } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      data_locacao: formatDate(new Date(), "sv-SE"),
    },
  });

  const cpf = watch("cpf_cliente");

  useEffect(() => {}, [cpf]);

  const onSubmit = (data) => {};

  return (
    <form
      className="flex flex-col gap-4 w-[70%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg  text-sky-700 font-bold leading-4">
        Dados da locação
      </h2>
      <div className="flex gap-4">
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
            className="bg-white"
          />
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
          />
        </div>
      </div>
    </form>
  );
};
