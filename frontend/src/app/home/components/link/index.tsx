"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons/lib";

interface LinkProps {
  icon: IconType;
  href: string;
  title: string;
}

export const Link = ({ icon: Icon, href, title }: LinkProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="flex flex-col text-gray-800 items-center justify-evenly gap-4 cursor-pointer p-6 shadow-lg bg-cyan-200 w-50 h-50 rounded-md hover:bg-cyan-100 transition-colors ease-in duration-[0.3s]"
    >
      <p className="font-bold text-xl">{title}</p>
      <Icon size={30} />
    </button>
  );
};
