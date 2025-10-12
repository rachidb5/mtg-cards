"use client";

import { forwardRef, InputHTMLAttributes } from "react";

type Props = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>; // herda as props padrão do <input>

const CustomInput = forwardRef<HTMLInputElement, Props>(
  ({  ...rest }, ref) => (
    <input ref={ref} {...rest} />
  )
);

CustomInput.displayName = "CustomInput"; // necessário no Next.js com forwardRef

export default CustomInput;
