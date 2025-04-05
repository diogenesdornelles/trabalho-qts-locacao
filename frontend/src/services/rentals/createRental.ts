import { api } from "@/lib/api-instance/api";
import { errorToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

interface RentalResponse {
  cod: string;
  data_hora: string;
  cpf_cliente: string;
}

export const createRental = async (data: {
  cpf_cliente: string;
}): Promise<RentalResponse | null> => {
  try {
    const response = await api.post(`/locacoes`, data);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        error.response?.status === 403
          ? "Operação liberada apenas para o agente de locação"
          : error.response?.data.details?.message;
      toast(message, { style: errorToast, duration: 2000 });
    }
    return null;
  }
};
