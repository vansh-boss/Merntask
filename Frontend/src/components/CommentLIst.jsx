export default function CommentList({ comments }) {
  return (
    <>
      {comments.map((c) => (
        <p key={c._id}>{c.text}</p>
      ))}
    </>
  );
}
