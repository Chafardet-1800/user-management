"use client";
import "./App.css";

import { useEffect, useState } from "react";
import UsersList from "./components/usersList";
import { User } from "../lib/models/users.models";
import { getUserslist } from "../lib/services/users.services";

function App() {
  // Lista de usuarios
  const [usersList, setUsersList] = useState<User[] | null>(null);

  // Obtener la lista de usuarios
  useEffect(() => {
    // en caso de que no haya una lista de usuarios
    if (!usersList) {
      // La solicitamos a la API
      getUserslist().then((response) => {
        // Almacenamos la lista de usuarios
        setUsersList([...(response.data as User[])]);
      });
    }
  }, [usersList]);

  return (
    // Contenedor principal
    <div
      className="bg-[url('/images/bg.jpeg')] bg-cover h-[100vh] w-full flex flex-col 
      justify-center items-center p-4 gap-[5rem]"
    >
      {/* Encabezado */}
      <h1 className="text-3xl uppercase">Manejador de usuarios</h1>

      {/* Lista de usuarios */}
      <UsersList list={usersList} />
    </div>
  );
}

export default App;
