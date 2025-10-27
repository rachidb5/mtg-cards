"use server";
import { TableData } from "@/components/organisms/TableData";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import useFetch from "@/hooks/use-fetch";
import { Stack, Typography, useTheme } from "@mui/material";
import Container from '@mui/material/Container';

const columns = ["name", "type"];


const URL = 'https://api.magicthegathering.io/v1/cards'
const OPTIONS: RequestInit = {
  method: "GET", // opcional, GET é padrão
}
export default function ListPage() {
  type Card = {
  name: string;
  type: string;
  // adicione outros campos se quiser
};
const { Theme } = useTheme() as { Theme: string; toggleTheme: () => void };
type ApiResponse = {
  cards: Card[];
};

  const { data, error, loading } = useFetch<ApiResponse>(URL, OPTIONS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  if (data) {
    return (
    <Container>
         <Stack spacing={1}>
        <div className="absolute top-2 right-4">
          <ThemeSwitch />
          {Theme}
        </div>
      </Stack>
      <Typography variant="h4">Lista</Typography>
      <TableData columns={columns} rows={data.cards} />
    </Container>
     
    );
  }
}