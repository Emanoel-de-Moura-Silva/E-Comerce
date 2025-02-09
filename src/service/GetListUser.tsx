import api from "../../src/api/";
import { User } from "../models/User";

const GetListUser = async (): Promise<User[]> => {
  try {
    const response = await api.get("getTabela", {
      params: { tabelaa: "Usuarios" },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    throw error;
  }
};

export default GetListUser;
