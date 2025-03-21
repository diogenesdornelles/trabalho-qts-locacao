import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useApi } from "@/lib/api-instance/api";

const formSchema = Yup.object().shape({
  brinquedo_id: Yup.number().required().positive(),
  quantidade: Yup.number().required().positive(),
});

export const ToysSelectionForm = () => {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(formSchema),
  });

  const api = useApi();

  useEffect(() => {
    console.log('entrou')
    const fetchToyTypes = async () => {
      try {
        const response = await api.get("/tiposBrinquedos");
        console.log(response);
      } catch (error) {
        console.log("Erro ao buscar os tipos de brinquedo: ", error);
      }
    };

    fetchToyTypes();
  }, [api]);

  const onSubmit = () => {};

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <div className="flex gap-6">
        <div>
          <label htmlFor="brinquedo_id">Brinquedo</label>
          <Select name="brinquedo_id">
            <SelectTrigger className="w-[400px] border-gray-800">
              <SelectValue placeholder="Nenhum selecionado" />
            </SelectTrigger>
            <SelectContent className="border-gray-800">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <Input type="number" />
        </div>
      </div>
    </form>
  );
};
