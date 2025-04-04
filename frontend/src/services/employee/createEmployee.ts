import { errorToast, successToast } from "@/app/new-rental/styles/toast";
import { Funcionario } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const createEmployee = async (
  data: Omit<Funcionario, "ativo" | "token">
): Promise<boolean> => {
  try {
    await api.post(`/funcionarios`, data);

    toast("Funcionário cadastrado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao cadastrar o funcionário, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
