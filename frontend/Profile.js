import React, { useState } from "react";
import "./Profile.css";

function Profile({ initial, onSave, onCancel }) {
  const [name, setName] = useState(initial?.name || "");
  const [email, setEmail] = useState(initial?.email || "");
  const [avatar, setAvatar] = useState(initial?.avatar || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }
    onSave({ name: name.trim(), email: email.trim(), avatar: avatar.trim() });
  };

  return (
    <div className="profile-form-backdrop">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>{initial ? "Edit" : "Create"} Profile</h2>

        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Avatar URL
          <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="https://..." />
        </label>

        <div className="profile-form-actions">
          <button type="submit" className="start-btn">Save</button>
          <button type="button" className="start-btn cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
