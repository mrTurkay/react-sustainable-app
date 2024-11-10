import axios from "axios";
import { Configuration, PetApi, StoreApi, UserApi } from "./generated";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  // get tokens etc...
  config.headers["Authorization"] = "";
  return config;
});

const configuration = new Configuration();

const petApi = new PetApi(configuration, undefined, axiosInstance);
const storeApi = new StoreApi(configuration, undefined, axiosInstance);
const userApi = new UserApi(configuration, undefined, axiosInstance);

export { petApi, storeApi, userApi };
