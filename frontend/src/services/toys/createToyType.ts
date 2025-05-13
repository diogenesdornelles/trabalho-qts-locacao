import { api } from "@/lib/api-instance/api";
import { errorToast, successToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const createToyType = async (type: {
  nome: string;
}): Promise<boolean> => {
  try {
    await api.post(`/tiposBrinquedos`, type);

    toast("Tipo de brinquedo criado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao cadastrar o tipo de brinquedo, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
