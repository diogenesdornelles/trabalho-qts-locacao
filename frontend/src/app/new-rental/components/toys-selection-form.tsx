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

const formSchema = Yup.object().shape({
  brinquedo_id: Yup.number().required().positive(),
  quantidade: Yup.number().required().positive(),
});

export const ToysSelectionForm = () => {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(formSchema),
  });

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
