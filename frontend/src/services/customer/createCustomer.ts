import { errorToast, successToast } from "@/app/new-rental/styles/toast";
import { Cliente } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const createCustomer = async (data: Cliente): Promise<boolean> => {
  try {
    await api.post(`/clientes`, data);

    toast("Cliente cadastrado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.message ||
          "Ocorreu um erro ao cadastrar o cliente, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
