"use client";
import { TableRow } from "../ui/TableRow";
import { TableCell } from "../ui/TableCell";

type Props = {
  columns: string[];
};

export const TableHeader = ({ columns }: Props) => (
  <thead className="text-xs text-gray-200 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <TableRow>
      {columns.map((col) => (
        <TableCell key={col} className="font-semibold text-gray-100 uppercase px-6 py-3">
          {col}
        </TableCell>
      ))}
    </TableRow>
  </thead>
);
