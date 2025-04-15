import { Cliente } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast, successToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const updateCustomer = async (
  cpf: string,
  data: Omit<Cliente, "ativo" | "cpf">
): Promise<boolean> => {
  try {
    await api.put(`/clientes/${cpf}`, data);

    toast("Cliente atualizado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao atualizar os dados do cliente, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
