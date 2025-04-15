import { Pagamento } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast, successToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const payRental = async (data: Pagamento): Promise<boolean> => {
  try {
    await api.post(`/pagamentos`, data);

    toast("Pagamento realizado!", {
      duration: 2000,
      style: successToast,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      toast(
        error.response?.data?.details ||
          "Ocorreu um erro ao realizar o pagamento, tente novamente.",
        {
          duration: 2000,
          style: errorToast,
        }
      );
    }

    return false;
  }
};
