import { useAuth } from "../hooks/useAuth";

export default function AdminReply({ reply }) {
  const { user } = useAuth();

  if (!user || user.role !== "admin") return null;

  return <p><b>Admin:</b> {reply}</p>;
}
