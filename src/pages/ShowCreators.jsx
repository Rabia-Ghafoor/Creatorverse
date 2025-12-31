import { Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
  // Temporary demo data (replace with DB later)
  const creators = [
    {
      id: "1",
      name: "Example Creator",
      url: "https://www.youtube.com",
      description: "This is a sample creator card.",
      imageURL: "",
    },
  ];

  const handleDelete = (id) => {
    alert(`Delete creator with id: ${id} (wire to DB later)`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Creatorverse</h1>

      <Link to="/creators/new">+ Add Creator</Link>

      <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
        {creators.map((c) => (
          <CreatorCard key={c.id} creator={c} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
