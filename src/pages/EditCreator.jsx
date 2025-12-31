import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Temporary default values (load from DB later)
  const [form, setForm] = useState({
    name: "Example Creator",
    url: "https://www.youtube.com",
    description: "Edit me",
    imageURL: "",
  });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Update creator ${id} (wire to DB later): ` + JSON.stringify(form, null, 2));
    navigate(`/creators/${id}`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Edit Creator</h1>
      <p>Editing id: {id}</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, maxWidth: 500 }}>
        <input name="name" value={form.name} onChange={onChange} required />
        <input name="url" value={form.url} onChange={onChange} required />
        <textarea name="description" value={form.description} onChange={onChange} required />
        <input name="imageURL" value={form.imageURL} onChange={onChange} />
        <button type="submit">Save Changes</button>
      </form>

      <div style={{ marginTop: 12 }}>
        <Link to={`/creators/${id}`}>Cancel</Link>
      </div>
    </div>
  );
}
