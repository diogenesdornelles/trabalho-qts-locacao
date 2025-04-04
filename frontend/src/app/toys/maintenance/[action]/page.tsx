import { PageTitle } from "@/components/page-title";
import { ToyForm } from "../../components/toy-form";

const NewToy = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <PageTitle title="Novo brinquedo" backPath="/home" />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <ToyForm />
      </div>
    </div>
  );
};

export default NewToy;
