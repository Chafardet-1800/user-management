import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";

const CustomButton = ({
  text,
  tooltip,
  icon,
  custonIconColor,
  size = 30,
  onClick,
  type,
  disabled,
  classButton,
}: {
  text?: string;
  tooltip?: string;
  icon?:
    | "back"
    | "forward"
    | "add"
    | "menu"
    | "close"
    | "check"
    | "edit"
    | "delete";
  custonIconColor?: string;
  size?: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classButton?:
    | ""
    | "icon"
    | "white"
    | "confirm"
    | "cancel"
    | "warning"
    | "outline-confirm"
    | "outline-cancel"
    | "outline-warning";
}) => {
  const iconColor = "#fff";

  let iconButton;

  switch (icon) {
    case "back":
      iconButton = (
        <ArrowBackIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
    case "forward":
      iconButton = (
        <ArrowForwardIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
    case "add":
      iconButton = (
        <AddIcon sx={{ color: custonIconColor || iconColor, fontSize: size }} />
      );
      break;
    case "menu":
      iconButton = (
        <MenuIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
    case "edit":
      iconButton = (
        <EditIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
    case "delete":
      iconButton = (
        <DeleteIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
    case "close":
      iconButton = (
        <ClearIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
    case "check":
      iconButton = (
        <CheckIcon
          sx={{ color: custonIconColor || iconColor, fontSize: size }}
        />
      );
      break;
  }

  switch (classButton) {
    case "confirm":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 min-w-[120px]	
            focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
            font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
            dark:focus:ring-green-800"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 min-w-[120px]
            focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
            font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
            dark:focus:ring-green-800"
        >
          {iconButton} {text}
        </button>
      );

    case "outline-confirm":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 
          focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 
          text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white 
          dark:hover:bg-green-600 dark:focus:ring-green-800 min-w-[120px]"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 
          focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 
          text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white 
          dark:hover:bg-green-600 dark:focus:ring-green-800 min-w-[120px]"
        >
          {iconButton} {text}
        </button>
      );

    case "cancel":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
          font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 
          dark:focus:ring-red-900 min-w-[120px]"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
          font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 
          dark:focus:ring-red-900 min-w-[120px]"
        >
          {iconButton} {text}
        </button>
      );

    case "outline-cancel":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 
          focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 min-w-[120px]
          dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 
          focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 min-w-[120px]
          dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          {iconButton} {text}
        </button>
      );

    case "warning":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 
          focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 min-w-[120px]"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 
          focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 min-w-[120px]"
        >
          {iconButton} {text}
        </button>
      );

    case "outline-warning":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 
          focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 
          dark:focus:ring-yellow-900 min-w-[120px]"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 
          focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 
          dark:focus:ring-yellow-900 min-w-[120px]"
        >
          {iconButton} {text}
        </button>
      );

    case "white":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 text-black bg-white hover:bg-gray-900 hover:text-white focus:outline-none 
          focus:ring-2 focus:ring-purple-950 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-white
          dark:hover:bg-gray-900 dark:hover:text-white dark:focus:ring-purple-950 dark:border-purple-950"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 text-black bg-white hover:bg-gray-900 hover:text-white focus:outline-none 
          focus:ring-2 focus:ring-purple-950 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-white
          dark:hover:bg-gray-900 dark:hover:text-white dark:focus:ring-purple-950 dark:border-purple-950"
        >
          {iconButton} {text}
        </button>
      );

    case "icon":
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center bg-transparent text-black dark:text-white
          focus:outline-none focus:ring-1 focus:ring-purple-950 rounded-full p-1"
          >
            {iconButton}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center bg-transparent text-black dark:text-white
          focus:outline-none focus:ring-1 focus:ring-purple-950 rounded-full p-1"
        >
          {iconButton}
        </button>
      );

    default:
      return tooltip ? (
        <Tooltip
          key={tooltip}
          placement={"bottom"}
          color={"foreground"}
          title={tooltip}
          className="capitalize"
        >
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="flex justify-center gap-3 text-white bg-gray-900 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-950 
          font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:hover:bg-purple-600
          dark:focus:ring-purple-950 dark:border-purple-950"
          >
            {iconButton} {text}
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className="flex justify-center gap-3 text-white bg-gray-900 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-950 
          font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:hover:bg-purple-600
          dark:focus:ring-purple-950 dark:border-purple-950"
        >
          {iconButton} {text}
        </button>
      );
  }
};

export default CustomButton;
