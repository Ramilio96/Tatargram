import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";

export const Post = ({ post, deletePost, setcurrentID }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={post.file} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>

          <Card.Text>{post.message}</Card.Text>
          <div className="d-flex">
            <Button
              variant="success"
              className="mx-1"
              onClick={() => {
                setcurrentID(post._id);
              }}
            >
              Edit
            </Button>

            <Button
              variant="danger"
              className="mx-1"
              onClick={() => {
                deletePost(post._id);
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{moment(post.date).fromNow()}</small>
        </Card.Footer>
      </Card>
    </>
  );
};
