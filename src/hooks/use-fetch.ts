import { useState, useEffect } from "react";

export default function useFetch<T = unknown>(
  url: string,
  options?: RequestInit
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true; // evita update após desmontagem

    async function fetchData() {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const result: T = await response.json();

        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, error, loading };
}
