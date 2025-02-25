import { useQuery } from "@tanstack/react-query"

const BASE_URL = "http://localhost:3000";

export const useFetch = (endpoint: string) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/${endpoint}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
  });
};
