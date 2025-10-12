"use client";
import { HTMLAttributes } from "react";

export const Table = ({ children, ...rest }: HTMLAttributes<HTMLTableElement>) => (
  <table  className="w-full text-sm text-left rtl:text-right text-gray-100" {...rest}>
    {children}
  </table>
);
