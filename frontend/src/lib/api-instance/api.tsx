import { useAuth } from "@/domains/authContext";
import axios from "axios";

export const useApi = () => {
  const { user } = useAuth();

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return api;
};
