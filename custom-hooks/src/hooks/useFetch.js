import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initValue) {
  const [isFetching, setIsFetching] = useState();
  const [fetchData, setFetchData] = useState(initValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunction();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return {
    isFetching,
    fetchData,
    setFetchData,
    error,
  };
}
