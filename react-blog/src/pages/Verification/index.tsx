import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoading } from "../../hooks/useLoading";
import { activateEmail } from "../../services";
import { Auth } from "../common";

export const Verification = () => {
  const { isLoading, onChangeLoadingState } = useLoading();
  const [isError, setIsError] = useState(false);

  const { uid, token } = useParams<{ uid: string; token: string }>();

  const verifyEmail = async () => {
    try {
      onChangeLoadingState(true);

      await activateEmail({
        uid,
        token,
      });
    } catch (error) {
      setIsError(true);
    } finally {
      onChangeLoadingState(false);
    }
  };

  useEffect(() => {
    verifyEmail();
    console.log("123");
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return <Auth formState={isError ? "activateerror" : "activatesuccess"} />;
};
