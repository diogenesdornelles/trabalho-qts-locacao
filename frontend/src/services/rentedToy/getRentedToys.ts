import { BrinquedoLocado } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const getRentedToys = async (): Promise<BrinquedoLocado[] | null> => {
  try {
    const response = await api.get(`/brinquedosLocados`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status !== 403) {
        toast(error.response?.data.details?.message, {
          duration: 2000,
          style: errorToast,
        });
      }
    }

    return [];
  }
};
