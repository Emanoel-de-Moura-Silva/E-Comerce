import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import DataTable from "../components/Datatable";
import { User } from "../models/User";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import GetListUser from "../service/GetListUser";

const columns: GridColDef<User>[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nome", headerName: "Nome", width: 180 },
  { field: "email", headerName: "Email", width: 240 },
  { field: "telefone", headerName: "Telefone", width: 170 },
  { field: "data_nascimento", headerName: "Data de Nascimento", width: 180 },
];

const Usuarios = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const updatedRows = await GetListUser();
        console.log(updatedRows);
        setUserList(updatedRows);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = () => {
    const payload = {
      nome,
      email,
      telefone,
      data_nascimento: new Date(dataNascimento).toISOString(),
    };
    console.log(payload);
  };

  const handleClear = () => {
    setNome("");
    setEmail("");
    setTelefone("");
    setDataNascimento("");
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setTelefone(value);
    }
  };

  const handleCreate = () => {
    return "deu certo ";
  };

  /*   const handleEdit = (user: User) => {
    console.log("Editar:", user);
    // Aqui você pode abrir um modal para edição
  };
  
  const handleDelete = (user: User) => {
    console.log("Deletar:", user);
    // Aqui você pode chamar uma API para deletar o usuário
  }; */

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
          label={"Nome"}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          slotProps={{
            htmlInput: { maxLength: 50 },
          }}
        />
        <TextField
          sx={{ width: "30rem" }}
          label={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          label={"Telefone"}
          value={telefone}
          onChange={handleTelefoneChange}
          slotProps={{
            htmlInput: {
              maxLength: 11,
            },
          }}
        />
        <TextField
          sx={{ width: "15rem" }}
          label={"Data de Nascimento"}
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          slotProps={{
            htmlInput: {
              maxLength: 10,
            },
            inputLabel: { shrink: true },
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
          <Button variant="outlined" onClick={handleClear}>
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
          Lista de Usuários
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ width: "64%" }}>
          <DataTable
            columns={columns}
            rows={userList}
            getRowId={(row) => row.id}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Usuarios;
