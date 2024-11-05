import { motion } from "framer-motion";
import { User } from "../../lib/models/users.models";
import { AnimationsVariants } from "../../lib/models/animations";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomButton from "./customButton";

const UserItem = ({ user, onCancel }: { user: User; onCancel: () => void }) => {
  return (
    // Fondo negro bajo el dialog
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 h-screen w-screen"
      onClick={onCancel}
    >
      {/* Marco del dialogo */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={AnimationsVariants}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[500px]
        bg-slate-800 text-white rounded p-6 flex flex-col justify-around"
      >
        {/* Cuerpo del dialogo */}
        <div className="flex flex-col items-center gap-10 relative">
          {/* Boton para cerrar el dialogo */}
          <div className="absolute top-0 right-0">
            <CustomButton
              classButton="icon"
              icon="close"
              onClick={onCancel}
              tooltip="Cerrar"
            />
          </div>

          {/* Icono o foto del usuario */}
          <AccountCircleIcon sx={{ fontSize: 200 }} />

          {/* Nombre del usuario */}
          <p className="text-4xl font-bold text-center">{user.name}</p>

          {/* Correo del usuario */}
          <p className="text-center text-md">Correo: {user.email}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default UserItem;
