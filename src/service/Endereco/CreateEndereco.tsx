import api from "../../api";
import { newEndereco } from "../../models/Endereco";

const CreateEndereco = async (porps: newEndereco): Promise<string> => {
  try {
    const response = await api.post("postEnderecos", porps);

    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar Endereço:", error);
    throw error;
  }
};

export default CreateEndereco;
