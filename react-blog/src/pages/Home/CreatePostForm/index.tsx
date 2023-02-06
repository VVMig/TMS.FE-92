import { useState } from "react";
import { CommonButton, TextField } from "../../../components";
import { StyledForm } from "./styles";

export const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const onChangeTextField =
    (type: "title" | "text"): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      if (type === "text") {
        setText(e.target.value);
      } else {
        setTitle(e.target.value);
      }

      if (e.target.value) {
        setIsEmpty(false);
      }
    };

  const titleError = () => (title === "Nigga" ? "Bad word" : undefined);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!title || !text) {
      setIsEmpty(true);
    }
  };

  const emptyErrorText = isEmpty ? "Required field" : undefined;

  return (
    <div>
      <h1>Create post form</h1>
      <StyledForm onSubmit={onSubmit}>
        <TextField
          label="Title"
          onChange={onChangeTextField("title")}
          value={title}
          error={titleError() || emptyErrorText}
        />
        <TextField
          label="Text"
          onChange={onChangeTextField("text")}
          value={text}
          error={emptyErrorText}
        />
        <CommonButton type="submit">Create post</CommonButton>
      </StyledForm>
    </div>
  );
};
