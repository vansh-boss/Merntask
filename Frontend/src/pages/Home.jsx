import { useEffect, useState } from "react";
import { createPost, getAllPosts, likePost, deletePost } from "../api/post.api";
import { addComment, getComments } from "../api/comment.api";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({});

  const fetchPosts = async () => {
    const res = await getAllPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  const submitPost = async (e) => {
    e.preventDefault();
    if (!title || !content) return;
    await createPost({ title, content });
    setTitle("");
    setContent("");
    fetchPosts();
  };

  const handleLike = async (id) => {
    await likePost(id);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this post?")) {
      await deletePost(id);
      fetchPosts();
    }
  };

  const loadComments = async (postId) => {
    const res = await getComments(postId);
    setComments({ ...comments, [postId]: res.data });
  };

  const submitComment = async (postId) => {
    if (!comment) return;
    await addComment(postId, { text: comment });
    setComment("");
    loadComments(postId);
  };

  return (
    <div style={wrapper}>
      <div style={container}>

        {/* 🔒 NOT LOGGED IN */}
        {!user && (
          <p style={loginMsg}>
            Please login to view posts
          </p>
        )}

        {/* ➕ CREATE POST */}
        {user && (
          <div style={card}>
            <h3>Create Post</h3>
            <form onSubmit={submitPost}>
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={input}
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={input}
              />
              <button>Add Post</button>
            </form>
          </div>
        )}

        <br />

        {/* 📰 POSTS */}
        {user &&
          posts.map((p) => (
            <div key={p._id} style={card}>
              <h4>{p.title}</h4>
              <p>{p.content}</p>

              <button onClick={() => handleLike(p._id)}>
                ❤️ {p.likes?.length || 0}
              </button>{" "}

              <button onClick={() => loadComments(p._id)}>
                💬 {comments[p._id]?.length || 0}
              </button>{" "}

              <button
                style={{ color: "red" }}
                onClick={() => handleDelete(p._id)}
              >
                🗑 Delete
              </button>

              {/* COMMENTS */}
              {comments[p._id]?.map((c) => (
                <p key={c._id} style={{ marginLeft: 10 }}>
                  💬 {c.text}
                </p>
              ))}

              {/* ADD COMMENT */}
              <div style={{ marginTop: 10 }}>
                <input
                  placeholder="Add comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={() => submitComment(p._id)}>Send</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const wrapper = {
  display: "flex",
  justifyContent: "center",
  marginTop: 30,
};

const container = {
  width: "600px",
};

const card = {
  border: "1px solid #ddd",
  padding: 15,
  borderRadius: 8,
  marginBottom: 20,
};

const input = {
  width: "100%",
  marginBottom: 10,
};

const loginMsg = {
  textAlign: "center",
  marginTop: 60,
  fontSize: 18,
};
