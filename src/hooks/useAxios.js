import { useAuth } from "./useAuth";
import { api } from "../api";
import { useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // Request Interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken; // Ensure correct key is used
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        console.log("Request Config:", config);
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Check for 401 Unauthorized and ensure retry is attempted once
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = auth?.refreshToken;

            if (!refreshToken) {
              // Handle missing refresh token case
              throw new Error("No refresh token available");
            }

            const response = await axios.post(
              `${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh-token`,
              { refreshToken }
            );

            const { accessToken, refreshToken: newRefreshToken } =
              response.data.data;

            // Update auth state with new token
            setAuth((prev) => ({
              ...prev,
              authToken: accessToken,
              refreshToken: newRefreshToken,
            }));

            // Update original request with new token
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            // Retry the original request
            return api(originalRequest);
          } catch (refreshError) {
            console.error("Failed to refresh token:", refreshError);
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on unmount
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth]); // Include all necessary dependencies

  return { api };
};

export default useAxios;
