import { useCallback } from "react";

export const useFetch = () => {
  const get = useCallback(async (url, searchQuery = "") => {
    if (!url) {
      throw new Error("URL is required for fetching data");
    }

    const newUrl = `${url}${searchQuery}`;
    const res = await fetch(newUrl);
    const response = await res.json();

    return response.meals || [];
  }, []);
  return get;
};
