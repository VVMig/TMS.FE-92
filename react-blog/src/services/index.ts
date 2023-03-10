import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { refreshJWT } from "./auth";

const api = axios.create({
  baseURL: "https://studapi.teachmeskills.by/",
});

let isOriginalRequestRetry = false;

api.interceptors.response.use(
  function (response) {
    isOriginalRequestRetry = false;

    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        if (!isOriginalRequestRetry) {
          isOriginalRequestRetry = true;

          const refreshToken = localStorage.getItem(
            LOCAL_STORAGE_KEYS.REFRESH_TOKEN
          );

          if (!refreshToken) {
            throw error;
          }

          const { data } = await refreshJWT(refreshToken);

          localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, data.access);

          api.defaults.headers.common.Authorization = "Bearer " + data.access;
          originalRequest.headers.Authorization = "Bearer " + data.access;

          return api(originalRequest);
        }
      } else if (error.code === "ERR_NETWORK") {
        toast.error(error.message);
      } else {
        if (error.response?.data?.detail) {
          toast.error(error.response?.data?.detail);
        } else {
          const objects: [][] = Object.values(error.response?.data);

          objects.forEach((errors: string[]) => {
            errors.forEach((errorMessage) => {
              toast.error(errorMessage);
            });
          });
        }
      }
    }

    throw error;
  }
);

export { api };

export * from "./auth";
