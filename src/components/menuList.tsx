import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
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
            width: "75%",
            height: "auto",
            justifyContent: "center",
            borderRadius: "1rem",
          }}
        />
      </Box>
      <List sx={{ text: "#282a2c" }}>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            <ListItemText primary="Página Inicial" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/usuarios"
            sx={{
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            <ListItemText primary="Usuários" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuList;
