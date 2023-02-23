import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams<{ id: string }>();

  return <>{id}</>;
};
