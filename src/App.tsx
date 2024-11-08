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
    count: number;
    search: string;
  }>({
    page: 0,
    limit: 5,
    count: 0,
    search: "",
  });

  // Obtener la lista de usuarios
  useEffect(() => {
    // en caso de que no haya una lista de usuarios
    if (!usersList) {
      // La solicitamos a la API
      getUserslist(pagination.limit, pagination.page, pagination.search).then(
        (response) => {
          const result: { rows: User[]; count: number } = response.data;

          setPagination({
            ...pagination,
            count: result.count,
          });
          // Almacenamos la lista de usuarios
          setUsersList([...(result.rows as User[])]);
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
    setPagination({
      ...pagination,
      page,
      limit,
      search,
    });
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
        count={pagination.count}
      />
    </div>
  );
}

export default App;
