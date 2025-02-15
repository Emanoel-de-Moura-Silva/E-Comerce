import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import DataTable from "../../components/Datatable";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Endereco, newEndereco } from "../../models/Endereco";
import GetListEndereco from "../../service/Endereco/GetListEndereco";
import CreateEndereco from "../../service/Endereco/CreateEndereco";
import DeleteEndereco from "../../service/Endereco/DeleteEndereco";

const columns: GridColDef<Endereco>[] = [
  { field: "id_usuario", headerName: "ID", width: 70 },
  { field: "rua", headerName: "RUA", width: 180 },
  { field: "cidade", headerName: "Cidade", width: 240 },
  { field: "estado", headerName: "Estado", width: 170 },
  { field: "cep", headerName: "CEP", width: 180 },
];

const Usuarios = () => {
  const [EnderecoList, setEnderecoList] = useState<Endereco[]>([]);
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState<string>("");
  const [cep, setCep] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const updatedRows = await GetListEndereco();
        setEnderecoList(updatedRows);
      } catch (error) {
        console.error("Erro ao buscar Endereço:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = () => {
    const payload = {
      rua,
      cidade,
      estado,
      cep,
    };
    console.log(payload);
  };

  const handleClear = () => {
    setRua("");
    setCidade("");
    setEstado("");
    setCep("");
  };

  const handleEdit = (props: Endereco) => {
    if (props) {
      navigate(`/editEndereco/${props.id_usuario}`);
    }
  };

  const handleCreate = async () => {
    const novoCreateEndereco: newEndereco = {
      rua,
      cidade,
      estado,
      cep,
    };

    try {
      const mensagem = await CreateEndereco(novoCreateEndereco);
      alert(mensagem);
      handleClear();
      const updatedRows = await GetListEndereco();
      setEnderecoList(updatedRows);
    } catch (error) {
      console.error("Erro ao cadastrar Endereço:", error);
      alert(
        "Erro ao cadastrar Endereço. Verifique o console para mais detalhes."
      );
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir este Endereço?"))
      return;

    try {
      await DeleteEndereco(id);
      const updatedRows = await GetListEndereco();
      setEnderecoList(updatedRows);
    } catch (error) {
      console.error("Erro ao deletar Endereço:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          paddingBottom: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "30rem" }}
          label={"Rua"}
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          slotProps={{
            htmlInput: { maxLength: 50 },
          }}
        />
        <TextField
          sx={{ width: "30rem" }}
          label={"Cidade"}
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          slotProps={{
            htmlInput: { maxLength: 100 },
          }}
        />
      </Box>
      <Box
        sx={{
          paddingBottom: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "15rem" }}
          label={"Estado"}
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          slotProps={{
            htmlInput: {
              maxLength: 11,
            },
          }}
        />
        <TextField
          sx={{ width: "15rem" }}
          label={"CEP"}
          value={cep}
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, "");
            setCep(numericValue);
          }}
        />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "2rem",
            paddingLeft: "7rem",
            gap: "1rem",
          }}
        >
          <Button variant="outlined" onClick={handleClear} color="error">
            Limpar
          </Button>
          <Button
            sx={{ backgroundColor: "green" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Consultar
          </Button>
          <Button variant="contained" onClick={handleCreate}>
            Cadastrar
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" component="h2">
          Lista de Endereços
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ width: "64%" }}>
          <DataTable
            columns={columns}
            rows={EnderecoList}
            getRowId={(row) => row.id_usuario}
            onDelete={(props) => handleDelete(props.id_usuario)}
            onEdit={handleEdit}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Usuarios;
