"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const PageTitle = ({
  title,
  backPath,
}: {
  title: string;
  backPath: string;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(backPath)}
      className="flex text-pink-600 ml-2 cursor-pointer items-center self-start"
    >
      <ChevronLeft className="mt-1 " strokeWidth={3} />
      <h1 className="text-2xl font-bold px-2 py-4">{title}</h1>
    </div>
  );
};
