// hooks/useApi.ts
import { useState, useCallback } from "react";
import { AxiosRequestConfig } from "axios";
import api from "../lib/axios";

type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  request: (
    url: string,
    method?: ApiMethod,
    body?: any,
    options?: AxiosRequestConfig
  ) => Promise<T>; // ⬅️ FIXED
}

export function useApi<T = any>(): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (
      url: string,
      method: ApiMethod = "GET",
      body?: any,
      options?: AxiosRequestConfig
    ): Promise<T> => {
      setLoading(true);
      setError(null);

      try {
        const config: AxiosRequestConfig = {
          url,
          method,
          data: body,
          ...options,
        };

        const response = await api<T>(config); // ✅ generic type
        setData(response.data);
        return response.data; // ✅ FIXED
      } catch (err: any) {
        setError(
          err.response?.data?.detail || err.message || "Something went wrong"
        );
        throw err; // ✅ rethrow so caller can handle
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, loading, error, request };
}
