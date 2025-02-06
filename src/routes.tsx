import { Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  );
};

export default AppRoutes;
