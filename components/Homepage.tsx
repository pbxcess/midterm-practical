"use client";
import React, { useState } from "react";
import DynamicList from "./DynamicList";
import ListDetails from "./ListDetails";

interface Item {
  id: number;
  name: string;
  description: string;
  slogan: string;
  image?: string;
}

const Homepage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Spiderman",
      description:
        "Peter Parker, a teenage boy who gets bitten by a radioactive spider, granting him superhuman powers such as strength, speed, agility, and the ability to cling to walls.",
      slogan: "With great power comes great responsibility",
      image: "/heroes/spiderman.jpg",
    },
    {
      id: 2,
      name: "Black Panther",
      description:
        "T'Challa, the King of Wakanda. After becoming King he was exposed to a mystical herb, enhancing his strength and agility to near-superhuman levels.",
      slogan: "Show them who we are",
      image: "/heroes/black-panther.webp",
    },
    {
      id: 3,
      name: "Iron Man",
      description:
        "Tony Stark, a genius and billionaire, becomes the superhero Iron Man after building a powerful, high-tech suit of armor to escape captivity and protect the world.",
      slogan: "I am Iron Man",
      image: "/heroes/iron-man.jpeg",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [newHero, setNewHero] = useState("");
  const [error, setError] = useState("");

  const handleSelect = (item: Item) => {
    setSelectedItem(item);
  };

  const handleAddHero = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHero.trim()) {
      setError("Hero name cannot be empty!");
      return;
    }

    const newItem: Item = {
      id: items.length + 1,
      name: newHero,
      description: "A mysterious new hero joins the Marvel Universe.",
      slogan: "New beginnings await!",
    };

    setItems([...items, newItem]);
    setNewHero("");
    setError("");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Marvel Heroes Directory</h1>

      {/* FORM */}
      <form onSubmit={handleAddHero} style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Enter your hero's name!"
          value={newHero}
          onChange={(e) => setNewHero(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Hero
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* LIST + DETAILS */}
      <DynamicList items={items} onSelect={handleSelect} />
      <ListDetails selectedItem={selectedItem} />
    </div>
  );
};

export default Homepage;
