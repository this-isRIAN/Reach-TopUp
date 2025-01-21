import React, { useEffect, useState } from "react";
import axios from "axios";

const GameList = () => {
    const [games, setGames] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    // Fetch data games
    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/games");
            console.log("API Response:", response.data); // Debug response
            setGames(response.data.data || []); // Set state with data or empty array
        } catch (error) {
            console.error("Error fetching games:", error);
            alert("Failed to fetch games. Please check the API.");
        }
    };

    const handleAddGame = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/games", {
                name,
                type,
                price,
            });
            if (response.status === 201) {
                alert("Game successfully added!");
                fetchGames(); // Refresh list games
                setName("");
                setType("");
                setPrice("");
            }
        } catch (error) {
            console.error("Error adding game:", error);
            alert("Failed to add game.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this game?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/games/${id}`);
                alert("Game successfully deleted!");
                fetchGames(); // Refresh list games
            } catch (error) {
                console.error("Error deleting game:", error);
                alert("Failed to delete game.");
            }
        }
    };

    return (
        <div className="container-fluid bg-light vh-100">
            <h2 className="text-center py-4">Game List</h2>

            {/* Form Tambah Game */}
            <div className="row px-5">
                <div className="col-12 col-lg-4">
                    <div className="card p-4 shadow">
                        <h4 className="mb-3">Add a New Game</h4>
                        <form onSubmit={handleAddGame}>
                            <div className="mb-3">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Type:</label>
                                <input
                                    type="text"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Price:</label>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Add Game
                            </button>
                        </form>
                    </div>
                </div>

                {/* List Games */}
                <div className="col-12 col-lg-8 mt-4 mt-lg-0">
                    <table className="table table-bordered table-hover shadow">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.length > 0 ? (
                                games.map((game) => (
                                    <tr key={game.id}>
                                        <td>{game.id}</td>
                                        <td>{game.name}</td>
                                        <td>{game.type}</td>
                                        <td>${parseFloat(game.price).toFixed(2)}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(game.id)}
                                                className="btn btn-danger btn-sm me-2"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No games available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GameList;