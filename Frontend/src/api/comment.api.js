import API from "./axios";

export const addComment = (postId, data) =>
  API.post(`/comments/${postId}`, data);

export const getComments = (postId) =>
  API.get(`/comments/${postId}`);
