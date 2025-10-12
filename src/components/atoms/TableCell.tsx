"use client";
import { HTMLAttributes } from "react";

export const TableCell = ({ children, ...rest }: HTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-4 py-2 text-sm text-gray-100" {...rest}>
    {children}
  </td>
);