import { Route, Routes } from "react-router-dom";

import { UserFood } from "../pages/UserFood";
import { UserHome } from "../pages/UserHome";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/foods/:id" element={<UserFood />} />
    </Routes>
  );
}
