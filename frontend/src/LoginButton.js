import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button variant="info" onClick={() => loginWithRedirect()}>Inicio de sesión</button>;
};
