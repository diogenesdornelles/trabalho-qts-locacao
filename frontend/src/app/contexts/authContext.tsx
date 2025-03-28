"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Funcionario } from "../../domains/types";
import axios from "axios";
import { setCookie } from "nookies";
import { api } from "@/lib/api-instance/api";

interface AuthContextData {
  user: Funcionario;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [funcionario, setFuncionario] = useState<Funcionario>();

  useEffect(() => {
    const fetchCredentials = async () => {
      console.log("entrou");
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          {
            cpf: "11111111111",
            senha: "@123abcABC",
          }
        );

        const newFuncionario: Funcionario = {
          cpf: data.funcionario.cpf,
          nome: data.funcionario.nome,
          funcao: data.funcionario.funcao,
          token: data.token,
        };

        setFuncionario(newFuncionario);

        if (data?.token) {
          setCookie(undefined, "token", data.token, {
            maxAge: 60 * 30, // 30 minutes
            path: "/",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCredentials();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: funcionario!,
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
