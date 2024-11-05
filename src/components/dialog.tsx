import { motion } from "framer-motion";
import { FormInputConfigModel } from "../../lib/models/dialog";
import { AnimationsVariants } from "../../lib/models/animations";
import CustomInput from "./customInput";
import CustomButton from "./customButton";
import { useEffect, useState } from "react";

const Dialog = ({
  title,
  message,
  onConfirm,
  onCancel,
  formConfig,
  confirmText,
  cancelText,
  classButton,
}: {
  title?: string;
  message?: string;
  onConfirm: (data: object) => void;
  onCancel: () => void;
  formConfig?: FormInputConfigModel[];
  confirmText: string;
  cancelText?: string;
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
  const [formData, setFormData] = useState<object>(Object);

  useEffect(() => {
    if (Object.keys(formData).length === 0 && formConfig) {
      let data = {};

      formConfig?.forEach((input) => {
        data = {
          ...data,
          [input.name]: input.value,
        };
      });
      setFormData(data);
    }
  }, [formConfig, formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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
        {/* Encabezadocon el titulo */}
        <div className="w-full relative ">
          <p className="text-2xl font-bold text-center">{title}</p>
        </div>
        {/* // Si no se pide un formulario */}

        <div className="flex flex-col items-center gap-10">
          {/* Mensaje del dialogo */}
          <p className="text-center text-xl">{message}</p>
        </div>

        {/* Cuerpo del dialogo */}
        {formConfig && formConfig.length ? (
          // Si se pide un fomrulario
          <form
            className="flex flex-col items-center gap-10 my-5 px-2"
            onSubmit={(e) => {
              e.preventDefault();
              onConfirm(formData);
            }}
          >
            {/* Creamos los campos del formulario que se soliciten */}
            {formConfig.map((input) => (
              <CustomInput
                key={input.name}
                type={input.type}
                name={input.name}
                value={input.value}
                onChange={handleChange}
                required={input.required}
                placeholder={input.placeholder}
                disable={false}
                fullWidth={input.fullWidth}
              ></CustomInput>
            ))}

            {/* Botones de confirmar y cancelar */}
            <div className="flex justify-around w-full mt-6">
              {cancelText && (
                <CustomButton
                  text={cancelText}
                  classButton="outline-warning"
                  onClick={onCancel}
                />
              )}

              <CustomButton
                text={confirmText}
                classButton={classButton || "confirm"}
                type="submit"
              />
            </div>
          </form>
        ) : (
          // {/* Botones de confirmar y cancelar */}
          <div className="flex justify-around w-full mt-6">
            {cancelText && (
              <CustomButton
                text={cancelText}
                classButton="outline-warning"
                onClick={onCancel}
              />
            )}
            <CustomButton
              text={confirmText}
              classButton={classButton || "confirm"}
              onClick={() => onConfirm({ aprobed: true })}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Dialog;
