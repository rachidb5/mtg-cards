"use client";
import { Table } from "../ui/Table";
import { TableHeader } from "../molecules/TableHeader";
import { TableRowItem } from "../molecules/TableRowItem";

type Props = {
  columns: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: Record<string, any>[];
};

export const TableData = ({ columns, rows }: Props) => (
  <Table>
    <TableHeader columns={columns} />
    <tbody>
      {rows.map((row, i) => (
        <TableRowItem key={i} data={row} columns={columns} />
      ))}
    </tbody>
  </Table>
);
