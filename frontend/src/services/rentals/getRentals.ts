import { Locacao } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const getRentals = async (): Promise<Locacao[]> => {
  try {
    const response = await api.get(`/locacoes`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        error.response?.data.details?.message ||
        "Ocorreu um erro ao buscar as locações";
      toast(message, { style: errorToast, duration: 2000 });
    }
    return {} as Locacao[];
  }
};
