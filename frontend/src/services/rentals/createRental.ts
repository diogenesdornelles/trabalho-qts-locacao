import { api } from "@/lib/api-instance/api";
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
      toast(error.response?.data.details[0].message);
    }
    return null;
  }
};
