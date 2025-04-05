"use client";

import { useAuth } from "@/app/contexts/authContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Layout = () => {
  const { user, logout } = useAuth();

  const pathName = usePathname();

  return pathName !== "/login" && pathName !== "/" ? (
    <>
      <div className="p-4 flex justify-between w-full shadow-md">
        <Image src="/logo.png" alt="logo" width={70} height={47} />

        <div className="flex items-center gap-6">
          <p className="text-xl font-bold text-gray-800">{user?.nome}</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center p-[1px] w-8 h-8 rounded-full cursor-pointer hover:bg-gray-200 transition-all ease duration-[0.2s]">
                <MenuIcon />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 mt-4">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                className="flex justify-between"
              >
                Sair
                <LogOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  ) : null;
};
