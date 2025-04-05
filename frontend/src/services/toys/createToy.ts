import { Brinquedo } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast, successToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const createToy = async (
  data: Omit<Brinquedo, "ativo" | "cod" | "tipoBrinquedo">
): Promise<boolean> => {
  try {
    await api.post(`/brinquedos`, data);

    toast("Brinquedo cadastrado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao cadastrar o brinquedo, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
