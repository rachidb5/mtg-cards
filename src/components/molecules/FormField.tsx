"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import CustomInput from "../atoms/Input";
import CustomLabel from "../atoms/Label";

type Props = {
  label: string; // geralmente obrigatório em um campo de formulário
} & InputHTMLAttributes<HTMLInputElement>;

const CustomFormField = forwardRef<HTMLInputElement, Props>(
  ({ label, id, name, ...rest }, ref) => {
    // Garante um id único caso não seja passado
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1">
        <CustomLabel htmlFor={inputId} label={label} />
        <CustomInput
          id={inputId}
          name={name || inputId}
          placeholder={label}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

CustomFormField.displayName = "CustomFormField";

export default CustomFormField;
