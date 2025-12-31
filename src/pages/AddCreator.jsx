import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCreator() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Create creator (wire to DB later): " + JSON.stringify(form, null, 2));
    navigate("/");
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Add Creator</h1>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, maxWidth: 500 }}>
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <input name="url" placeholder="Channel URL" value={form.url} onChange={onChange} required />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={onChange}
          required
        />
        <input name="imageURL" placeholder="Image URL (optional)" value={form.imageURL} onChange={onChange} />
        <button type="submit">Save</button>
      </form>

      <div style={{ marginTop: 12 }}>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
