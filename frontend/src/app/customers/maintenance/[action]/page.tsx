"use client";

import { PageTitle } from "@/components/page-title";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/authContext";
import { CustomerForm } from "../../components/customer-form";

const ClientMaintenance = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { action } = useParams();

  useEffect(() => {
    const isRegisterAnalist = user?.funcao === "ANALISTA_CADASTRO";

    if (!isRegisterAnalist) router.push('/customers');
  }, [router, user?.funcao]);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle
        title={action === "new" ? "Cadastro de clientes" : "Atualizar cliente"}
        backPath="/customers"
      />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <CustomerForm />
      </div>
    </div>
  );
};

export default ClientMaintenance;
