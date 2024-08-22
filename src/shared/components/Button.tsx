import { ButtonHTMLAttributes } from "react";

type CustomButtonProps = {
  label?: string;
  click: () => void;
  tipo?: "default" | "danger" | "success";
};

type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  label = "label",
  tipo = "default",
  click,
  ...props
}: ButtonProps) {

  const theme = () => {
    switch (tipo) {
      case "danger":
        return "bg-red-500 hover:bg-red-700";
      case "success":
        return "bg-green-500 hover:bg-green-700";
      default:
        return "bg-blue-500 hover:bg-blue-700";
    }
  };

  return (
    <button
      onClick={click}
      className={`text-white font-bold py-1 px-2 rounded disabled:opacity-45 disabled:cursor-not-allowed  ${theme()}`}
      {...props}
    >
      {label}
    </button>
  );
}
