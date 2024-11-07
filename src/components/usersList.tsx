import { User } from "../../lib/models/users.models";
import { DialogModel, FormInputConfigModel } from "../../lib/models/dialog";
import Spinner from "./spinner";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Dialog from "./dialog";
import {
  postNewUser,
  deleteUser,
  updateUser,
} from "../../lib/services/users.services";
import { Snackbar, SnackbarCloseReason, TablePagination } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import UserItem from "./userItem";
import CustomInput from "./customInput";

const UsersList = ({
  list,
  refresh,
  pagination,
}: {
  list: User[] | null;
  refresh: () => void;
  pagination: (page: number, limit: number, search: string) => void;
}) => {
  /**
   * Modelo del dialogo
   */

  const [modelDialog, setModelDialog] = useState<DialogModel | false>(false);
  const [detailDialog, setDetailDialog] = useState<User | false>(false);

  // Funcion para abrir el dialogo
  const modifyDialog = (
    modelDialog: "create" | "edit" | "delete",
    user?: User
  ) => {
    let result: DialogModel;

    if (modelDialog === "create") {
      // Configuracion del formulario para crear una nueva tarea
      const createUserConfig: FormInputConfigModel[] = [
        {
          name: "name",
          type: "text",
          value: "",
          placeholder: "Nombre de usuario",
          required: true,
          fullWidth: true,
          style: "",
        },
        {
          name: "email",
          type: "email",
          value: "",
          placeholder: "Correo electronico",
          required: true,
          fullWidth: true,
          style: "",
        },
      ];

      result = {
        title: "Indique los datos del nuevo usuario",
        message: "",
        cancelText: "Cancelar",
        confirmText: "Crear",
        onConfirm: (userData: object) => newUser(userData),
        config: createUserConfig,
      };
      setModelDialog(result);
      return;
    }
    if (modelDialog === "edit") {
      // Configuracion del formulario para editar un usuario
      const editUserConfig: FormInputConfigModel[] = [
        {
          name: "id",
          type: "hidden",
          value: user?.id || "",
          placeholder: "Nombre de usuario",
          required: true,
          fullWidth: true,
          style: "",
        },
        {
          name: "name",
          type: "text",
          value: user?.name || "",
          placeholder: "Nombre de usuario",
          required: true,
          fullWidth: true,
          style: "",
        },
        {
          name: "email",
          type: "email",
          value: user?.email || "",
          placeholder: "Correo electronico",
          required: true,
          fullWidth: true,
          style: "",
        },
      ];

      result = {
        title: "Indique los nuevos datos para el usuario",
        message: "",
        cancelText: "Cancelar",
        confirmText: "Actulizar",
        onConfirm: (userData: object) => editUserFuntion(userData),
        config: editUserConfig,
      };

      console.log(editUserConfig);

      setModelDialog(result);
      return;
    }
    if (modelDialog === "delete") {
      // Configuracion del formulario para editar un usuario
      const delteUserConfig: FormInputConfigModel[] = [
        {
          name: "id",
          type: "hidden",
          value: user?.id || "",
          placeholder: "Nombre de usuario",
          required: true,
          fullWidth: true,
          style: "",
        },
      ];

      result = {
        title: "¿Seguro que desea eliminar el usuario?",
        message: "",
        cancelText: "Cancelar",
        confirmText: "Eliminar",
        classButton: "cancel",
        onConfirm: (userData: object) => deleteUserFuntion(userData),
        config: delteUserConfig,
      };
      setModelDialog(result);

      return;
    }

    setModelDialog(false);
  };

  // Funcion para cerrar el dialogo
  const closeDialog = () => {
    setModelDialog(false);
    setDetailDialog(false);
  };

  // Funcion para crear un nuevo usuario
  const newUser = async (userData: object) => {
    postNewUser(userData as User)
      .then((response) => {
        // Inidcamos el mensaje de exito
        handleSnackbar(response.message);

        // Refrescamos la lista
        refresh();

        // Cerramos el dialogo
        closeDialog();
      })
      .catch((error) => {
        // Inidcamos el mensaje de error
        handleSnackbar(error.response.data.message);
      });
  };

  // Funcion para editar un usuario
  const editUserFuntion = async (userData: object) => {
    updateUser(userData as User)
      .then((response) => {
        // Inidcamos el mensaje de exito
        handleSnackbar(response.message);

        // Refrescamos la lista
        refresh();

        // Cerramos el dialogo
        closeDialog();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // Funcion para eliminar un usuario
  const deleteUserFuntion = async (userData: object) => {
    deleteUser((userData as User).id || "")
      .then((response) => {
        // Inidcamos el mensaje de exito
        handleSnackbar(response.message);

        // Refrescamos la lista
        refresh();

        // Cerramos el dialogo
        closeDialog();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  /**
   * Modelo del snackbar
   */

  // Estado del snackbar
  const [open, setOpen] = useState<
    { message: string; duration: number } | false
  >(false);

  // Funcion para abrir el snackbar
  const handleSnackbar = (message: string = "", duration: number = 3000) => {
    setOpen({
      message,
      duration,
    });
  };

  // Funcion para cerrar el snackbar
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    if (!event) return;

    setOpen(false);
  };

  // Boton de cierre del snackbar
  const closeSnackbarComponent = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  /**
   * Paginado de la tabla
   */
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Funcion para cambiar la busqueda
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    pagination(0, rowsPerPage, value);
  };

  // Funcion para cambiar la pagina
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    if (!event) return;
    setPage(newPage);
    pagination(newPage, rowsPerPage, "");
  };

  // Funcion para cambiar el numero de filas
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    pagination(0, parseInt(event.target.value, 10), "");
  };

  return (
    // COntenedor de la tabla
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] ">
      {/* Boton para agregar usuarios y el search */}
      <div className="w-full flex justify-between py-3">
        {/* Buscador */}
        <CustomInput
          type="text"
          name="search"
          value={search}
          onChange={handleChangeSearch}
          required={false}
          placeholder="Buscar por nombre"
          disable={false}
          fullWidth={false}
          width={"max-md:w-{80%} w-1/3"}
        ></CustomInput>

        <button
          type="button"
          onClick={() => modifyDialog("create")}
          className="max-md:hidden min-md-flex ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Agregar usuario
        </button>

        <div
          className="hidden max-md:flex"
          onClick={() => modifyDialog("create")}
        >
          <Tooltip title="Editar">
            <IconButton>
              <AddIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      {/* Evaluamos si la lista es vacia */}
      {!list || list!.length === 0 ? (
        // En caso de que la lista este vacia ponemos el spinner
        <div className="h-[300px]">
          <Spinner />
        </div>
      ) : (
        // En caso de que la lista no este vacia mostramos la tabla
        <table className="w-full text-sm text-left rtl:text-right text-gray-400 rounded">
          {/* Encabezado */}
          <thead className="text-xs uppercase bg-gray-700 text-gray-400 rounded">
            {/* Fila del encabezado */}
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                ID
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Nombre
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>

              <th scope="col" className="py-3 text-center">
                <span className="sr-only"></span>
              </th>

              <th scope="col" className="py-3 text-center">
                <span className="sr-only"></span>
              </th>

              <th scope="col" className="py-3 text-center">
                <span className="sr-only"></span>
              </th>
            </tr>
          </thead>

          {/* Cuerpo de la tabla */}
          <tbody>
            {list!.map((user: User) => (
              <tr
                key={user.id}
                className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600"
              >
                {/* ID con funcion para copiar al portapapeles */}
                <td
                  scope="row"
                  className="w-[25%] px-6 py-4 text-center "
                  data-tooltip-target="tooltip-bottom"
                  data-tooltip-placement="bottom"
                  onClick={() => {
                    navigator.clipboard.writeText(user.id?.toString() || "");
                    handleSnackbar("Copiado");
                  }}
                >
                  <Tooltip title="Copiar">
                    <span className="cursor-pointer">
                      {user.id?.toString()}
                    </span>
                  </Tooltip>
                </td>

                {/* Nombre del usuario */}
                <td
                  scope="row"
                  className="text-center w-[25%] px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {user.name}
                </td>

                {/* Email del usuario */}
                <td className="text-center w-[25%] px-6 py-4">{user.email}</td>

                {/* Botones de editar */}
                <td className="px-2 py-4 text-right">
                  <Tooltip title="Editar">
                    <IconButton onClick={() => modifyDialog("edit", user)}>
                      <EditIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  </Tooltip>
                </td>

                {/* Botones de borrar */}
                <td className="px-2 py-4 text-right">
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => modifyDialog("delete", user)}>
                      <DeleteIcon sx={{ color: "#E91E63" }} />
                    </IconButton>
                  </Tooltip>
                </td>

                {/* Botones de borrar */}
                <td className="px-2 py-4 text-right">
                  <Tooltip title="Detalle">
                    <IconButton onClick={() => setDetailDialog(user)}>
                      <InfoIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
            {/* Paginado */}
            <tr>
              <td
                colSpan={6}
                className=" p-3 bg-gray-700 text-gray-400 w-full "
              >
                <TablePagination
                  component="div"
                  count={100}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {/* Dialog para crear una nueva tarea */}
      {modelDialog && list && (
        <Dialog
          title={modelDialog.title}
          formConfig={modelDialog.config}
          cancelText={modelDialog.cancelText}
          confirmText={modelDialog.confirmText}
          classButton={modelDialog.classButton || "confirm"}
          onCancel={closeDialog}
          onConfirm={(data: object) => modelDialog.onConfirm(data)}
        />
      )}

      {/* Dialog para crear una nueva tarea */}
      {detailDialog && <UserItem user={detailDialog} onCancel={closeDialog} />}

      {/* Snackbar para notificar resultados */}
      <Snackbar
        open={Boolean(open)}
        autoHideDuration={open ? open.duration : 0}
        onClose={handleClose}
        message={open ? open.message : ""}
        action={closeSnackbarComponent}
      />
    </div>
  );
};

export default UsersList;
