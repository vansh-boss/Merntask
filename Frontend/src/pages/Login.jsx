import { useState } from "react";
import { loginUser } from "../api/auth.api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ email, password });

      // backend se user + token
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      setError("❌ Something went wrong. Invalid email or password");
    }
  };

  return (
    <div style={centerStyle}>
      <form onSubmit={submit} style={boxStyle}>
        <h2>Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button style={btnStyle}>Login</button>
      </form>
    </div>
  );
}

/* 🔹 styles */
const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
};

const boxStyle = {
  width: 350,
  padding: 20,
  borderRadius: 10,
  border: "1px solid #ccc",
};

const inputStyle = {
  width: "100%",
  padding: 8,
  marginBottom: 10,
};

const btnStyle = {
  width: "100%",
  padding: 10,
};
