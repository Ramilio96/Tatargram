import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const FormPost = ({ createPost }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    file: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postData);

    setPostData({
      title: "",
      message: "",
      file: "",
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicTitle">
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <Form.Control
            name="message"
            type="text"
            placeholder="Enter message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </Form.Group>
        <Form.File
          name="file"
          id="custom-file"
          label={postData.file}
          custom
          onChange={(e) => {
            setPostData({ ...postData, file: e.target.files[0].name });
          }}
        />
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};
