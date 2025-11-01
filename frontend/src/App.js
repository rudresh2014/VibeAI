import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/mood") // 👈 backend link
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({ error: "Failed to fetch" });
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>VibeAI Frontend (React)</h1>
      {data ? (
        data.error ? (
          <p style={{ color: "red" }}>❌ {data.error}</p>
        ) : (
          <div>
            <p>✅ Flask Connection Successful</p>
            <p>User: {data.user}</p>
            <p>Mood: {data.mood}</p>
            <p>Status: {data.status}</p>
          </div>
        )
      ) : (
        <p>Loading data from Flask backend...</p>
      )}
    </div>
  );
}

export default App;


