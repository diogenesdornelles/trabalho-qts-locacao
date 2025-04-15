import { Funcionario } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const getEmployees = async (): Promise<Funcionario[]> => {
  try {
    const response = await api.get(`/funcionarios`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao buscar a lista de funcionários, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return [];
  }
};
