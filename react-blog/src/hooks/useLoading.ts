import { useState } from "react";

export const useLoading = (defaultValue?: boolean) => {
  const [isLoading, setIsLoading] = useState(!!defaultValue);

  const onChangeLoadingState = (newLoadingState: boolean) => {
    setIsLoading(newLoadingState);
  };

  return {
    isLoading,
    onChangeLoadingState,
  };
};
