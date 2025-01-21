import React, { useEffect, useState } from "react";
import axios from "axios";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get("/api/games");
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      try {
        await axios.delete(`/api/games/${id}`);
        alert("Game successfully deleted!");
        fetchGames();
      } catch (error) {
        console.error("Error deleting game:", error);
        alert("Failed to delete game.");
      }
    }
  };

  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} - {game.type} - ${game.price}
            <button onClick={() => handleDelete(game.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
