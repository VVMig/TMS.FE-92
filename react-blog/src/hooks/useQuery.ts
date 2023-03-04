import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useQuery = (key?: string) => {
  const { search } = useLocation();

  return useMemo(() => {
    const queryParams = new URLSearchParams(search);

    console.log(queryParams);

    return key ? queryParams.get(key) : queryParams;
  }, [search]);
};
