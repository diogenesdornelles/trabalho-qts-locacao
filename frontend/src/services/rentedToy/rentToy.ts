import { BrinquedoLocado } from "@/domains/types";
import { api } from "@/lib/api-instance/api";
import { errorToast } from "@/styles/toast";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const rentToy = async (
  toy: Pick<BrinquedoLocado, "cod_brinquedo" | "cod_locacao">
): Promise<boolean> => {
  try {
    await api.post(`/brinquedosLocados`, toy);
    return false;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status !== 403) {
        toast(error.response?.data.details?.message, {
          duration: 2000,
          style: errorToast,
        });
      }
    }

    return true;
  }
};
