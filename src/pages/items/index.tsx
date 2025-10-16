"use server";
import { TableData } from "@/components/organisms/TableData";
import useFetch from "@/hooks/use-fetch";

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
    console.log(data)
    return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4" data-testid="title">Lista</h1>
      <TableData columns={columns} rows={data.cards} />
    </div>
     
    );
  }
}