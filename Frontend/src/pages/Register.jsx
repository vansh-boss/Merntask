import { useState } from "react";
import { registerUser } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      alert("✅ Registered Successfully");
      navigate("/login");
    } catch {
      setError("❌ Something went wrong");
    }
  };

  return (
    <div style={centerStyle}>
      <form onSubmit={submit} style={boxStyle}>
        <h2>Register</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={inputStyle}
        />

        <button style={btnStyle}>Register</button>
      </form>
    </div>
  );
}

/* styles same as login */
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
