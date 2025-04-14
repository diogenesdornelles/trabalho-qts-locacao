import { PageTitle } from "@/components/page-title";
import { CustomerForm } from "../../components/customer-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/authContext";

const NewClient = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const isRegisterAnalist = user?.funcao === "ANALISTA_CADASTRO";

    if (!isRegisterAnalist) router.back();
  }, [router, user?.funcao]);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Cadastro de clientes" backPath="/customers" />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <CustomerForm />
      </div>
    </div>
  );
};

export default NewClient;
