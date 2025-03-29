"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../contexts/authContext";
import { useState } from "react";

const schema = Yup.object().shape({
  cpf: Yup.string()
    .required("Informe o cpf")
    .test(
      "validade CPF",
      "O CPF deve ter 11 caracteres, somente números",
      (cpf) => {
        return /^\d{11}$/.test(cpf);
      }
    ),
  password: Yup.string().required("Informe a senha"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors, isSubmitting } = formState;
  const { login } = useAuth();

  const onSubmit = async (data: Yup.InferType<typeof schema>) => {
    await login(data.cpf, data.password);
  };

  return (
    <div className="flex justify-center items-center bg-sky-200 w-full h-full min-h-screen">
      <div className="flex flex-col justify-center p-9 items-center bg-gray-100 max-w-[500px] min-w-[500px] rounded-lg shadow-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[70%] gap-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold leading-0 mt-5">Login</h1>
            <Image src="/logo.png" alt="logo" width={70} height={47} />
          </div>

          <hr />

          <div>
            <label
              className="flex items-center gap-2 font-semibold text-lg text-cyan-500"
              htmlFor="cpf"
            >
              <FaUser />
              CPF
            </label>
            <Input
              type="text"
              className="border-cyan-500 focus-visible:ring-cyan-500/40"
              {...register("cpf")}
            />
            {errors.cpf && (
              <span className="text-destructive absolute font-semibold">
                {errors.cpf.message}
              </span>
            )}
          </div>

          <div>
            <label
              className="flex items-center gap-2 font-semibold text-lg text-cyan-500"
              htmlFor="password"
            >
              <FaLock />
              Senha
            </label>
            <div className="flex items-center w-[110%] gap-2">
              <Input
                type={showPassword ? "text" : "password"}
                className="border-cyan-500 relative focus-visible:ring-cyan-500/40"
                {...register("password")}
              />
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <FaEyeSlash size={20} className="text-cyan-500" />
                ) : (
                  <FaEye size={20} className="text-cyan-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-destructive absolute font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button
            disabled={isSubmitting}
            type="submit"
            className="p-5 cursor-pointer mt-4 bg-pink-600 hover:bg-pink-500 text-xl font-bold"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
