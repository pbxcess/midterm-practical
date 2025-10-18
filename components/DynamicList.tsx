import React from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  slogan: string;
  image?: string;
}

interface DynamicListProps {
  items: Item[];
  onSelect: (item: Item) => void;
}

const toSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

const DynamicList: React.FC<DynamicListProps> = ({ items, onSelect }) => {
  if (items.length === 0) {
    return <p style={{ padding: 20 }}>No heroes available.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 12, textAlign: "center" }}>Marvel Heroes</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => {
          const imgUrl = item.image;

          return (
            <li key={item.id} style={{ margin: "10px 0" }}>
              <button
                onClick={() => onSelect(item)}
                aria-label={`View ${item.name} details`}
                style={{
                  width: "100%",
                  display: "block",
                  textAlign: "left",
                  padding: "18px 20px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,.25)",
                  cursor: "pointer",
                  backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('${imgUrl}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  color: "#fff",
                  boxShadow: "0 2px 6px rgba(0,0,0,.35)",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 18, textShadow: "0 1px 2px rgba(0,0,0,.8)" }}>
                  {item.name}
                </div>
                <div style={{ opacity: 0.9, marginTop: 4, fontStyle: "italic", textShadow: "0 1px 1px rgba(0,0,0,.8)" }}>
                  {item.slogan}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DynamicList;

