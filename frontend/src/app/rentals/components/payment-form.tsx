import { formatDate } from "@/app/utils/format-date";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cliente, RentalInfo } from "@/domains/types";
import { getCustomer } from "@/services/customer/getCustomer";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { payRental } from "@/services/rentals/payRental";

const formSchema = Yup.object().shape({
  data_pagamento: Yup.string().nullable(),
  nome_cliente: Yup.string().nullable(),
  cpf_cliente: Yup.string().required("Campo obrigatório"),
  valor_pagamento: Yup.number()
    .required("Campo obrigatório")
    .positive("O valor deve ser positivo"),
});

export type PaymentFormData = Yup.InferType<typeof formSchema>;

export const PaymentForm = ({}) => {
  const [rental, setRental] = useState<RentalInfo>();

  const { handleSubmit, register, watch, setValue, formState } = useForm(
    {
      resolver: yupResolver(formSchema),
      defaultValues: {
        data_pagamento: formatDate(new Date(), "sv-SE"),
      },
    }
  );

  const { errors } = formState;

  const cpf = watch("cpf_cliente");

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data: Cliente = await getCustomer(cpf);
        setValue("nome_cliente", data.nome);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.status === 400 && cpf.length === 11) {
          }
        }
      }
    };

    if (cpf && cpf.length === 11) fetchCustomer();
  }, [cpf, setValue]);

  useEffect(() => {
    if (cpf?.length < 11) setValue("nome_cliente", "");
  }, [cpf, setValue]);

  useEffect(() => {
    const storedRental: RentalInfo = JSON.parse(
      localStorage.getItem("rental")!
    );

    setRental(storedRental);
  }, []);

  const onSubmit = async (data: PaymentFormData) => {
    const { valor_pagamento, cpf_cliente } = data;
    await payRental({ valor_pagamento, cod_locacao: rental!.cod, cpf_cliente });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 mt-5">
        <div className="w-50">
          <label className="font-semibold" htmlFor="data_pagamento">
            Data do pagamento
          </label>
          <Input
            {...register("data_pagamento")}
            disabled
            type="date"
            name="data_pagamento"
            className="bg-white relative"
          />
        </div>
      </div>

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

      <div className="grow-1">
        <label className="font-semibold" htmlFor="valor_pagamento">
          Valor do pagamento
        </label>
        <Input
          {...register("valor_pagamento")}
          type="string"
          name="valor_pagamento"
          className="bg-white"
        />
      </div>
      <div className=" flex top-[90.5%] right-[4.5%] gap-4">
        <Button
          type="submit"
          className="flex justify-evenly rounded-full p-5 w-full cursor-pointer bg-pink-600 hover:bg-pink-500 text-base font-bold"
        >
          Salvar
        </Button>
      </div>
    </form>
  );
};
