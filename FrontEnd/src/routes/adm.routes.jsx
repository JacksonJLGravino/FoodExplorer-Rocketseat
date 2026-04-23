import { Route, Routes } from "react-router-dom";

import { AdmEditFood } from "../pages/AdmEditFood";
import { AdmFood } from "../pages/AdmFood";
import { AdmHome } from "../pages/AdmHome";
import { AdmNewFood } from "../pages/AdmNewFood";

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdmHome />} />
      <Route path="/foods/:id" element={<AdmFood />} />
      <Route path="/new" element={<AdmNewFood />} />
      <Route path="/edit/:id" element={<AdmEditFood />} />
    </Routes>
  );
}
