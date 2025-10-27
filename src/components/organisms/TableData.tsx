"use client";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import {
  Box,
  Card,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

type Props = {
  columns: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: Record<string, any>[];
};

export const TableData = ({ columns, rows }: Props) => (
  <Card>
    <Box sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead sx={{ bgcolor: "background.default" }}>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: "background.paper" }}>
          {rows.map((row) => {
            return (
              <TableRow hover key={row.id}>
                <TableCell>
                  <Stack
                    sx={{ alignItems: "center" }}
                    direction="row"
                    spacing={2}
                  >
                    <Typography variant="subtitle2">{row.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{row.type}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  </Card>
);
