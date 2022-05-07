import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.90.30.30:3333",
});
