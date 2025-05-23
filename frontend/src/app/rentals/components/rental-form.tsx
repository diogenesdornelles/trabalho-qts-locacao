import { formatDate } from "@/app/utils/format-date";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cliente, SelectedToy } from "@/domains/types";
import { getCustomer } from "@/services/customer/getCustomer";
import { createRental } from "@/services/rentals/createRental";
import { rentToy } from "@/services/rentedToy/rentToy";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as Yup from "yup";
import { errorToast, successToast } from "../../../styles/toast";
import { useRouter } from "next/navigation";

const formSchema = Yup.object().shape({
  data_locacao: Yup.string().nullable(),
  data_devolucao: Yup.string().nullable(),
  cpf_cliente: Yup.string().required("Campo obrigatório"),
  nome_cliente: Yup.string().nullable(),
});

export type RentalFormData = Yup.InferType<typeof formSchema>;
interface RentalFormProps {
  selectedToys: SelectedToy[];
  resetToys: () => void;
  defaultValues?: RentalFormData;
}

export const RentalForm = ({
  selectedToys,
  resetToys,
  defaultValues,
}: RentalFormProps) => {
  const [isCustomerUnregistered, setIsCustomerUnregistered] = useState(true);

  const today = new Date();

  const { handleSubmit, register, watch, setValue, formState, reset } = useForm(
    {
      resolver: yupResolver(formSchema),
      defaultValues: {
        data_locacao: formatDate(new Date(), "sv-SE"),
        data_devolucao: formatDate(
          new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
          "sv-SE"
        ),
      },
    }
  );

  const { errors } = formState;

  const cpf = watch("cpf_cliente");
  const router = useRouter();

  useEffect(() => {
    if (defaultValues) {
      setIsCustomerUnregistered(false);
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  useEffect(() => {
    if (cpf?.length < 11 && !defaultValues) {
      setValue("nome_cliente", "");
    }
  }, [cpf, defaultValues, setValue]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data: Cliente = await getCustomer(cpf);

        if (data) {
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

    if (cpf && !defaultValues) fetchCustomer();
  }, [cpf, defaultValues, setValue]);

  const onSubmit = async (data: RentalFormData) => {
    let error = false;
    if (isCustomerUnregistered || !selectedToys.length) return;

    const rental = await createRental({ cpf_cliente: data.cpf_cliente });

    selectedToys.forEach(async (toy) => {
      error = await rentToy({
        cod_brinquedo: toy.cod_brinquedo,
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        cod_locacao: rental?.cod!,
      });
    });

    if (!error && rental) {
      toast("Locação criada com sucesso!", {
        duration: 2000,
        style: successToast,
      });
      reset();
      resetToys();
    } else {
      toast("Ocorreu um erro ao criar a locação, tente novamente.", {
        duration: 2000,
        style: errorToast,
      });
    }
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
            className="bg-white relative"
          />
        </div>
        <div className="w-50">
          <label className="font-semibold" htmlFor="data_devolucao">
            Data de devolução
          </label>
          <Input
            {...register("data_devolucao")}
            disabled
            type="date"
            name="data_devolucao"
            className="bg-white relative"
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
            disabled={!!defaultValues}
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
      {!defaultValues && (
        <div className="fixed z-20 flex top-[90.5%] right-[4.5%] gap-4">
          <Button
            onClick={() => router.back()}
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
      )}
    </form>
  );
};
