import api from "./axios";

export const getAllPosts = () => api.get("/posts");
export const createPost = (data) => api.post("/posts/create", data);
export const likePost = (id) => api.put(`/posts/like/${id}`);
export const deletePost = (id) => api.delete(`/posts/${id}`);
