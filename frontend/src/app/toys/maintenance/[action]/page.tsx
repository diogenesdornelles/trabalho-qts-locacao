import { ToyForm } from "../../components/toy-form";

const NewToy = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl font-bold self-start p-4 text-cyan-600">
        Novo brinquedo
      </h1>
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <ToyForm />
      </div>
    </div>
  );
};

export default NewToy;
