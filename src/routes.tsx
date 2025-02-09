import { Routes, Route, Navigate } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Enderecos from "./pages/Enderecos";
import Entrega from "./pages/Entrega";
import Motoristas from "./pages/Motoristas";
import Pedido_Produto from "./pages/Pedido_Produto";
import Pedidos from "./pages/Pedidos";
import Produtos from "./pages/Produtos ";
import Transportadoras from "./pages/Transportadoras";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/usuarios" />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/endereços" element={<Enderecos />} />
      <Route path="/entrega" element={<Entrega />} />
      <Route path="/motoristas" element={<Motoristas />} />
      <Route path="/pedido_produto" element={<Pedido_Produto />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/transportadoras" element={<Transportadoras />} />
    </Routes>
  );
};

export default AppRoutes;
