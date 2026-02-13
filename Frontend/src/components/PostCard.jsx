export default function PostCard({ post }) {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
}
