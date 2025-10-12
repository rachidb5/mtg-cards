"use client";
import { TableRow } from "../atoms/TableRow";
import { TableCell } from "../atoms/TableCell";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  columns: string[];
};

export const TableRowItem = ({ data, columns }: Props) => (
  <TableRow>
    {columns.map((col) => (
      <TableCell key={col}>{data[col]}</TableCell>
    ))}
  </TableRow>
);
