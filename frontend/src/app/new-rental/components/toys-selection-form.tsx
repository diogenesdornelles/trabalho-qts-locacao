import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { api } from "@/lib/api-instance/api";
import { Brinquedo, SelectedToy, TipoBrinquedo } from "@/domains/types";
import { Button } from "@/components/ui/button";

export const toyFormSchema = Yup.object().shape({
  cod_brinquedo: Yup.string().required("Um brinquedo deve ser selecionado"),
  quantidade: Yup.number()
    .transform((value, originalValue) => (!originalValue ? null : value))
    .required("Informe a quantidade")
    .positive("A quantidade não pode ser negativa"),
  valor_locacao: Yup.number()
    .transform((value, originalValue) => (!originalValue ? null : value))
    .required()
    .positive(),
});

interface ToysSelectionFormProps {
  updateToys: (newToy: SelectedToy) => void;
}

export const ToysSelectionForm = ({ updateToys }: ToysSelectionFormProps) => {
  const [toyTypes, setToyTypes] = useState<TipoBrinquedo[]>();
  const [toys, setToys] = useState<Brinquedo[]>();
  const [filteredToys, setFilteredToys] = useState<Brinquedo[]>();
  const [selectedToy, setSelectedToy] = useState<Brinquedo>();

  const { handleSubmit, register, watch, control, reset, formState, setValue } =
    useForm<Omit<SelectedToy, "nome">>({
      resolver: yupResolver(toyFormSchema),
    });

  const quantity = watch("quantidade");
  const rentalPrice = watch("valor_locacao");
  const toyCode = watch("cod_brinquedo");

  useEffect(() => {
    const fetchToyTypes = async () => {
      try {
        const response = await api.get("/tiposBrinquedos");
        setToyTypes(response.data);
      } catch (error) {
        console.log("Erro ao buscar os tipos de brinquedo: ", error);
      }
    };

    const fetchToys = async () => {
      try {
        const response = await api.get("/brinquedos");
        setToys(response.data);
      } catch (error) {
        console.log("Erro ao buscar os tipos de brinquedo: ", error);
      }
    };

    fetchToyTypes();
    fetchToys();
  }, []);

  useEffect(() => {
    const filteredToy = toys?.filter((t) => t.cod === toyCode);

    if (filteredToy && filteredToy.length) {
      setValue("valor_locacao", +filteredToy[0].valor_locacao);
      setSelectedToy(filteredToy[0]);
    }
  }, [setValue, toyCode, toys]);

  const handleFilterToys = (toyType: string) => {
    setFilteredToys(toys?.filter((toy) => toy.tipo_brinquedo === toyType));
  };

  const onSubmit = (data: Omit<SelectedToy, "nome">) => {
    const newToy = {
      ...data,
      nome: selectedToy?.nome,
    };

    updateToys(newToy);

    reset({
      cod_brinquedo: "",
      quantidade: null,
      valor_locacao: null,
    });
  };

  const FormErrors = () => {
    return Object.keys(formState.errors).map((key) => {
      return formState.errors[key] ? (
        <span className="leading-none text-destructive font-semibold" key={key}>
          {formState.errors[key].message}
        </span>
      ) : null;
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <div className="w-full">
          <label htmlFor="tipo_brinquedo">Tipo de brinquedo</label>

          <Select onValueChange={(type) => handleFilterToys(type)}>
            <SelectTrigger className="w-full border-gray-800">
              <SelectValue placeholder="Nenhum selecionado" />
            </SelectTrigger>
            <SelectContent className="border-gray-800">
              {toyTypes?.map((type) => {
                return (
                  <SelectItem key={type.cod} value={type.cod}>
                    {type.nome}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <label htmlFor="cod_brinquedo">Brinquedo</label>
          <Controller
            name="cod_brinquedo"
            control={control}
            render={({ field }) => {
              return (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full border-gray-800">
                    <SelectValue placeholder="Escolha uma opção" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-800">
                    {filteredToys && filteredToys.length ? (
                      filteredToys?.map((toy) => {
                        return (
                          <SelectItem key={toy.cod} value={toy.cod}>
                            {toy.nome}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem disabled={true} value="nenhum-valor">
                        Nenhum brinquedo disponível
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              );
            }}
          />
        </div>
      </div>

      <div className="flex gap-4 items-end">
        <div className="w-full">
          <label htmlFor="quantidade">Quantidade</label>
          <Input {...register("quantidade")} type="number" />
        </div>

        <div className="w-full">
          <label htmlFor="valor_locacao">Valor de locação</label>
          <Input
            {...register("valor_locacao")}
            disabled
            className="disabled:bg-gray-300"
            type="number"
          />
        </div>
      </div>

      {rentalPrice && quantity && (
        <span className="text-2xl w-1/2 font-semibold">
          Total: {+rentalPrice * +quantity}
        </span>
      )}

      <FormErrors />

      <Button className="flex text-base font-bold w-fullcursor-pointer bg-pink-700 hover:bg-pink-600">
        Adicionar
        <Plus strokeWidth={3} />
      </Button>
    </form>
  );
};
