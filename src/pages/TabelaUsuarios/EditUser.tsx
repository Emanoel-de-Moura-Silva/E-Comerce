import { Box, Button, Stack, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GetListUser from "../../service/GetListUser";
import { User } from "../../models/User";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await GetListUser();
        const selectedUser = users.find((u: User) => u.id === Number(id));
        if (selectedUser) setUser(selectedUser);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <Box sx={{ paddingLeft: "3rem" }}>Carregando...</Box>;

  const formatDateToInput = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleCancel = () => {
    navigate("/usuarios");
  };

  return (
    <Box>
      <Box
        sx={{
          paddingBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          paddingLeft: "3rem",
        }}
      >
        <Stack
          sx={{
            paddingBottom: "2rem",
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
          }}
        >
          <TextField sx={{ width: "30rem" }} label={"Nome"} value={user.nome} />
          <TextField
            sx={{ width: "30rem" }}
            label={"Email"}
            value={user.email}
          />
        </Stack>

        <Stack
          sx={{
            paddingBottom: "2rem",
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
          }}
        >
          <TextField
            sx={{ width: "15rem" }}
            label={"Telefone"}
            value={user.telefone}
          />
          <TextField
            sx={{ width: "15rem" }}
            label={"Data de Nascimento"}
            type="date"
            value={
              user.data_nascimento
                ? formatDateToInput(user.data_nascimento)
                : ""
            }
            slotProps={{
              htmlInput: {
                maxLength: 10,
              },
              inputLabel: { shrink: true },
            }}
          />
          <Stack
            sx={{ paddingLeft: "5rem", flexDirection: "row", gap: "1rem" }}
          >
            <Button variant="outlined" onClick={handleCancel} color="error">
              Cancelar
            </Button>
            <Button variant="contained" onClick={() => "ola"}>
              Salvar Alterações
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default EditUser;
