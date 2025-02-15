import api from "../../api";
import { Endereco } from "../../models/Endereco";

const GetListEndereco = async (): Promise<Endereco[]> => {
  try {
    const response = await api.get("/getEnderecos", {
      params: { tabelaa: "Enderecos" },
    });

    console.log("Resposta da API:", response.data);

    const updatedRows = response.data.map((props: Endereco[]) => ({
      id_usuario: props[0],
      rua: props[1],
      cidade: props[2],
      estado: props[3],
      cep: props[4],
    }));

    return updatedRows;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export default GetListEndereco;
