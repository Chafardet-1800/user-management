"use client";
import "./App.css";

import { useEffect, useState } from "react";
import UsersList from "./components/usersList";
import { User } from "../lib/models/users.models";
import { getUserslist } from "../lib/services/users.services";

function App() {
  // Lista de usuarios
  const [usersList, setUsersList] = useState<User[] | null>(null);
  const [pagination, setPagination] = useState<{
    page: number;
    limit: number;
    search: string;
  }>({
    page: 0,
    limit: 10,
    search: "",
  });

  // Obtener la lista de usuarios
  useEffect(() => {
    // en caso de que no haya una lista de usuarios
    if (!usersList) {
      // La solicitamos a la API
      getUserslist(pagination.limit, pagination.page, pagination.search).then(
        (response) => {
          // Almacenamos la lista de usuarios
          setUsersList([...(response.data as User[])]);
        }
      );
    }
  }, [usersList, pagination]);

  // Funcion para recargar la lista de usuarios
  const refreshList = () => {
    setUsersList(null);
  };

  // Funcion para recargar la lista de usuarios
  const changePage = (page: number, limit: number, search: string) => {
    setPagination({ page, limit, search });
    setUsersList(null);
  };

  return (
    // Contenedor principal
    <div
      className="bg-[url('/images/bg.jpeg')] bg-cover h-[100vh] w-full flex flex-col 
      justify-center items-center p-4 gap-[5rem]"
    >
      {/* Encabezado */}
      <h1 className="text-3xl uppercase">Manejador de usuarios</h1>

      {/* Lista de usuarios */}
      <UsersList
        list={usersList}
        refresh={refreshList}
        pagination={changePage}
      />
    </div>
  );
}

export default App;
