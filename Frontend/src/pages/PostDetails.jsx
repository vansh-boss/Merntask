import { useEffect, useState } from "react";
import { getPostById } from "../api/post.api";
import { getComments } from "../api/comment.api";
import CommentList from "../component/CommentList";

export default function PostDetails({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostById(postId).then((res) => setPost(res.data));
    getComments(postId).then((res) => setComments(res.data));
  }, [postId]);

  if (!post) return null;

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentList comments={comments} />
    </>
  );
}
