import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export const tatargramAPI = {
  getPosts() {
    return instance.get(`/posts`);
  },
  likePost(id) {
    return instance.patch(`/posts/${id}/likePost`);
  },
  createPost(newPost) {
    return instance.post(`/posts`, newPost);
  },
  updatePost(id, updatedPost) {
    return instance.patch(`/posts/${id}`, updatedPost);
  },
  deletePost(id) {
    return instance.delete(`/posts/${id}`);
  },
};
