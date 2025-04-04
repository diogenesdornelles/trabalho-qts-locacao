import { PageTitle } from "@/components/page-title";
import { EmployeeForm } from "../../components/employee-form";

const NewToy = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Cadastro de funcionários" backPath="/home" />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-y-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <EmployeeForm />
      </div>
    </div>
  );
};

export default NewToy;
