"use client";

import { PageTitle } from "@/components/page-title";

export default function Toys() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <PageTitle title="Brinquedos" backPath="/home" />
      <div className="flex flex-col w-full items-center border-2 border-t-cyan-600 border-b-cyan-600 align-self-center gap-6 p-20 min-h-[700px] bg-cyan-200"></div>
    </div>
  );
}
