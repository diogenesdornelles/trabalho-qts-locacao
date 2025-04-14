import { api } from "@/lib/api-instance/api";
import { errorToast, successToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const deleteEmployee = async (cpf: string): Promise<boolean> => {
  try {
    await api.delete(`/funcionarios/${cpf}`);

    toast("Funcionário excluído!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao excluir o funcionário, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
