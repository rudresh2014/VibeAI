import React, { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [profile, setProfile] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    try {
      const p = localStorage.getItem("vibe_profile");
      if (p) setProfile(JSON.parse(p));
    } catch (e) {
      console.warn("Failed to read profile from localStorage", e);
    }
  }, []);

  const handleSave = (data) => {
    localStorage.setItem("vibe_profile", JSON.stringify(data));
    setProfile(data);
    setShowForm(false);
  };

  const handleRemove = () => {
    localStorage.removeItem("vibe_profile");
    setProfile(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>✨ Vibe AI ✨</h1>
        <p>Where Ideas Come Alive</p>

        {profile ? (
          <>
            <div className="profile-summary">
              <img
                className="avatar"
                src={profile.avatar || "./logo192.png"}
                alt="avatar"
              />
              <div style={{ textAlign: "left", marginLeft: 12 }}>
                <h3 style={{ margin: 0 }}>{profile.name}</h3>
                <p style={{ margin: 0, opacity: 0.85 }}>{profile.email}</p>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <button className="start-btn" onClick={() => setShowForm(true)}>
                Edit Profile
              </button>
              <button
                style={{ marginLeft: 8, background: "#ff6b6b" }}
                className="start-btn"
                onClick={handleRemove}
              >
                Remove Profile
              </button>
            </div>
          </>
        ) : (
          <button className="start-btn" onClick={() => setShowForm(true)}>
            Create Profile
          </button>
        )}
      </header>

      {showForm && (
        <Profile initial={profile} onSave={handleSave} onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default App;

