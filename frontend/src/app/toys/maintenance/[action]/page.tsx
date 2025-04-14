"use client";

import { PageTitle } from "@/components/page-title";
import { ToyForm } from "../../components/toy-form";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/app/contexts/authContext";

const ToyMaintenance = () => {
  const { action } = useParams();

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const isStorekeeper = user?.funcao === "ALMOXARIFE";

    if (!isStorekeeper) router.back();
  }, [router, user?.funcao]);

  return (
    <div className="flex flex-col justify-center w-full h-full">
      <PageTitle
        title={action === "new" ? "Novo brinquedo" : "Alterar brinquedo"}
        backPath="/toys"
      />
      <div className="flex flex-col w-full items-center align-self-center border-2 border-t-cyan-600 border-b-cyan-600 gap-6 p-20 min-h-[700px] bg-cyan-200">
        <ToyForm />
      </div>
    </div>
  );
};

export default ToyMaintenance;
