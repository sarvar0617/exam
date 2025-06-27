import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "X-API-KEY": "c8263f65-9f27-482f-996e-f83c6f9cd965",
  },
});
