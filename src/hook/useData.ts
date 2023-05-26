import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";


interface DataResponsive<T> {
    count: number;
    results: T[];
  }


const useData = <T> (endpoint: string,RequestConfig? : AxiosRequestConfig,Deps?: any[]) => {
    const [data, setGenre] = useState<T[]>([]);
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<DataResponsive<T>>(endpoint, { signal: controller.signal,...RequestConfig })
        .then((res) => {
          setGenre(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
        return () => controller.abort();
    },Deps? [...Deps]:[] );
  
    return { data, error, isLoading };
}

export default useData