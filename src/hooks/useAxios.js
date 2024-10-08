/* eslint-disable no-useless-catch */
import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  
  useEffect(() => {
    // Add a request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_URL}/auth/refresh-token`,
              { refreshToken }
            );

            const { accessToken } = response.data;

            setAuth({ ...auth, authToken: accessToken });

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );

    //clean up
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.request.eject(responseIntercept);
    };
  }, [auth.authToken]);

  return { api };
};

export default useAxios;
