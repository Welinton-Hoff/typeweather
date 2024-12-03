import { api } from "../api";
import { ICityAPIResponse } from "../../@types/network/city";

async function getCityByName(name: string) {
  return await api.get<ICityAPIResponse>(`/weather?q=${name}`);
}

export { getCityByName };
