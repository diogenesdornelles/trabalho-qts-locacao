"use client";

import { useAuth } from "@/app/contexts/authContext";
import Image from "next/image";

export const Layout = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="p-4 flex justify-between w-full shadow-md">
        <Image src="/logo.png" alt="logo" width={70} height={47} />

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800">{user?.nome}</p>
          <div className="w-10 h-10 bg-gray-400 rounded-full" />
        </div>
      </div>
    </>
  );
};
