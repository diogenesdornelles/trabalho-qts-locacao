import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  cpf_cliente: Yup.string().required(),
  data_devolucao: Yup.string().required(),
});

export const RentalForm = () => {
  const { handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: unknown) => {
    console.log(data); // Exemplo de como você pode usar os dados
  };

  return (
    <form
      className="flex flex-col gap-4 w-[70%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <div className="w-50">
          <label htmlFor="data_locacao">Data da locação</label>
          <Input type="date" name="data_locacao" className="bg-white" />
        </div>

        <div className="w-50">
          <label htmlFor="data_devolucao">Data de devolução</label>
          <Input type="date" name="data_devolucao" className="bg-white" />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <label htmlFor="cpf_cliente">CPF do cliente</label>
          <Input type="text" name="cpf_cliente" className="bg-white" />
        </div>

        <div className="grow-1">
          <label htmlFor="nome_cliente">Nome do cliente</label>
          <Input type="text" name="nome_cliente" className="bg-white" />
        </div>
      </div>
    </form>
  );
};
