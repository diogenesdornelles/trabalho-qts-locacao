"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Funcionario } from "../../domains/types";
import axios from "axios";
import { setCookie, destroyCookie } from "nookies";
import { toast } from "sonner";
import { errorToast } from "@/styles/toast";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api-instance/api";

interface AuthContextData {
  user: Omit<Funcionario, "ativo"> | undefined;
  login: (cpf: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [funcionario, setFuncionario] = useState<Omit<Funcionario, "ativo">>();

  const router = useRouter();

  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem("employee")!);

    if (!employee) {
      destroyCookie(undefined, "token");
      router.push("/login");
    } else {
      setFuncionario(employee);
    }
  }, [router]);

  const login = useCallback(
    async (cpf: string, password: string) => {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          {
            cpf,
            senha: password,
          }
        );

        console.log(data);

        const newFuncionario: Omit<Funcionario, "ativo"> = {
          cpf: data.funcionario.cpf,
          nome: data.funcionario.nome,
          funcao: data.funcionario.funcao,
          token: data.token,
        };

        setFuncionario(newFuncionario);
        localStorage.setItem("employee", JSON.stringify(newFuncionario));

        if (data?.token) {
          setCookie(undefined, "token", data.token, {
            maxAge: 60 * 60 * 24 * 2, // 2 days
            path: "/",
          });

          api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        }

        router.push("/home");
      } catch {
        toast("Usuário ou senha inválidos", {
          style: errorToast,
          duration: 2000,
        });
      }
    },
    [router]
  );

  const logout = useCallback(() => {
    localStorage.clear();
    destroyCookie(undefined, "token");

    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user: funcionario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within a AuthProvider");

  return context;
};
