import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import Logo from "../../public/GUY-EXPRESS.png";

const MenuList = () => {
  return (
    <Box
      sx={{
        width: 240,
        top: 0,
        left: 0,
        height: "100vh",
        position: "fixed",
        backgroundColor: "#d8d2cb",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "3rem",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "85%",
            height: "auto",
            justifyContent: "center",
            borderRadius: "1rem",
          }}
        />
      </Box>

      <List sx={{ color: "#282a2c", fontFamily: "Poppins, sans-serif" }}>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              "&:hover": {
                backgroundColor: "#b9b5b5",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "1rem", // Ajuste o tamanho conforme necessário
                color: "#282a2c",
              }}
            >
              Página Inicial
            </Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/usuarios"
            sx={{
              "&:hover": {
                backgroundColor: "#b9b5b5",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#282a2c",
              }}
            >
              Usuários
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuList;
