import React from "react";
import { useAuth } from "./auth";

function Logout() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Segura de que quieras salir?</label>
        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { Logout };
