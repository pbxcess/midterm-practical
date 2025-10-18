import React from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  slogan: string;
}

interface ListDetailsProps {
  selectedItem: Item | null;
}

const ListDetails: React.FC<ListDetailsProps> = ({ selectedItem }) => {
  if (!selectedItem) {
    return <p style={{ padding: "20px", textAlign: "center" }}>Select a hero to view details.</p>;
  }

  return (
    <div style={{ padding: "20px", borderTop: "1px solid rgba(255,255,255,.2)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 8 }}>{selectedItem.name}</h2>
      <p>
        <strong>Description:</strong> {selectedItem.description}
      </p>
      <p>
        <strong>Slogan:</strong> "{selectedItem.slogan}"
      </p>
    </div>
  );
};

export default ListDetails;
