import React from "react";
import { CardColumns } from "react-bootstrap";
import { Post } from "./Post";

export const Posts = ({ posts, deletePost, updatePost, setcurrentID }) => {
  return (
    <>
      <CardColumns className="d-flex justify-content-center flex-wrap pt-5">
        {posts.length ? (
          posts.map((post) => (
            <Post
              key={post._id}
              post={post}
              deletePost={deletePost}
              updatePost={updatePost}
              setcurrentID={setcurrentID}
            />
          ))
        ) : (
          <h1 className="text-center mt-5">No posts...</h1>
        )}
      </CardColumns>
    </>
  );
};
