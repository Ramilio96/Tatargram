import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} from "../../redux/postReducer";
import { getPostsState } from "./post-selector";
import { Tatargram } from "./Tatargram";

const TatargaramContainer = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const [currentID, setcurrentID] = useState(0);

  return (
    <div>
      <Tatargram {...props} currentID={currentID} setcurrentID={setcurrentID} />
    </div>
  );
};
let mapStateToProps = (state) => ({
  posts: getPostsState(state),
});

export default connect(mapStateToProps, {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
})(TatargaramContainer);
