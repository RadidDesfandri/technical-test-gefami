import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit";
  variant: "danger" | "secondary";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full cursor-pointer  px-4 py-3 rounded-lg ${
        variant === "secondary" ? "bg-green-600" : "bg-red-600 text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
