import { Link, useParams } from "react-router-dom";

export default function ViewCreator() {
  const { id } = useParams();

  return (
    <div style={{ padding: 16 }}>
      <h1>View Creator</h1>
      <p>Creator id: {id}</p>

      <div style={{ display: "flex", gap: 10 }}>
        <Link to={`/creators/${id}/edit`}>Edit</Link>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
