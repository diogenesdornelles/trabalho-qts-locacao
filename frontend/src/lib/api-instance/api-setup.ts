import axios from "axios";
import { parseCookies } from "nookies";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupApiClient = (ctx: any) => {
  const { token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (token) {
    api.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  return api;
};
