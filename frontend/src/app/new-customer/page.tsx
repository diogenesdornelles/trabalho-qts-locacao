import { PageTitle } from "@/components/page-title";
import { CustomerForm } from "./components/customer-form";

const NewClient = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Cadastro de clientes" backPath="/home" />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <CustomerForm />
      </div>
    </div>
  );
};

export default NewClient;
