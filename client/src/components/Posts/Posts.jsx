import React from "react";
import { Post } from "./Post";
import { CardColumns } from "react-bootstrap";

export const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <CardColumns>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </CardColumns>
    </>
  );
};
