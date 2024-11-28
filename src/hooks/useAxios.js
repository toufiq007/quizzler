import { useAuth } from "./useAuth";
import { api } from "../api";
import { useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    // request interceptors
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.accessToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        console.log(config, "this is from request interceptors");
        return config;
      },
      (err) => Promise.reject(err)
    );

    // response intercept
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (err) => {
        const originalRequest = err.config;
        if (err.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh-token`,
              { refreshToken }
            );
            const { accessToken } = response.data.data;
            setAuth({ ...auth, authToken: accessToken });
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          } catch (err) {
            console.log(err);
          }
        }
        return Promise.reject(err);
      }
    );

    // clear method
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth?.accessToken]);
  return { api };
};

export default useAxios;
