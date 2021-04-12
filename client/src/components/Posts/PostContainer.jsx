import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  deletePost,
  getPosts,
  likePost,
  updatePost,
} from "../../redux/postReducer";
import { getPostsState } from "./post-selector";
import { Posts } from "./Posts";

const PostContainer = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  return (
    <div>
      <Posts {...props} />
    </div>
  );
};
let mapStateToProps = (state) => ({
  posts: getPostsState(state),
});

export default connect(mapStateToProps, {
  deletePost,
  getPosts,
  likePost,
  updatePost,
})(PostContainer);
