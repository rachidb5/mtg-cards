"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";

type Props = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; // 👈 herda as props padrão do <button>

const CustomButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, ...rest }, ref) => (
    <button ref={ref} {...rest}>
      {label}
    </button>
  )
);

CustomButton.displayName = "CustomButton"; // necessário no Next.js para forwardRef

export default CustomButton;