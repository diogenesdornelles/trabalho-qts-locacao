import { PageTitle } from "@/components/page-title";

const Employees = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Funcionários" backPath="/home" />
    </div>
  );
};

export default Employees;
