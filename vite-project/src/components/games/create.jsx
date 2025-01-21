import React, { useState } from "react";
import axios from "axios";

const CreateGame = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/games", { name, type, price });
      alert("Game successfully added!");
      setName("");
      setType("");
      setPrice("");
    } catch (error) {
      console.error("Error adding game:", error);
      alert("Failed to add game.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
};

export default CreateGame;