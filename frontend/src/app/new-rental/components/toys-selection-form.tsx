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
import { useApi } from "@/lib/api-instance/api";
import { Brinquedo, TipoBrinquedo } from "@/domains/types";
import { Button } from "@/components/ui/button";

const formSchema = Yup.object().shape({
  cod_brinquedo: Yup.string().required(),
  quantidade: Yup.string().required(),
  valor_locacao: Yup.string().required(),
});

export const ToysSelectionForm = () => {
  const [toyTypes, setToyTypes] = useState<TipoBrinquedo[]>();
  const [toys, setToys] = useState<Brinquedo[]>();
  const [selectedToyType, setSelectedToyType] = useState<string>();
  const [filteredToys, setFilteredToys] = useState<Brinquedo[]>();

  const { handleSubmit, register, watch, control } = useForm({
    resolver: yupResolver(formSchema),
  });

  const quantity = watch("quantidade");
  const rental_price = watch("valor_locacao");

  const api = useApi();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterToys = (toyType: string) => {
    setFilteredToys(toys?.filter((toy) => toy.tipo_brinquedo === toyType));
  };

  const onSubmit = (data) => {
    console.log(data);
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
          <Input {...register("quantidade")} type="text" />
        </div>

        <div className="w-full">
          <label htmlFor="valor_locacao">Valor de locação</label>
          <Input {...register("valor_locacao")} type="text" />
        </div>
      </div>

      {rental_price && quantity && (
        <span className="text-2xl w-1/2 font-semibold">
          Total: {+rental_price * +quantity}
        </span>
      )}

      <Button className="flex text-base font-bold w-fullcursor-pointer bg-pink-700 hover:bg-pink-600">
        Adicionar
        <Plus></Plus>
      </Button>
    </form>
  );
};
