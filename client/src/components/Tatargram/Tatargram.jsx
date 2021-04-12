import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormPost } from "./FormPost/FormPost";
import { Posts } from "./Posts/Posts";

export const Tatargram = ({
  posts,
  createPost,
  deletePost,
  updatePost,
  currentID,
  setcurrentID,
  storage,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <Posts
              posts={posts}
              deletePost={deletePost}
              setcurrentID={setcurrentID}
            />
          </Col>
          <Col xs={6}>
            <FormPost
              posts={posts}
              createPost={createPost}
              updatePost={updatePost}
              currentID={currentID}
              setcurrentID={setcurrentID}
              storage={storage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
