import { User } from "../../lib/models/users.models";
import Spinner from "./spinner";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const UsersList = ({ list }: { list: User[] | null }) => {
  return (
    // COntenedor de la tabla
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] ">
      {/* Evaluamos si la lista es vacia */}
      {!list || list!.length === 0 ? (
        // En caso de que la lista este vacia ponemos el spinner
        <div className="h-[300px]">
          <Spinner />
        </div>
      ) : (
        // En caso de que la lista no este vacia mostramos la tabla
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          {/* Encabezado */}
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            {/* Fila del encabezado */}
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>

              <th scope="col" className="px-6 py-3">
                Nombre
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>
            </tr>
          </thead>

          {/* Cuerpo de la tabla */}
          <tbody>
            {list!.map((user: User) => (
              <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
                {/* ID con funcion para copiar al portapapeles */}
                <td
                  className="px-6 py-4"
                  data-tooltip-target="tooltip-bottom"
                  data-tooltip-placement="bottom"
                  onClick={() => {
                    navigator.clipboard.writeText(user.id?.toString() || "");
                  }}
                ></td>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>

                <td className="px-6 py-4">Laptop</td>

                <td className="px-6 py-4 text-right">
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </td>

                <td className="px-6 py-4 text-right">
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        className="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Tooltip right
      </button>
      {/* Tooltip */}
      <div
        id="tooltip-bottom"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Copiar
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default UsersList;
