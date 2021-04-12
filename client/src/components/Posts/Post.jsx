import React from "react";
import { Card } from "react-bootstrap";

export const Post = ({ post }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.message}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};
