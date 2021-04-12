import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export const FormPost = ({
  createPost,
  currentID,
  setcurrentID,
  updatePost,
  posts,
  storage,
}) => {
  const [postData, setPostData] = useState({ title: "", message: "", url: "" });
  const post = currentID ? posts.find((post) => post._id === currentID) : null;

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const clearForm = () => {
    setcurrentID(0);
    setPostData({ title: "", message: "", url: "" });
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];

    const fileRef = storage.ref().child(file.name);
    await fileRef.put(file);
    setPostData({ ...postData, url: await fileRef.getDownloadURL() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentID === 0) {
      createPost(postData);
      clearForm();
    } else {
      updatePost(currentID, postData);
      clearForm();
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="sticky-top pt-5">
        <h2 className="pb-2">
          {post ? `Измените ${post.title}` : `Добавьте дело`}
        </h2>

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
        <Form.Group controlId="formBasicTitle">
          <Form.File onChange={handleChange} label={postData.url} custom />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};
