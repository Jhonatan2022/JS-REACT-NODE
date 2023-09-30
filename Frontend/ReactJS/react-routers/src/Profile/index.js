import React from "react";
import { useAuth } from "../Auth/auth";

function Profile() {
  const auth = useAuth();

  return (
    <>
      <h1>Perfil</h1>
      <p>Welcome, {auth.user.username}</p>
    </>
  );
}

export { Profile };
