import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={nav}>
      <div style={logo}>Community</div>

      <div style={btnContainer}>
        {!user && (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button style={btn}>Login</button>
            </Link>

            <Link to="/register" style={{ textDecoration: "none" }}>
              <button style={btn}>Register</button>
            </Link>
          </>
        )}

        {user && (
          <button onClick={logout} style={btn}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 20px",
};

const logo = {
  fontSize: 22,
  fontWeight: "bold",
};

const btnContainer = {
  display: "flex",
  gap: "10px",
};

const btn = {
  backgroundColor: "black", // button bg color
  color: "white", // button text
  border: "1px solid black",
  padding: "6px 12px",
  cursor: "pointer",
  fontSize: 15,
};
