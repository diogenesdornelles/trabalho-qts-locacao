import { Brinquedo } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const getToys = async (): Promise<Brinquedo[]> => {
  try {
    const response = await api.get(`/brinquedos`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao buscar a lista de brinquedos, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return [];
  }
};
