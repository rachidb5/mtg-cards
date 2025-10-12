"use client";

import { InputProps, InputLabel, FormControl, TextField } from "@mui/material";
import { forwardRef } from "react";

type Props = InputProps & {
  label?: string;
};

const CustomInput = forwardRef<HTMLInputElement, Props>(
  ({ label }, ref) => (
    <FormControl>
      {label && (
        <InputLabel
          style={{
            display: "block",
            marginBottom: 4,
            fontSize: 14,
            color: "#555",
          }}
        >
          {label}
        </InputLabel>
      )}
      <TextField ref={ref} />
    </FormControl>
  )
);

CustomInput.displayName = "CustomInput"; // importante no Next.js

export default CustomInput;
