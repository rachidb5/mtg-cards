import { render, screen } from "@testing-library/react";
import ListPage from "@/pages/items/index";
import useFetch from "@/hooks/use-fetch";

// 👇 Mocka o hook customizado
jest.mock("../hooks/use-fetch");

const mockedUseFetch = useFetch as jest.Mock;

describe("ListPage", () => {
  it.skip("deve exibir o loading e depois renderizar a lista", async () => {
    // 1️⃣ Mock inicial: simulando estado de loading
    mockedUseFetch.mockReturnValueOnce({
      data: null,
      error: null,
      loading: true,
    });

    const { rerender } = render(<ListPage />);

    // Verifica se o estado inicial (loading) aparece
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // 2️⃣ Mock final: simulando resposta da API
    mockedUseFetch.mockReturnValueOnce({
      data: {
        cards: [
          { name: "Black Lotus", type: "Artifact" },
          { name: "Lightning Bolt", type: "Instant" },
        ],
      },
      error: null,
      loading: false,
    });

    // Força re-renderização com o novo estado do hook
    rerender(<ListPage />);

    // Espera a renderização dos elementos após a "requisição"
    const title = await screen.findByTestId("title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Lista");

    // Também podemos validar as linhas da tabela, se quiser:
    expect(screen.getByText("Black Lotus")).toBeInTheDocument();
    expect(screen.getByText("Lightning Bolt")).toBeInTheDocument();
  });

  it.skip("deve exibir mensagem de erro se a requisição falhar", async () => {
    mockedUseFetch.mockReturnValueOnce({
      data: null,
      error: new Error("Falha na API"),
      loading: false,
    });

    render(<ListPage />);

    const errorMessage = await screen.findByText(/falha na api/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
