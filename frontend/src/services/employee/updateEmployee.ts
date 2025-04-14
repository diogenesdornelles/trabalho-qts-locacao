import { Funcionario } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast, successToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const updateEmployee = async (
  cpf: string,
  data: Omit<Funcionario, "ativo" | "cpf">
): Promise<boolean> => {
  try {
    await api.put(`/funcionarios/${cpf}`, data);

    toast("Funcionário atualizado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao atualizar os dados do funcionário, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
