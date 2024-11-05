const CustomInput = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  disable = false,
  required,
  fullWidth,
  width,
}: {
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: string;
  disable: boolean;
  fullWidth: boolean;
  width?: string;
  required: boolean;
}) => {
  return (
    <input
      name={name}
      type={type}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      disabled={disable}
      defaultValue={value}
      required={required}
      className={`
        h-20 bg-transparent border-b text-2xl self-center focus:outline-none rounded-md
        ${fullWidth ? "w-full" : width ? width : "w-4/5"} 
        ${disable && "opacity-50 cursor-default"}
      `}
    ></input>
  );
};

export default CustomInput;
