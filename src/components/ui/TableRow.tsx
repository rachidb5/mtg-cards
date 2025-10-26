"use client";
import { HTMLAttributes } from "react";

export const TableRow = ({ children, ...rest }: HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="border-b last:border-0 hover:bg-gray-500" {...rest}>
    {children}
  </tr>
);