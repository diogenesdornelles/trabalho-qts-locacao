import { errorToast } from "@/app/new-rental/styles/toast";
import { BrinquedoLocado } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const rentToy = async (toy: BrinquedoLocado): Promise<boolean> => {
  try {
    await api.post(`/brinquedosLocados`, toy);
    return false;
  } catch (error) {
    if (isAxiosError(error)) {
      toast(error.response?.data.details?.[0]?.message, {
        duration: 2000,
        style: errorToast,
      });
    }

    return true;
  }
};
