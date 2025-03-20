"use client";

import Image from "next/image";


import { RentalForm } from "./components/rental-form";
import { ToysTable } from "./components/toys-table";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen">
      <div className="p-4 flex justify-between w-full">
        <Image src="/logo.png" alt="logo" width={70} height={47} />

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800">Nome Sobrenome</p>
          <div className="w-10 h-10 bg-gray-400 rounded-full" />
        </div>
      </div>

      <h1 className="text-2xl font-bold self-start p-4">Nova locação</h1>

      <div className="flex flex-col w-full items-center gap-6 mt-20 p-20 bg-sky-100">
        <RentalForm />
        <ToysTable />
      </div>
    </div>
  );
}
