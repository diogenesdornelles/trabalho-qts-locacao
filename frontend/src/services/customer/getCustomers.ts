import { Cliente } from "@/domains/types";
import { api } from "@/lib/api-instance/api";

export const getCustomers = async (): Promise<Cliente[]> => {
  const response = await api.get(`/clientes`);

  return response.data;
};
