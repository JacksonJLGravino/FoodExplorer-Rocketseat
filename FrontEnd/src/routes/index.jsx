import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdmRoutes } from "./adm.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {!user ? <AuthRoutes /> : user.is_admin ? <AdmRoutes /> : <AppRoutes />}
    </BrowserRouter>
  );
}
