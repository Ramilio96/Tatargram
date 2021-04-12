import React from "react";
import { createPost } from "../../redux/postReducer";
import { FormPost } from "./FormPost";

const FormPostContainer = () => {
  return (
    <div>
      <FormPost createPost={createPost} />
    </div>
  );
};

export default FormPostContainer;
