"use client";

import { forwardRef, LabelHTMLAttributes } from "react";

type Props = {
  label: string;
} & LabelHTMLAttributes<HTMLLabelElement>; // 👈 herda as props padrão do <label>

const CustomLabel = forwardRef<HTMLLabelElement, Props>(
  ({ label, ...rest }, ref) => (
    <label ref={ref} {...rest}>
      {label}
    </label>
  )
);

CustomLabel.displayName = "CustomLabel"; // necessário no Next.js com forwardRef

export default CustomLabel;
