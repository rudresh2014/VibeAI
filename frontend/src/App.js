import React from "react";
import "./App.css";
import MoodCard from "./MoodCard";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <h1>Welcome to VibeAI 💫</h1>
      <p>Your mood, our vibe — powered by AI!</p>
      <div className="card-container">
        <MoodCard />
        <Profile />
      </div>
    </div>
  );
}

export default App;

