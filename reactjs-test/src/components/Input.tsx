"use client";

import { ChangeEvent, useState } from "react";

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  placeholder?: string;
  type: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  type,
  placeholder,
  label,
  name,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isTypeShowPassword = showPassword ? "text" : "password";

  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type == "password" ? isTypeShowPassword : type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="outline-none ring-1 ring-green-700 focus:ring-2 w-full px-4 py-3 rounded-lg bg-blue-100"
        />
        {type == "password" && (
          <button
            type="button"
            onClick={() => setShowPassword!(!showPassword)}
            className="absolute top-[25%] right-3 cursor-pointer text-neutral-700"
          >
            {showPassword ? "Show" : "Hide"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
