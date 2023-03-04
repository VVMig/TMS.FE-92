import axios from "axios";

const api = axios.create({
  baseURL: "https://studapi.teachmeskills.by/",
});

export { api };

export * from "./auth";
