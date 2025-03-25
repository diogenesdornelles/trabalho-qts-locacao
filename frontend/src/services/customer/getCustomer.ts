import { Cliente } from "@/domains/types";
import { api } from "@/lib/api-instance/api";

export const getCustomer = async (cpf: string): Promise<Cliente> => {
  const response = await api.get(`/clientes/${cpf}`);

  return response.data
};
