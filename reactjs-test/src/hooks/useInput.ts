import { ChangeEvent, useState } from "react";

export const useInput = (defaultValue: string = "") => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handleChange] as const;
};
