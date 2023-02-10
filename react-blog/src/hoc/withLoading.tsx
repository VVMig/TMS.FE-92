import { useState } from "react";

interface IProps {
  onChangeLoadingState: (newLoadingState: boolean) => void;
  isLoading: boolean;
}

export function withLoading<Type>(
  Component: React.FC<Type & IProps>,
  defaultValue?: boolean
) {
  return (props) => {
    const [isLoading, setIsLoading] = useState(!!defaultValue);

    const onChangeLoadingState = (newLoadingState: boolean) => {
      setIsLoading(newLoadingState);
    };

    return (
      <Component
        isLoading={isLoading}
        onChangeLoadingState={onChangeLoadingState}
        {...props}
      />
    );
  };
}
