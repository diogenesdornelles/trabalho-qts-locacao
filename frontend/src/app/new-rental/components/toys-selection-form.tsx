import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";

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
      <div>
        <label htmlFor=""></label>
        <Input />
      </div>
    </form>
  );
};
