import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const authorizedApi = axios.create();

export function withAxiosIntercepted<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  return function AxiosIntercepted(props: T) {
    const navigate = useNavigate();
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
      axios.interceptors.request.use(config => {
        config.baseURL = process.env.REACT_APP_API_URL;
        return config;
      });


      authorizedApi.interceptors.request.use(config => {
        if (config?.headers) {
          (config.headers as Record<string, string>)["Authorization"] = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
        }


        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            navigate("/login");
          }
          return Promise.reject(error);
        }
      );

      setIsInitialized(true);
    }, [navigate]);

    return isInitialized ? <Component {...props} /> : <></>;
  };
}
