import { tatargramAPI } from "../api/api";

const GET_POSTS = "GET_POSTS";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const LIKE = "LIKE";

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case LIKE:
      return state.map((p) => (p._id === action.payload._id ? action.post : p));

    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await tatargramAPI.getPosts();
    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await tatargramAPI.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await tatargramAPI.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await tatargramAPI.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await tatargramAPI.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
